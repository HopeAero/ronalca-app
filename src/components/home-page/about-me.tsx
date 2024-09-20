import Image from "next/image";
import teamPhoto from "@/components/home-page/team.png";
import logoRonalca from "@/components/home-page/icon.png";

export default function AboutMe() {
  return (
    <div className="relative overflow-hidden text-white">
      <div className="absolute inset-0">
        <Image
          src={teamPhoto}
          alt="Equipo de Ronalca"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-[500px] flex flex-col justify-between">
        <div className="flex flex-col md:flex-row md:items-center md:space-x-12">
          <div className="flex-shrink-0 flex items-center justify-center mb-6 md:mb-0 md:w-1/3">
            <Image
              src={logoRonalca}
              alt="Logo de Ronalca"
              width={200}
              height={200}
            />
          </div>
          <div className="space-y-4 md:space-y-6 md:w-2/3">
            <h2 className="text-3xl md:text-5xl font-bold mb-2">
              Sobre Ronalca
            </h2>
            <div className="w-24 h-1 bg-blue-400 mb-4 md:mb-8"></div>
            <p className="text-sm/[17px] md:text-lg">
              Una empresa con más de 30 años trabajando en el mercado con un
              equilibrio entre{" "}
              <span className="font-bold">
                calidad, precio y competitividad
              </span>
              .
            </p>
            <p className="text-sm/[17px] md:text-lg">
              Ofrecemos equipos y repuestos de aires acondicionados para todas
              las capacidades{" "}
              <span className="font-bold">
                (residenciales, comerciales e industriales)
              </span>{" "}
              también contamos con refrigeración.
            </p>
            <p className="text-sm/[17px] md:text-lg">
              Somos distribuidores oficiales e importadores directos de
              productos Carrier.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 flex justify-center md:mt-8">
          <div className="bg-gradient-to-r from-gray-400/60 via-gray-300/60 to-blue-300/60 text-white py-3 px-4 md:py-4 md:px-8 rounded-t-3xl text-center text-sm md:text-base font-medium shadow-lg max-w-3xl w-full backdrop-blur-sm">
            Inscritos en la cámara nacional de aires acondicionados «Venacor»
          </div>
        </div>
      </div>
    </div>
  );
}
