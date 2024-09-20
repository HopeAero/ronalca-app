"use client";
import { Category } from "@/shared/types/category";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Subcategories } from "@/shared/types/subcategory";
import getCategoryBySlug from "@/actions/category/getCategoryBySlug";
import Link from "next/link";

export default function CardSubcategoryByModel() {
  const [categories, setCategories] = useState<Category>();

  const fetchCategories = async () => {
    const response = await getCategoryBySlug("espacio");
    setCategories(response);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      {categories && (
        <div key={categories.id} className="mb-12">
          <h2 className="text-[22px] font-bold mb-6">
            Unidades de equipo de aire acondicionado{" "}
            <span className="text-blue-500">por {categories.name}</span>
          </h2>
          <SubcategoryCarousel subcategories={categories.subcategories || []} />
        </div>
      )}
    </div>
  );
}

function SubcategoryCarousel({
  subcategories,
}: {
  subcategories: Subcategories[];
}) {
  const [emblaRef] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  return (
    <div className="embla overflow-hidden" ref={emblaRef}>
      <div className="embla__container flex -mx-6 justify-normal">
        {subcategories.map((subcategory) => (
          <div
            key={subcategory.id}
            className="embla__slide px-6 flex-[0_0_300px]"
          >
            <Link href={`/categoria/${subcategory.slug}`} className="block">
              <div className="bg-white rounded-3xl  shadow-md overflow-hidden transition-all duration-300 border-2 border-transparent hover:border-blue-500 group h-[400px] flex flex-col ">
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-bold text-blue-700 mb-2">
                    {subcategory.name}
                  </h3>
                  <p className="text-gray-600 text-sm font-bold">
                    {subcategory.description || "Lorem ipsum dolor sit amet."}
                  </p>
                </div>
                <div className="relative h-[250px] w-full">
                  <div className="absolute inset-0 bg-blue-400 opacity-30 mix-blend-multiply z-10"></div>
                  <Image
                    src={subcategory.imageUrl}
                    alt={subcategory.name}
                    fill
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
