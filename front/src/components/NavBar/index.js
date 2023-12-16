import Link from 'next/link';
import { IoIosMenu } from "react-icons/io";
import Image from 'next/image';
import logo from '../../assets/images/logo.svg';

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: "#323351" }}>
      <div class="container mx-auto flex items-center justify-between flex-wrap p-6">
        <div class="flex items-center justify-between flex-wrap p-6">
          <Image src={logo} width={160} height={35} alt="Halogenn's logo" className="mr-6" />
          <ul className="flex">
            <li className="mr-6 text-sm" style={{ color: "#84C4EA" }}>
              <Link href="#">Início</Link>
            </li>
            <li className="mr-6 text-white text-sm">
              <Link href="#">Produtos</Link>
            </li>
            <li className="mr-6 text-white text-sm">
              <Link href="#">Laudos</Link>
            </li>
            <li className="mr-6 text-white text-sm">
              <Link href="#">Sobre nós</Link>
            </li>
            <li className="mr-6 text-white text-sm">
              <Link href="#">Certificações</Link>
            </li>
            <li className="mr-6 text-white text-sm">
              <Link href="#">Contato</Link>
            </li>
          </ul>
        </div>
        <button className="flex items-center justify-between p-3 rounded-lg m-6" style={{ backgroundColor: "rgba(255, 255, 255, 0.09)" }}>
          <IoIosMenu style={{ height: '15px', width: '15px' }} className="text-white border border-white rounded-sm" />
          <span className="ps-2 text-sm text-white">Orçamento</span>
        </button>
      </div>
    </nav>
  );
};
export default Navbar;