import Image from 'next/image';
import erlenmeyer from '../../assets/images/erlenmeyer.svg';
import bottle from '../../assets/images/bottle.svg';

const Banner = () => {
  return (
    <div className="p-0 m-0 w-full" style={{
      height: "57vh",
      background: "linear-gradient(to top, white 0%, white 45%, #323351 45%, #323351 100%)"
    }}>
      <div className="container mx-auto px-12">
        <div className="grid grid-cols-3">
          <div className="flex flex-col justify-between" style={{ height: "509px", backgroundColor: "#F9F0EE", padding: "91px 71px 61px", color: "#323351" }}>
            <h3 className="text-lg font-bold">PRODUTOS</h3>
            <div>
              <Image src={erlenmeyer} width={32} height={32} alt="erlenmeyer" className="pb-3.5" />
              <h2 className="text-4xl">Vidrarias e
                Equipamentos</h2>
            </div>
          </div>
          <div className="flex flex-col justify-between text-white" style={{ height: "541px", backgroundColor: "#F5643D", padding: "91px 71px 93px" }}>
            <h3 className="text-lg font-bold text-white">QUÍMICOS</h3>
            <div>
              <div className='flex items-end'>
                <Image src={bottle} width={18} height={32} alt="erlenmeyer" className="pb-3.5 mr-1" />
                <Image src={bottle} width={10} height={20} alt="erlenmeyer" className="pb-3.5" />
              </div>
              <h2 className="text-4xl">Materiais
                Químicos</h2>
            </div>
          </div>
          <div className="flex flex-col justify-between" style={{ height: "509px", backgroundColor: "#F9F0EE", padding: "91px 71px 61px", color: "#323351" }}>
            <h3 className="text-lg font-bold">LABORATÓRIOS</h3>
            <h2 className="text-4xl">Ferramentas
              e utensílios</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;