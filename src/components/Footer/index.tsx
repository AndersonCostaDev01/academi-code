import Image from "next/image";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

import logo from "@/Assets/Logo.svg";
import footerDivision from "@/Assets/transitionbar.png";

function Footer() {
  return (
    <footer className="bg-[#00052E] text-white">
      <Image src={footerDivision} alt="footer" className="h-10 object-cover" />
      <div className="container mx-auto p-4">
        <div className="flex flex-col items-center justify-center">
          <Image src={logo} alt="logo" className="mb-4 h-10 lg:h-20" />
          <div className="h-[2px] w-full rounded-full bg-gray-400" />
          <div className="flex items-center justify-between gap-2 p-4">
            <FaFacebook className="text-2xl" />
            <FaInstagram className="text-2xl" />
            <FaYoutube className="text-2xl" />
            <FaTwitter className="text-2xl" />
            <FaWhatsapp className="text-2xl" />
          </div>
          <div className="h-[2px] w-full rounded-full bg-gray-400" />
          <div className="flex w-[440px] flex-col items-center justify-center gap-2 p-4 text-center">
            <a
              href="https://www.google.com"
              className="text-sm"
              target="_blank"
            >
              Qualquer duvida entre em contato com nosso WhatsApp <br />
              (00) 90000-0000
            </a>
            <p>Av teste, n. 1999, 1ª andar, figma, cep 165415644</p>
            <p>faleconosco@teste.com</p>
            <p>Academia teste.com</p>
            <p>CNPJ: 00.000.000/0000-01</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
