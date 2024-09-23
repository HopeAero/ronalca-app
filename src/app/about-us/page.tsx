import Image from "next/image";
import employee from "./employee.jpg";

export default function AboutUsPage() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <Image
        src={employee}
        alt="Equipo de trabajadores Ronalca"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <div className="absolute inset-0 flex items-center mb-44">
        <div className="container mx-auto px-6">
          <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight max-w-md whitespace-nowrap">
            CON MÁS
            <br />
            DE 30 AÑOS
            <br />
            DE EXPERIENCIA EN EL MERCADO
          </h1>
        </div>
      </div>
    </div>
  );
}
