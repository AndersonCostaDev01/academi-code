import Image from "next/image";
import { RiMenuAddFill } from "react-icons/ri";
import logo from "../../Assets/Logo.svg";

export function NavBar() {
  return (
    <nav className="flex p-10 absolute top-0 left-0 w-screen z-10 bg-transparent items-center">
      <Image src={logo} alt="Logo do siste" className="hidden lg:block w-16" />
      <ul className="hidden lg:flex justify-between items-center w-[740px] bg-white rounded-full p-4 lg:ml-[250] font-bold">
        <li>
          <a href="#" className="bg-blue-800 py-3 px-6 rounded-full text-white">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="py-3 px-6 rounded-full">
            Planos
          </a>
        </li>
        <li>
          <a href="#" className="py-3 px-6 rounded-full">
            Endereço
          </a>
        </li>
        <li>
          <a href="#" className="py-3 px-6 rounded-full">
            Beneficios
          </a>
        </li>
      </ul>
      <button className="bg-blue-800 fixed top-8 right-10 w-11 h-11 lg:w-20 lg:h-20 flex items-center justify-center rounded-full hover:bg-blue-700 transition-all text-white shadow-lg shadow-blue-800 inset-shadow-sm inset-shadow-indigo-500">
        <RiMenuAddFill className="w-6 h-6 lg:w-8 lg:h-8" />
      </button>
    </nav>
  );
}
