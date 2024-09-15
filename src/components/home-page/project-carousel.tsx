"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image, { StaticImageData } from "next/image";
import projectOne from "@/components/home-page/project-one.png";
import projectTwo from "@/components/home-page/project-two.png";

type Slide = {
  title: string;
  description: string;
  imageUrl: StaticImageData;
  ctaText: string;
};

const slides: Slide[] = [
  {
    title: "ASESORAMIENTO DE PROYECTOS",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl: projectOne,
    ctaText: "Conoce nuestros proyectos",
  },
  {
    title: "VENTA DE REPUESTOS E INSUMOS PARA INSTALACIÓN",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imageUrl: projectTwo,
    ctaText: "Contáctanos",
  },
];

export default function ProjectCarousel() {
  const [emblaRef] = useEmblaCarousel({
    loop: true,
    align: "start",
  });

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {slides.map((slide, index) => (
          <div key={index} className="flex-[0_0_100%] min-w-0 relative">
            <div className="relative h-[400px]">
              <Image
                src={slide.imageUrl}
                alt={slide.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-opacity-70 flex items-center">
                <div className="text-white p-8 md:p-16 max-w-2xl">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    {slide.title}
                  </h2>
                  <p className="mb-6">{slide.description}</p>
                  <button className="px-8 py-3 bg-[#65CDF061] text-white text-lg font-semibold rounded-full shadow-[inset_0_-2px_4px_rgba(0,0,0,0.1)] hover:bg-[#0A1B2036] transition-all duration-300 ease-in-out border-2	 border-[#FFFFFF]">
                    {slide.ctaText}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
