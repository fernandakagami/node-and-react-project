import { useState, useEffect } from 'react';

import Link from 'next/link';
import Image from 'next/image';

import Description from '../Description';

import { SlArrowDown } from "react-icons/sl";
import { SlArrowUp } from "react-icons/sl";

import logo from '../../assets/images/logo.svg';
import budget from '../../assets/images/budget.svg';
import menu from '../../assets/images/menu.svg';
import logoColor from '../../assets/images/logo-color.svg';
import icon1 from '../../assets/images/icon1.svg';
import icon2 from '../../assets/images/icon2.svg';
import icon3 from '../../assets/images/icon3.svg';
import icon4 from '../../assets/images/icon4.svg';
import icon5 from '../../assets/images/icon5.svg';
import icon6 from '../../assets/images/icon6.svg';
import icon7 from '../../assets/images/icon7.svg';

import styles from '../../styles/button.module.scss';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)


  function handleDropdown() {
    showNavbar == false ? setShowNavbar(true) : setShowNavbar(false)
  }

  useEffect(() => {
    console.log(showNavbar);
  }, [showNavbar]);

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
        {!showNavbar &&
          <div className="container mx-auto flex items-center justify-between px-6 pt-6 pb-20">
            <div className="flex items-center justify-between py-6 ps-6">
              <Image src={logo} width={160} height={35} alt="Halogenn's logo" className="mr-16" />
              <ul className="flex justify-between items-center">
                <li className="mr-11 text-sm" style={{ color: "#84C4EA" }}>
                  <Link className='text-base font-normal' href="#">Início</Link>
                </li>
                <li className="mr-11 text-white text-sm flex justify-center items-center cursor-pointer" onClick={handleDropdown}>
                  <Link className='text-base font-normal mr-2' href="#">Produtos</Link>
                  <SlArrowDown style={{ fontSize: "10px" }} />
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
        }

        {showNavbar &&
          <div className="container mx-auto px-6 pt-6 pb-20 relative">
            <div className='flex items-center justify-between mx-6' style={{ borderBottom: "1px solid white" }}>
              <div className="flex items-center justify-between py-6">
                <Image src={logoColor} width={160} height={35} alt="Halogenn's logo" className="mr-16" />
                <ul className="flex justify-between items-center">
                  <li className="mr-11 text-white text-sm">
                    <Link className='text-base font-normal' href="#">Início</Link>
                  </li>
                  <li className="mr-11 text-sm flex justify-center items-center cursor-pointer" onClick={handleDropdown}>
                    <Link className='text-base font-normal mr-2' href="#" style={{ color: "#F5643D" }}>Produtos</Link>
                    <SlArrowUp style={{ fontSize: "10px", color: "#F5643D" }} />
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
              <button className={`flex items-center justify-between p-4 py-3 rounded-lg my-6 ${styles.budget}`} style={{ backgroundColor: "rgba(255, 255, 255, 0.09)" }}>
                <Image src={budget} width={16} height={15} alt="menu button" />
                <span className="ps-2 text-sm text-white">Orçamento</span>
              </button>
            </div>
            <div className='mx-6 text-white grid grid-cols-7 gap-3 absolute z-10' style={{ paddingTop: "65px", backgroundColor: "#323351", paddingBottom: "90px" }}>
              <div>
                <h2 className='text-xl'>
                  Catálogo completo <br />de itens para você
                </h2>
              </div>
              <div className='col-span-2'>
                <h4 className='text-base pb-5'>Laboratório</h4>
                <div className='grid grid-cols-2 gap-3'>
                  <p className='text-sm flex justify-start items-center'>
                    <Image src={icon1} width={18} height={18} className='me-2'></Image>
                    Equipamentos
                  </p>
                  <p className='text-sm flex justify-start items-center'>
                    <Image src={icon2} width={20} height={20} className='me-2'></Image>
                    Termômetros
                  </p>
                  <p className='text-sm flex justify-start items-center'>
                    <Image src={icon3} width={20} height={20} className='me-2'></Image>
                    Acessórios
                  </p>
                </div>
              </div>
              <div className='col-span-2'>
                <h4 className='text-base pb-5'>Utensílios</h4>
                <div className='grid grid-cols-2 gap-3'>
                  <p className='text-sm flex justify-start items-center'>
                    <Image src={icon4} width={18} height={18} className='me-2'></Image>
                    Inox e Ferragens
                  </p>
                  <p className='text-sm flex justify-start items-center'>
                    <Image src={icon5} width={18} height={18} className='me-2'></Image>
                    Vidrarias
                  </p>
                  <p className='text-sm flex justify-start items-center'>
                    <Image src={icon6} width={18} height={18} className='me-2'></Image>
                    Plásticos
                  </p>
                  <p className='text-sm flex justify-start items-center'>
                    <Image src={icon7} width={18} height={18} className='me-2'></Image>
                    Porcelanas
                  </p>
                </div>
              </div>
              <div>
                <h4 className='text-base pb-5'>Meteriais Químicos</h4>
                <div>
                  <p className='text-sm'>Meios e Reagentes</p>
                  <p className='text-sm'>Cromatrográfica</p>
                </div>
              </div>
              <div>
                <h4 className='text-base pb-5'>Ferramentas</h4>
                <div>
                  <p className='text-sm'>Modelo Anatômico</p>
                  <p className='text-sm'>Papeis Especiais</p>
                </div>
              </div>
            </div>
          </div>
        }
      </nav >
    </>
  );
};
export default Navbar;