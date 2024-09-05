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
    const response = await getCategoryBySlug("modelo");
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
            <span className="text-blue-500">{categories.name} </span>
            de los mejores aires acondicionado
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
    <div className="embla overflow-visible" ref={emblaRef}>
      <div className="embla__container flex -mx-8">
        {subcategories.map((subcategory) => (
          <div
            key={subcategory.id}
            className="embla__slide px-8 flex-[0_0_20%]"
          >
            <div className="bg-white rounded-3xl shadow-lg p-4 h-[280px] flex flex-col items-center justify-between transition-all duration-300 border-2 border-transparent hover:border-blue-500 group">
              <div className="text-center font-bold text-blue-500 text-base border border-blue-500 rounded-full px-3 py-1">
                {subcategory.name.toUpperCase()}
              </div>
              <Link
                href={`/category/${subcategory.slug}`}
                className="flex-grow flex items-center justify-center w-full h-48 relative"
              >
                <Image
                  src={subcategory.imageUrl}
                  alt={subcategory.name}
                  fill
                  style={{
                    objectFit: "contain",
                  }}
                />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
