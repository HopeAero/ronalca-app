"use client";
import { Category } from "@/shared/types/category";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Subcategories } from "@/shared/types/subcategory";
import getCategoryBySlug from "@/actions/category/getCategoryBySlug";
import Link from "next/link";

export default function CardSubcategoryByBrand() {
  const [categories, setCategories] = useState<Category>();

  const fetchCategories = async () => {
    const response = await getCategoryBySlug("marca");
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
      <div className="embla__container flex -mx-8">
        {subcategories.map((subcategory) => (
          <div
            key={subcategory.id}
            className="embla__slide px-8 flex-[0_0_20%]"
          >
            <div className="bg-white rounded-3xl shadow-md hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-blue-500 group p-6 mb-6">
              <div className="w-full h-24 relative flex items-center justify-center mb-2">
                <Link href={`/category/${subcategory.slug}`}>
                  <Image
                    src={subcategory.imageUrl}
                    alt={subcategory.name}
                    width={120}
                    height={80}
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                      objectFit: "contain",
                    }}
                  />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
