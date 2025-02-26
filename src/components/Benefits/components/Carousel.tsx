import { StaticImageData } from "next/image";
import * as React from "react";

import benefits01 from "@/Assets/Benefits-01.svg";
import benefits02 from "@/Assets/Benefits-02.svg";
import benefits03 from "@/Assets/Benefits-03.svg";
import benefits04 from "@/Assets/Benefits-04.svg";
import benefits05 from "@/Assets/Benefits-05.svg";
import benefits06 from "@/Assets/Benefits-06.svg";
import test from "@/Assets/hero-men.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Card from "./Card";

interface CarouselBenefitsProps {
  src: string | StaticImageData;
  alt: string;
}

const carouselBenefits: CarouselBenefitsProps[] = [
  // Corrigido para ser um array de objetos
  {
    src: benefits01,
    alt: "Ambiente para socialização",
  },
  {
    src: benefits02,
    alt: "Profisionais de qualidade",
  },
  {
    src: benefits03,
    alt: "Melhor qualidade de vida",
  },
  {
    src: benefits04,
    alt: "Àrea de alunos no site",
  },
  {
    src: benefits05,
    alt: "Melhore sua, melhor fase da vida",
  },
  {
    src: benefits06,
    alt: "Uma das melhores formas de melhorar a saúde mental",
  },
];

export function CarouselBenefits() {
  return (
    <Carousel
      opts={{
        align: "start", // Alinha os itens à esquerda para múltiplos slides
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent className="gap-2">
        {carouselBenefits.map((item, index) => (
          <CarouselItem
            key={index}
            className="w-full md:basis-1/3 lg:basis-1/3" // 3 itens por linha no desktop
          >
            <Card src={item.src} alt={item.alt} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-0" variant="ghost" />
      <CarouselNext className="right-0" variant="ghost" />
    </Carousel>
  );
}

export default CarouselBenefits;
