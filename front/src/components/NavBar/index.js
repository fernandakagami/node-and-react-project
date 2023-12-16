import Link from 'next/link';
import Image from 'next/image';

import Description from '../Description';

import logo from '../../assets/images/logo.svg';
import budget from '../../assets/images/budget.svg';
import menu from '../../assets/images/menu.svg';

import styles from '../../styles/button.module.scss';

const Navbar = () => {
  return (
    <>
      <nav className="md:hidden" style={{ backgroundColor: "#323351", paddingBottom: "333px" }}>
        <div>
          <div className="container mx-auto flex items-center justify-between flex-wrap px-6 pt-6" style={{ marginBottom: "119px" }}>
            <div className="flex items-center justify-between flex-wrap p-6">
              <Image src={logo} width={160} height={35} alt="Halogenn's logo" />
            </div>
            <div className="flex">
              <button className={`flex items-center justify-between p-2 rounded-lg m-6 ${styles.budget}`} style={{ backgroundColor: "#F5643D" }}>
                <Image src={budget} width={22} height={22} alt="budget button" />
              </button>
              <button>
                <Image src={menu} width={29} height={29} alt="menu button" />
              </button>
            </div>
          </div>
          <Description />
        </div>
      </nav>
      <nav className="hidden md:block" style={{ backgroundColor: "#323351" }}>
        <div className="container mx-auto flex items-center justify-between px-6 pt-6 pb-20">
          <div className="flex items-center justify-between py-6 ps-6">
            <Image src={logo} width={160} height={35} alt="Halogenn's logo" className="mr-16" />
            <ul className="flex justify-between items-center">
              <li className="mr-11 text-sm" style={{ color: "#84C4EA" }}>
                <Link className='text-base font-normal' href="#">Início</Link>
              </li>
              <li className="mr-11 text-white text-sm">
                <Link className='text-base font-normal' href="#">Produtos</Link>
              </li>
              <li className="mr-11 text-white text-sm">
                <Link className='text-base font-normal' href="#">Laudos</Link>
              </li>
              <li className="mr-11 text-white text-sm">
                <Link className='text-base font-normal' href="#">Sobre nós</Link>
              </li>
              <li className="mr-11 text-white text-sm">
                <Link className='text-base font-normal' href="#">Certificações</Link>
              </li>
              <li className="text-white text-sm">
                <Link className='text-base font-normal' href="#">Contato</Link>
              </li>
            </ul>
          </div>
          <button className={`flex items-center justify-between p-4 py-3 rounded-lg my-6 me-6 ${styles.budget}`} style={{ backgroundColor: "rgba(255, 255, 255, 0.09)" }}>
            <Image src={budget} width={16} height={15} alt="menu button" />
            <span className="ps-2 text-sm text-white">Orçamento</span>
          </button>
        </div>
      </nav>
    </>
  );
};
export default Navbar;