import Image from "next/image";
import teamPhoto from "@/components/home-page/team.png";
import logoRonalca from "@/components/home-page/icon.png";

export default function AboutMe() {
  return (
    <div
      className="relative overflow-hidden bg-blue-900 text-white"
      style={{ height: "500px" }}
    >
      <Image
        src={teamPhoto}
        alt="Equipo de Ronalca"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 h-full flex flex-col justify-between">
        <div className="flex items-center space-x-12">
          <div
            className="flex-shrink-0 flex items-center justify-center"
            style={{ width: "33%" }}
          >
            <Image
              src={logoRonalca}
              alt="Logo de Ronalca"
              width={200}
              height={200}
            />
          </div>
          <div className="space-y-6 max-w-2xl" style={{ width: "67%" }}>
            <h2 className="text-5xl font-bold mb-2">Sobre Ronalca</h2>
            <div className="w-24 h-1 bg-blue-400 mb-8"></div>
            <p className="text-xl">
              Una empresa con más de 30 años trabajando en el mercado con un
              equilibrio entre{" "}
              <span className="font-bold">
                calidad, precio y competitividad
              </span>
              .
            </p>
            <p className="text-lg">
              Ofrecemos equipos y repuestos de aires acondicionados para todas
              las capacidades{" "}
              <span className="font-bold">
                (residenciales, comerciales e industriales)
              </span>{" "}
              también contamos con refrigeración.
            </p>
            <p className="text-lg">
              Somos distribuidores oficiales e importadores directos de
              productos Carrier.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 flex justify-center">
          <div className="bg-gradient-to-r from-gray-400/60 via-gray-300/60 to-blue-300/60 text-white py-4 px-8 rounded-t-3xl text-center text-base font-medium shadow-lg max-w-3xl w-full backdrop-blur-sm">
            Inscritos en la cámara nacional de aires acondicionados «Venacor»
          </div>
        </div>
      </div>
    </div>
  );
}
