"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logoRonalcaPzo from "@/components/navbar/logoRonalcaPzo.png";

type Category = {
  id: number;
  name: string;
};

type Categories = {
  brands: Category[];
  models: Category[];
  spaces: Category[];
};

export default function Navbar() {
  const [categories, setCategories] = useState<Categories>({
    brands: [],
    models: [],
    spaces: [],
  });

  const [isOpen, setIsOpen] = useState({
    brands: false,
    models: false,
    spaces: false,
  });

  const toggleDropdown = (category: "brands" | "models" | "spaces") => {
    setIsOpen((prev) => ({ ...prev, [category]: !prev[category] }));
  };

  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <Image
                src={logoRonalcaPzo}
                alt="Distribuidora Ronalca"
                width={150}
                height={40}
              />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link
                href="/"
                className="text-gray-700 hover:bg-gray-100 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Inicio
              </Link>
              {["brands", "models", "spaces"].map((category) => (
                <div key={category} className="relative">
                  <button
                    onClick={() =>
                      toggleDropdown(category as "brands" | "models" | "spaces")
                    }
                    className="text-gray-700 hover:bg-gray-100 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium flex items-center"
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                    <svg
                      className="ml-2 h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  {isOpen[category as "brands" | "models" | "spaces"] && (
                    <div className="absolute z-10 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                      <div
                        className="py-1"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu"
                      >
                        {categories[
                          category as "brands" | "models" | "spaces"
                        ].map((item) => (
                          <Link
                            key={item.id}
                            href={`/${category}/${item.id}`}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            role="menuitem"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition duration-150 ease-in-out">
                Contáctanos
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
