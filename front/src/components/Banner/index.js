import Image from 'next/image';
import erlenmeyer from '../../assets/images/erlenmeyer.svg';
import bottle from '../../assets/images/bottle.svg';
import tools from '../../assets/images/tools.svg';
import starOne from '../../assets/images/star1.svg';
import starTwo from '../../assets/images/star2.svg';
import starThree from '../../assets/images/star3.svg';
import science from '../../assets/images/made-with-science.svg';

const Banner = () => {
  return (
    <>
      <div className="py-0 px-6 mt-9 w-full md:hidden z-10 relative">
        <div className="container mx-auto px-3.5">
          <div className="ps-9 py-6 pe-7 flex justify-between items-center" style={{ backgroundColor: "#F9F0EE" }}>
            <div className="flex justify-between items-center" style={{ color: "#323351" }}>
              <Image src={erlenmeyer} width={23} height={23} alt="erlenmeyer" />
              <h2 className="px-3 text-lg leading-4">Vidrarias e Equipamentos</h2>
            </div>
            <Image src={starOne} alt="star" />
          </div>
        </div>
        <div className="container mx-auto px-3.5">
          <div className="ps-9 py-6 pe-7 flex justify-between items-center" style={{ backgroundColor: "#F5643D" }}>
            <div className="flex justify-between items-center" style={{ color: "#323351" }}>
              <div className="flex justify-between items-end">
                <Image src={bottle} width={18} height={32} alt="erlenmeyer" className="pb-3.5 mr-1" />
                <Image src={bottle} width={10} height={20} alt="erlenmeyer" className="pb-3.5" />
              </div>
              <h2 className="px-3 text-lg leading-4 text-white">Materiais
                Químicos</h2>
            </div>
            <Image src={starOne} />
          </div>
        </div>
        <div className="container mx-auto px-3.5">
          <div className="ps-9 py-6 pe-7 flex justify-between items-center" style={{ backgroundColor: "#F9F0EE" }}>
            <div className="flex justify-between items-center" style={{ color: "#323351" }}>
              <Image src={tools} width={23} height={23} alt="erlenmeyer" />
              <h2 className="px-3 text-lg leading-4">Ferramentas
                e utensílios</h2>
            </div>
            <Image src={starTwo} />
          </div>
        </div>
      </div>
      <div className="p-0 m-0 w-full hidden md:block" style={{
        height: "57vh",
        background: "linear-gradient(to top, white 0%, white 45%, #323351 45%, #323351 100%)"
      }}>
        <div className="container mx-auto px-12 relative">
          <Image src={starThree} className="absolute" style={{ top: "-206px", right: "-265px" }} />
          <Image src={science} className="absolute" style={{ top: "60px", left: "-194px" }} />
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
              <div>
                <Image src={tools} width={32} height={32} alt="erlenmeyer" className="pb-3.5" />
                <h2 className="text-4xl">Ferramentas e utensílios</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  );
};
export default Banner;