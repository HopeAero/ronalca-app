import { Button } from "@/components/ui/button";
import Icon from "@/components/footer/icon.png";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between space-y-8 md:flex-row md:space-y-0">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold">
              Contáctanos{" "}
              <span role="img" aria-label="muscle">
                💪
              </span>{" "}
              y asesórate en tu proyecto
            </h2>
          </div>
          <div className="flex space-x-4">
            <Button className="bg-green-500 text-white px-4 py-2 rounded-md">
              <PhoneIcon className="inline-block mr-2" />
              Consultar por WhatsApp
            </Button>
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-md">
              <InstagramIcon className="inline-block mr-2" />
              Consultar por Instagram
            </Button>
          </div>
        </div>
        <hr className="my-8" />
        <div className="flex flex-col items-center justify-between space-y-8 md:flex-row md:space-y-0">
          <div className="flex items-center space-x-2">
            <Image src={Icon} alt="Logo" width={120} height={40} />
            <h2 className="text-2xl font-bold text-blue-700">
              Todo en <span className="text-cyan-500">aire acondicionado</span>
            </h2>
          </div>
          <div className="flex space-x-8">
            <div>
              <h3 className="font-bold">Sobre nosotros</h3>
              <ul className="mt-2 space-y-1">
                <li>
                  <Link href="#" className="text-gray-600" prefetch={false}>
                    Experiencia Ronalca
                  </Link>
                </li>
                <li>
                  <Link href="#faq" className="text-gray-600" prefetch={false}>
                    Preguntas frecuentes
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600" prefetch={false}>
                    Sedes
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold">Nuestros productos</h3>
              <ul className="mt-2 space-y-1">
                <li>
                  <Link href="#" className="text-gray-600" prefetch={false}>
                    Marcas
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600" prefetch={false}>
                    Modelos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600" prefetch={false}>
                    Tamaños
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600" prefetch={false}>
                    Ofertas
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex space-x-4 mt-6 md:mt-0">
            <InstagramIcon className="w-6 h-6 text-blue-600" />
            <PhoneIcon className="w-6 h-6 text-blue-600" />
            <FacebookIcon className="w-6 h-6 text-blue-600" />
          </div>
        </div>
      </div>
    </footer>
  );
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function PhoneIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
