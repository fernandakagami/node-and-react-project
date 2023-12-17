import Image from "next/image";
import { Roboto } from 'next/font/google'
import { useEffect } from 'react';
import instance from "@/common/config/api";
import { useDispatch, useSelector } from "react-redux";
import { addProducts } from "@/store/reducers/products";

const roboto = Roboto({ subsets: ['latin'], weight: ["100", "300", "400", "500", "700", "900"] })

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products)

  const searchProducts = async () => {
    const response = await instance.get('/products');
    dispatch(addProducts(response.data));
  }

  useEffect(() => {
    searchProducts();
  }, []);

  const listProducts = products?.map((product) => (
    <li className={`max-w-sm rounded overflow-hidden shadow-lg ${roboto.className} mb-10`} style={{ width: "320px" }} key={product._id}>
      <Image src={`http://localhost:3000/${product.path.replace(/\\/g, '/')}`} alt={product.name} width={320} height={178} />
      <div className="flex justify-between items-center px-6 py-4">
        <div className="flex flex-col justify-center">
          <h3 className="text-lg font-medium capitalize" style={{ color: "#F5643DCC" }}>{product.name}</h3>
          <small className="text-xs" style={{ color: "#A1A1A1" }}>Nota: {product.score.toFixed(1)}</small>
        </div>
        <p className="text-lg font-medium" style={{ color: "#F5643DCC" }}>
          R$ {product.value.toFixed(2).replace(".", ",")}
        </p>
      </div>
    </li>
  ))

  return (
    <>
      <div className="container mx-auto px-9 md:hidden" style={{ paddingTop: "30px" }}>
        <h2 className="text-2xl font-bold" style={{ color: "#323351", paddingBottom: "45px" }}>PRODUTOS</h2>
        <ul className="flex flex-col items-center">
          {listProducts}
        </ul>
      </div>
      <div className="container mx-auto px-12 mb-28 hidden md:block" style={{ paddingTop: "118px" }}>
        <h2 className="text-2xl font-bold" style={{ color: "#323351", paddingBottom: "64px" }}>PRODUTOS</h2>
        <ul className="grid grid-cols-3 gap-24">
          {listProducts}
        </ul>
      </div>
    </>
  )
}

export default Products