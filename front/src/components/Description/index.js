import Image from 'next/image';
import star from '../../assets/images/star4.svg';

const Description = () => {
  return (
    <>
      <div className="container mx-auto flex items-center justify-between flex-wrap px-12 pb-20 md:hidden relative">
        <h2 className="text-3xl text-white pb-2.5 font-normal">Qualidade e expertise em produtos <span style={{ color: "#48C7F3" }}>químicos e acessórios</span></h2>
        <p className="text-base text-white font-normal">Estamos preparados para te entender e atender da melhor forma para suprir todas as suas demandas em químicos e similares.</p>
      </div>
      <div className='absolute mx-auto w-full overflow-x-hidden' style={{ left: "50%", top: "104%", transform: "translate(-50%, -50%)" }}>
        <Image src={star} width={400} height={350} alt="estrelas" />
      </div >
    </>
  )
}

export default Description;