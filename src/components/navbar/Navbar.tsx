"use client";

import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import logoRonalcaPzo from "@/components/navbar/logoRonalcaPzo.png";
import { Category } from "@/shared/types/category";
import getCategory from "@/actions/category/getCategory";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [categories, setCategories] = useState<Category[]>([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const fetchCategories = useCallback(async () => {
    const response = await getCategory();
    setCategories(response);
  }, []);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const handleSubcategoryClick = useCallback(
    (slug: string) => {
      setIsMenuOpen(false);
      router.push(`/categoria/${slug}`);
    },
    [router]
  );

  const renderCategoryDropdown = useCallback(
    (category: Category) => (
      <DropdownMenu key={category.id}>
        <DropdownMenuTrigger className="w-full md:w-auto" asChild>
          <Button
            variant="ghost"
            className="px-3 py-2 md:text-sm text-base font-medium text-left flex justify-between items-center hover:text-blue-600 hover:bg-gray-100 text-gray-700"
          >
            <span className="flex-grow">{category.name}</span>
            <ChevronDown className="ml-2 h-4 w-4 flex-shrink-0" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {category.subcategories?.map((subcategory) => (
            <DropdownMenuItem
              key={subcategory.id}
              onClick={() => handleSubcategoryClick(subcategory.slug)}
            >
              {subcategory.name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    ),
    [handleSubcategoryClick]
  );

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
                height={150}
              />
            </Link>
          </div>
          <Button
            variant="ghost"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Abrir menú principal</span>
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </Button>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link
                href="/"
                className="text-gray-700 hover:bg-gray-100 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Inicio
              </Link>
              <Link
                href="/about-us"
                className="text-gray-700 hover:bg-gray-100 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Sobre nosotros
              </Link>
              {categories.map((category) =>
                category.subcategories && category.subcategories.length > 0 ? (
                  renderCategoryDropdown(category)
                ) : (
                  <Link
                    key={category.id}
                    href={`/`}
                    className="text-gray-700 hover:bg-gray-100 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {category.name}
                  </Link>
                )
              )}
              <Button className="bg-[#174194] text-white hover:bg-blue-700">
                Contáctanos
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Menú móvil */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100"
            >
              Inicio
            </Link>
            <Link
              href="/about-us"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100"
            >
              Sobre nosotros
            </Link>
            {categories.map((category) =>
              category.subcategories && category.subcategories.length > 0 ? (
                renderCategoryDropdown(category)
              ) : (
                <Link
                  key={category.id}
                  href={`/`}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100"
                >
                  {category.name}
                </Link>
              )
            )}
            <Button className="mt-3 w-full bg-[#174194] text-white hover:bg-blue-700">
              Contáctanos
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
