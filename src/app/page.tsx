import Image from "next/image";
import banner from "../../public/Rectangle 27.png";
import backgroundImage from "../../public/Rectangle 27.png";
export default function Page() {
  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      {/* Background image with blue overlay */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="Background"
          quality={95}
          fill
          sizes="(max-width: 320px) 280px,
          (max-width: 480px) 440px,
          800px"
        />
        <div className="absolute inset-0 bg-blue-500 bg-opacity-50"></div>
      </div>

      {/* Air conditioner units image */}
      <div className="absolute inset-0">
        <Image
          src={banner}
          alt="Air Conditioner Units"
          quality={95}
          fill
          sizes="(max-width: 320px) 280px,
          (max-width: 480px) 440px,
          800px"
        />
      </div>

      {/* Content overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
          SOMOS TU EMPRESA DE
          <br />
          AIRE ACONDICIONADO
        </h1>
        <p className="text-xl md:text-2xl text-center mb-6 drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
          +30 años líderes en refrigeración y aire acondicionado
        </p>
        <button className="bg-[#00D3FF] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#00B8E0] transition-colors">
          Conoce nuestros productos
        </button>
      </div>
    </div>
  );
}
