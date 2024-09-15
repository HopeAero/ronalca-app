import Image from "next/image";
import plazaMeru from "@/components/home-page/plaza-meru.png";
import italo from "@/components/home-page/italo-venezolano.png";
import uneg from "@/components/home-page/uneg.png";
import ucab from "@/components/home-page/ucab.png";
import santoTome from "@/components/home-page/santo-tome.png";
export default function Clients() {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-[#2B3674] mb-12">
          Nuestros clientes
        </h2>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5 items-center">
          <Image
            src={plazaMeru}
            alt="Hotel Plaza Merú"
            width={120}
            height={80}
            className="max-h-24 w-full object-contain"
          />
          <Image
            src={italo}
            alt="Italo Venezolano"
            width={120}
            height={80}
            className="max-h-24 w-full object-contain"
          />
          <Image
            src={uneg}
            alt="UNEG"
            width={120}
            height={80}
            className="max-h-24 w-full object-contain"
          />
          <Image
            src={ucab}
            alt="UCAB"
            width={120}
            height={80}
            className="max-h-24 w-full object-contain"
          />
          <Image
            src={santoTome}
            alt="Santo Tomé"
            width={120}
            height={80}
            className="max-h-24 w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}
