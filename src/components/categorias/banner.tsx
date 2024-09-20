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
    <div className="relative w-full h-46 md:h-64 overflow-hidden">
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
        <h1 className="text-white text-4xl md:text-6xl font-bold leading-none tracking-wide">
          AIRE ACONDICIONADO
        </h1>
        {subcategories ? (
          <h2
            className={`text-2xl md:text-5xl font-black leading-none mt-4`}
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
          <Skeleton variant="text" width={300} height={50} />
        )}
      </div>

      {/* Carrier Logo */}
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20">
        {subcategories ? (
          <Image
            src={subcategories.imageUrl || ""}
            alt="Carrier logo"
            width={250}
            height={250}
          />
        ) : (
          <Skeleton variant="rectangular" width={250} height={250} />
        )}
      </div>
    </div>
  );
}
