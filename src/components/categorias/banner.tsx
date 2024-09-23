"use client";

import { Subcategories } from "@/shared/types/subcategory";
import Image from "next/image";
import banner from "./banner.png";
import Skeleton from "@mui/material/Skeleton";

interface BannerProps {
  subcategories: Subcategories | null;
}

export default function Banner({ subcategories }: BannerProps) {
  return (
    <div className="relative w-full h-40 md:h-64 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={banner}
          alt="City skyline"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-4 md:px-8">
        <h1 className="text-white text-xl md:text-6xl font-bold leading-tight tracking-wide">
          AIRE ACONDICIONADO
        </h1>
        {subcategories ? (
          <h2
            className="text-xl md:text-5xl font-black leading-tight mt-2 md:mt-4"
            style={{
              fontFamily: "sans-serif",
              WebkitTextStroke: "1px white",
              WebkitTextFillColor: "transparent",
              color: "white",
            }}
          >
            {subcategories.name}
          </h2>
        ) : (
          <Skeleton variant="text" width={200} height={40} />
        )}
      </div>

      {/* Carrier Logo */}
      <div className="absolute top-1/2 right-2 md:right-4 transform -translate-y-1/2 z-20">
        {subcategories ? (
          <div className="w-24 h-24 md:w-64 md:h-64">
            <Image
              src={subcategories.imageUrl || ""}
              alt="Carrier logo"
              layout="fill"
              objectFit="contain"
            />
          </div>
        ) : (
          <Skeleton
            variant="rectangular"
            width={150}
            height={150}
            className="md:w-250 md:h-250"
          />
        )}
      </div>
    </div>
  );
}
