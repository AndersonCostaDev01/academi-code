import Image from "next/image";
import Link from "next/link";
import { MdLocationPin } from "react-icons/md";
import fachada from "@/Assets/fachadaAcademi.png";

function Location() {
  return (
    <section className="mb-2 py-12" id="location">
      <div className="container mx-auto flex flex-col items-center">
        <div className="text-center">
          <h3 className="text-xl font-bold">Onde nos localizamos</h3>
          <p>Veja nossa localização no mapa</p>
        </div>
        <div className="relative mt-6 h-28 w-full rounded-full lg:h-96">
          <Image
            fill
            src={fachada}
            alt="Mapa"
            className="rounded-md object-cover lg:rounded-2xl"
          />
          <div>
            <Link
              href={`https://www.google.com/maps?q=23.55052,46.633308`}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-md border-2 bg-white p-2 text-black"
            >
              <MdLocationPin />
              Localizar
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Location;
