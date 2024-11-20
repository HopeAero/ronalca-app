'use client'

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import useEmblaCarousel from "embla-carousel-react"

import type { Category } from "@/shared/types/category"
import type { Subcategories } from "@/shared/types/subcategory"
import getCategoryBySlug from "@/actions/category/getCategoryBySlug"

export default function Component() {
  const [categories, setCategories] = useState<Category>()

  const fetchCategories = async () => {
    const response = await getCategoryBySlug("modelo")
    setCategories(response)
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  return (
    <div className="w-full max-w-[100vw] overflow-hidden">
      <div className="container mx-auto px-4 py-8">
        {categories && (
          <div key={categories.id} className="mb-12">
            <h2 className="text-xl md:text-[22px] font-bold mb-6">
              <span className="text-blue-500">{categories.name} </span>
              de los mejores aires acondicionado
            </h2>
            <SubcategoryCarousel subcategories={categories.subcategories || []} />
          </div>
        )}
      </div>
    </div>
  )
}

function SubcategoryCarousel({ subcategories }: { subcategories: Subcategories[] }) {
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    slidesToScroll: 1,
    containScroll: "trimSnaps",
    loop: true,
    dragFree: true,
    breakpoints: {
      '(min-width: 768px)': {
        dragFree: false,
        loop: false,
      }
    }
  })

  return (
    <div className="embla relative -mx-4 px-4 md:mx-0 md:px-0" ref={emblaRef}>
      <div className="embla__container flex md:grid md:grid-cols-5 md:gap-6">
        {subcategories.map((subcategory) => (
          <div
            key={subcategory.id}
            className="embla__slide min-w-[calc(50%-1rem)] px-2 md:min-w-full md:px-0"
          >
            <div className="bg-white rounded-xl md:rounded-3xl shadow-lg p-3 md:p-6 h-[200px] md:h-[280px] flex flex-col items-center justify-between transition-all duration-300 border-2 border-transparent hover:border-blue-500 group">
              <div className="text-center font-bold text-blue-500 text-sm md:text-base border border-blue-500 rounded-full px-2 py-1 md:px-3 md:py-1">
                {subcategory.name.toUpperCase()}
              </div>
              <Link
                href={`/categoria/${subcategory.slug}`}
                className="flex-grow flex items-center justify-center w-full h-32 md:h-48 relative"
              >
                <Image
                  src={subcategory.imageUrl}
                  alt={subcategory.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 20vw"
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
  )
}