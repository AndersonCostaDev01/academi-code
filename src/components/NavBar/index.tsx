import Image from "next/image";
import Link from "next/link";
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
    <nav className="absolute left-0 top-0 z-10 flex w-screen items-center bg-transparent p-10">
      <Image src={logo} alt="Logo do siste" className="hidden w-16 lg:block" />
      <ul className="hidden w-[740px] items-center justify-between rounded-full bg-white p-4 font-bold lg:ml-[250] lg:flex">
        <li>
          <a href="#" className="rounded-full bg-blue-800 px-6 py-3 text-white">
            Home
          </a>
        </li>
        <li>
          <a href="#plans" className="rounded-full px-6 py-3">
            Planos
          </a>
        </li>
        <li>
          <a href="#location" className="rounded-full px-6 py-3">
            Endereço
          </a>
        </li>
        <li>
          <a href="#benefits" className="rounded-full px-6 py-3">
            Beneficios
          </a>
        </li>
      </ul>
      <div className="inset-shadow-sm inset-shadow-indigo-500 fixed right-10 top-8 flex h-11 w-11 items-center justify-center rounded-full bg-blue-800 text-white shadow-lg shadow-blue-800 transition-all hover:bg-blue-700 lg:h-20 lg:w-20">
        <Sheet>
          <SheetTrigger>
            <RiMenuAddFill className="h-6 w-6 lg:h-8 lg:w-8" />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle className="mt-2 rounded-xl bg-blue-800">
                Menu de navegação
              </SheetTitle>
              <SheetDescription className="rounded-2xl border border-gray-400 bg-gradientDivCut p-2 text-black">
                <ul className="flex flex-col items-center justify-center gap-1 text-center">
                  <li className="w-28 rounded-lg border border-white bg-blue-800 p-1 text-white">
                    <a href="#" className="">
                      Home
                    </a>
                  </li>
                  <li className="w-28 rounded-lg border border-white bg-blue-800 p-1 text-white">
                    <a href="#plans" className="">
                      Planos
                    </a>
                  </li>
                  <li className="w-28 rounded-lg border border-white bg-blue-800 p-1 text-white">
                    <a href="#location" className="">
                      Endereço
                    </a>
                  </li>
                  <li className="w-28 rounded-lg border border-white bg-blue-800 p-1 text-white">
                    <a href="#benefits" className="">
                      Beneficios
                    </a>
                  </li>
                </ul>
              </SheetDescription>
              <SheetDescription className="text-black">
                <ul className="flex flex-col items-center justify-center gap-1">
                  <li className="flex w-full items-center justify-center rounded-sm border border-blue-800 px-2 py-1">
                    <Link href="/students">Area do aluno</Link>
                  </li>
                  <li className="flex w-full items-center justify-center rounded-sm border border-blue-800 px-2 py-1">
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
