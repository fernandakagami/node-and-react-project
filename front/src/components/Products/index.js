import glasses from "../../assets/images/glasses.png";
import Image from "next/image";
import { Roboto } from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], weight: ["100", "300", "400", "500", "700", "900"] })

const Products = () => {
  return (
    <div className="container mx-auto px-12 mb-28" style={{ paddingTop: "118px" }}>
      <h2 className="text-2xl font-bold" style={{ color: "#323351", paddingBottom: "64px" }}>PRODUTOS</h2>
      <ul className="grid grid-cols-3 gap-24">
        <li className={`max-w-sm rounded overflow-hidden shadow-lg ${roboto.className}`}>
          <Image src={glasses} alt="vidros" className="w-full" />
          <div className="flex justify-between items-center px-6 py-4">
            <div className="flex flex-col justify-center">
              <h3 className="text-lg font-medium" style={{ color: "#F5643DCC" }}>Name here</h3>
              <small className="text-xs">Nota: 9.0</small>
            </div>
            <p className="text-lg font-medium" style={{ color: "#F5643DCC" }}>
              R$ 200,00
            </p>
          </div>
        </li>
        <li className={`max-w-sm rounded overflow-hidden shadow-lg ${roboto.className}`}>
          <Image src={glasses} alt="vidros" className="w-full" />
          <div className="flex justify-between items-center px-6 py-4">
            <div className="flex flex-col justify-center">
              <h3 className="text-lg font-medium" style={{ color: "#F5643DCC" }}>Name here</h3>
              <small className="text-xs">Nota: 9.0</small>
            </div>
            <p className="text-lg font-medium" style={{ color: "#F5643DCC" }}>
              R$ 200,00
            </p>
          </div>
        </li>
        <li className={`max-w-sm rounded overflow-hidden shadow-lg ${roboto.className}`}>
          <Image src={glasses} alt="vidros" className="w-full" />
          <div className="flex justify-between items-center px-6 py-4">
            <div className="flex flex-col justify-center">
              <h3 className="text-lg font-medium" style={{ color: "#F5643DCC" }}>Name here</h3>
              <small className="text-xs">Nota: 9.0</small>
            </div>
            <p className="text-lg font-medium" style={{ color: "#F5643DCC" }}>
              R$ 200,00
            </p>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Products