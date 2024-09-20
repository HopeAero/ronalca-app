import { Button } from "@/components/ui/button";
import Icon from "@/components/footer/icon.png";
import Image from "next/image";
import Link from "next/link";
import { Instagram } from "lucide-react";
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from "../ui/social-icons";

export default function Footer() {
  return (
    <footer className="bg-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between space-y-8 md:flex-row md:space-y-0">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold">
              Contáctanos{" "}
              <span role="img" aria-label="muscle">
                💪
              </span>{" "}
              y asesórate en tu proyecto
            </h2>
          </div>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <Button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full">
              <WhatsAppIcon className="inline-block mr-2 h-5 w-5" />
              Consultar por WhatsApp
            </Button>
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-4 py-2 rounded-full">
              <Instagram className="inline-block mr-2 h-5 w-5" />
              Consultar por Instagram
            </Button>
          </div>
        </div>
        <hr className="my-8" />
        <div className="flex flex-col items-center justify-between space-y-8 md:flex-row md:space-y-0">
          <div className="flex items-center space-x-2">
            <Image src={Icon} alt="Logo" width={120} height={40} />
            <h2 className="text-2xl font-bold">
              Todo en <span className="text-cyan-500">aire acondicionado</span>
            </h2>
          </div>
          <div className="flex space-x-16">
            <div>
              <h3 className="font-bold text-lg mb-2">Sobre nosotros</h3>
              <ul className="space-y-1">
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 hover:text-gray-800"
                    prefetch={false}
                  >
                    Experiencia Ronalca
                  </Link>
                </li>
                <li>
                  <Link
                    href="#faq"
                    className="text-gray-600 hover:text-gray-800"
                    prefetch={false}
                  >
                    Preguntas frecuentes
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 hover:text-gray-800"
                    prefetch={false}
                  >
                    Sedes
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Nuestros productos</h3>
              <ul className="space-y-1">
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 hover:text-gray-800"
                    prefetch={false}
                  >
                    Marcas
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 hover:text-gray-800"
                    prefetch={false}
                  >
                    Modelos
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 hover:text-gray-800"
                    prefetch={false}
                  >
                    Tamaños
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 hover:text-gray-800"
                    prefetch={false}
                  >
                    Ofertas
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-center space-x-4 mt-8">
          <Link href="#" className="text-blue-600 hover:text-blue-800">
            <InstagramIcon className="w-6 h-6" />
          </Link>
          <Link href="#" className="text-blue-600 hover:text-blue-800">
            <WhatsAppIcon className="w-6 h-6" />
          </Link>
          <Link href="#" className="text-blue-600 hover:text-blue-800">
            <FacebookIcon className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
