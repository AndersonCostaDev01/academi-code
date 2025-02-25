import Image, { StaticImageData } from "next/image";

interface CardProps {
  src: string | StaticImageData;
  alt: string;
}

function Card({ src, alt }: CardProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 rounded-md border-2 border-gray-400 p-4">
      <h4 className="flex h-11 items-center justify-center text-center text-lg font-bold">
        {alt}
      </h4>
      <div className="relative h-[200px] w-[200px]">
        <Image src={src} alt={alt} fill className="object-cover" />
      </div>
    </div>
  );
}

export default Card;
