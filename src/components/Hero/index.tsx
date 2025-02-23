"use client";

import Image from "next/image";
import { IoArrowForwardCircleOutline, IoLogoWhatsapp } from "react-icons/io5";
import { NavBar } from "../NavBar";
import { DivCut } from "@/components/Hero/styles";
import menhero from "@/Assets/hero-men.png";
import logo from "@/Assets/Logo.svg";
import transitionbar from "@/Assets/transitionbar.png";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export function Hero() {
  const [mensage, setMensage] = useState("Olá, gostaria de mais informações!");
  const telefone = "5583991651441";
  const mensagem = encodeURIComponent(mensage);
  const linkWhatsApp = `https://wa.me/${telefone}?text=${mensagem}`;

  return (
    <div className="w-full h-[1056px] absolute block overflow-hidden">
      <section>
        <NavBar />
        <DivCut className="absolute bg-gradientDivCut z-0" />
        <div className="p-3 mt-20 lg:mt-36 relative z-10 mx-auto container">
          <div className="flex items-center">
            <h1>
              <Image src={logo} alt="Academia do codigo" />
            </h1>
            <h2 className="text-center text-blue-800 font-bold">
              Venha ter um melhor <br /> desempenho em sua vida
            </h2>
          </div>
          <div className="">
            <h3 className="text-blue-800 mt-3 text-xl lg:text-3xl">
              <span className="font-bold">
                Academia de <br />
                qualidade
              </span>{" "}
              perto de você,
              <br /> só <span className="font-bold">aqui!</span>
            </h3>
          </div>
          <p className="w-[650px] mt-3 lg:text-xl">
            Não se sente confortável com seu corpo? Nós podemos te ajudar! A
            melhor maneira de recuperar sua autoconfiança é através de um estilo
            de vida mais saudável e um corpo mais forte e definido.
          </p>
          <div className="flex gap-3 lg:gap-10 mt-6 font-bold text-white">
            <a
              href="#plans"
              className="flex bg-blue-800 items-center justify-center gap-2 lg:px-14 lg:py-6 px-8 py-4 rounded-full"
            >
              Quro me matricular
              <IoArrowForwardCircleOutline className="text-4xl" />
            </a>
            <a
              href={`https://wa.me/${telefone}?text=Quero me matricularna academia`}
              className="bg-blue-800 items-center justify-center flex rounded-full w-16 h-16 lg:w-24 lg:h-24"
            >
              <IoLogoWhatsapp className="text-4xl" />
            </a>
          </div>
        </div>
        <Image
          src={menhero}
          alt="homem fazendo exercicio"
          className="absolute top-0 lg:top-[-80px] right-0 opacity-60 lg:opacity-80 w-[650px]"
        />
        <Image
          src={transitionbar}
          alt="Barra de transição do hero"
          className="relative z-10 h-10 lg:h-16 object-cover"
        />
      </section>
      <div className="fixed bottom-4 right-4 bg-green-500 w-12 h-12 rounded-full items-center justify-center flex">
        <Drawer>
          <DrawerTrigger>
            <IoLogoWhatsapp className="text-white h-8 w-8" />
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Quer alguma informação adicional?</DrawerTitle>
              <DrawerDescription>
                Entre em contato com o WhatsApp
              </DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <Textarea
                placeholder="Mensagem"
                onChange={(e) => setMensage(e.target.value)}
              />
              <Button className="bg-green-500 hover:bg-green-900">
                <a href={linkWhatsApp}>mandar mensagem</a>
              </Button>
              <DrawerClose>
                <Button className="bg-red-700 hover:bg-red-800 text-white">
                  Cancel
                </Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>

      {/* div cut for desktop */}
      <svg>
        <defs>
          <clipPath id="corte-01-desktop">
            <path d="M-14 29C-14 -12.9736 20.0264 -47 62 -47H859.903C918.872 -47 955.376 17.2394 925.194 67.8989L699.791 446.231C688.261 465.584 668.739 478.825 646.494 482.38L73.9936 573.871C27.8214 581.25 -14 545.582 -14 498.824V29Z" />
          </clipPath>
        </defs>
      </svg>
      {/* div cut for mobile */}
      <svg>
        <defs>
          <clipPath id="corte-01-mobile">
            <path d="M-50 76C-50 34.0264 -15.9736 0 26 0H216.242C275.214 0 311.717 64.2447 281.53 114.904L244.322 177.345C232.791 196.696 213.27 209.934 191.026 213.489L37.9913 237.941C-8.18016 245.318 -50 209.65 -50 162.893V76Z" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}
