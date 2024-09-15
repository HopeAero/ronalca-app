"use client";

import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: "¿Dónde puedo conseguir aires acondicionados baratos?",
    answer:
      "En Ronalca somos importadores directos de fábrica de las marcas más importantes a nivel internacional, lo que garantiza tener aires acondicionados originales y a buen precio.",
  },
  {
    question: "¿Cuál es el rango de precio de los aires acondicionados?",
    answer:
      "El rango de precios varía según el modelo y la capacidad. Contáctenos para obtener información detallada sobre precios actualizados.",
  },
  {
    question: "¿Cuáles son los aires acondicionados en oferta?",
    answer:
      "Nuestras ofertas cambian regularmente. Visite nuestra página de productos o contáctenos directamente para conocer las promociones actuales.",
  },
  {
    question: "¿Dónde puedo comprar aires acondicionados nuevos?",
    answer:
      "Puede comprar aires acondicionados nuevos directamente en nuestra tienda en línea o en nuestras sucursales físicas. Contamos con una amplia variedad de modelos y marcas.",
  },
  {
    question:
      "¿Dónde encontrar empresas de aire acondicionado y climatización en Venezuela?",
    answer:
      "Ronalca es una de las principales empresas de aire acondicionado y climatización en Venezuela. Además, puede consultar directorios comerciales o asociaciones del sector para encontrar otras empresas.",
  },
  {
    question: "¿Dónde comprar evaporador y condensador de aire acondicionado?",
    answer:
      "En Ronalca ofrecemos evaporadores y condensadores de aire acondicionado de diversas marcas y modelos. Puede adquirirlos en nuestra tienda en línea o en nuestras sucursales.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="faq" className="w-full bg-gray-100 px-4 py-8">
      <h2
        className="box-border text-[rgb(41,62,140)] font-['Montserrat'] text-[48px] leading-[57.6px] text-[#2B3674] mb-10 ml-10 text-left"
        style={{
          fontWeight: 900,
          fontStyle: "normal",
          lineHeight: "120%",
          textShadow: "0 0 1px rgb(41,62,140), 0 0 1px rgb(41,62,140)",
          WebkitTextStroke: "1.5px rgb(41,62,140)",
          unicodeBidi: "isolate",
          WebkitTapHighlightColor: "rgba(0,0,0,0)",
        }}
      >
        Preguntas Frecuentes
      </h2>
      <div className="w-full px-[4.5%]">
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="border border-[#2B3674] rounded-lg overflow-hidden bg-white w-full"
            >
              <button
                className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
                onClick={() => toggleQuestion(index)}
              >
                <span className="text-[#2B3674] text-lg">{item.question}</span>
                <ChevronDown
                  className={`w-6 h-6 text-[#2B3674] flex-shrink-0 ml-4 transition-transform duration-300 ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-white">
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
