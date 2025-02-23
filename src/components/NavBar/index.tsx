import Image from "next/image";
import { RiMenuAddFill } from "react-icons/ri";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
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
      <div className="bg-blue-800 fixed top-8 right-10 w-11 h-11 lg:w-20 lg:h-20 flex items-center justify-center rounded-full hover:bg-blue-700 transition-all text-white shadow-lg shadow-blue-800 inset-shadow-sm inset-shadow-indigo-500">
        <Sheet>
          <SheetTrigger>
            <RiMenuAddFill className="w-6 h-6 lg:w-8 lg:h-8" />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle className="bg-blue-800 rounded-xl mt-2">
                Menu de navegação
              </SheetTitle>
              <SheetDescription className="border-gray-400 border rounded-2xl p-2 bg-gradientDivCut text-black">
                <ul className="flex flex-col items-center justify-center gap-1">
                  <li className="p-1 bg-blue-800 w-28 rounded-lg text-white border border-white">
                    <a href="#" className="">
                      Home
                    </a>
                  </li>
                  <li className="p-1 bg-blue-800 w-28 rounded-lg text-white border border-white">
                    <a href="#plans" className="">
                      Planos
                    </a>
                  </li>
                  <li className="p-1 bg-blue-800 w-28 rounded-lg text-white border border-white">
                    <a href="#" className="">
                      Endereço
                    </a>
                  </li>
                  <li className="p-1 bg-blue-800 w-28 rounded-lg text-white border border-white">
                    <a href="#" className="">
                      Beneficios
                    </a>
                  </li>
                </ul>
              </SheetDescription>
              <SheetDescription className="text-black">
                <ul className="flex flex-col items-center justify-center gap-1">
                  <li className="border px-2 py-1 border-blue-800 rounded-sm w-full flex items-center justify-center">
                    <a href="https://wa.me/5583991651441?text=Quero me matricularna academia">
                      Area do aluno
                    </a>
                  </li>
                  <li className="border px-2 py-1 border-blue-800 rounded-sm w-full flex items-center justify-center">
                    <a href="https://wa.me/5583991651441?text=Quero me matricularna academia">
                      Matricula pelo WhatsApp
                    </a>
                  </li>
                </ul>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
