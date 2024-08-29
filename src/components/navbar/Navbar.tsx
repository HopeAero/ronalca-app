"use client";
import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logoRonalcaPzo from "@/components/navbar/logoRonalcaPzo.png";
import { Category } from "@/shared/types/category";
import getCategory from "@/actions/category/getCategory";
import { Dropdown } from "@mui/base/Dropdown";
import { Menu } from "@mui/base/Menu";
import { MenuButton } from "@mui/base/MenuButton";
import { MenuItem, menuItemClasses } from "@mui/base/MenuItem";
import { styled } from "@mui/system";

export default function Navbar() {
  const pathname = usePathname();
  const [categories, setCategories] = useState<Category[]>([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const fetchCategories = async () => {
    const response = await getCategory();
    setCategories(response);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const Listbox = styled("ul")`
    font-size: 0.875rem;
    box-sizing: border-box;
    padding: 0;
    margin: 12px 0;
    min-width: 200px;
    border-radius: 12px;
    overflow: auto;
    outline: 0;
    background: #fff;
    border: 1px solid #e2e8f0;
    color: #1a202c;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    z-index: 1;
  `;

  const StyledMenuItem = styled(MenuItem)`
    list-style: none;
    padding: 8px 12px;
    border-radius: 8px;
    cursor: default;
    user-select: none;

    &:last-of-type {
      border-bottom: none;
    }

    &:hover {
      background-color: #f7fafc;
      color: #2b6cb0;
    }

    &.${menuItemClasses.focusVisible} {
      outline: 3px solid #3182ce;
      background-color: #ebf8ff;
      color: #2c5282;
    }
  `;

  return (
    <nav key={pathname} className="bg-white">
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
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-500 hover:text-gray-600 focus:outline-none"
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
          </button>
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
              {Array.isArray(categories) &&
                categories.map((category) =>
                  category.subcategories &&
                  category.subcategories.length > 0 ? (
                    <Dropdown key={category.id}>
                      <MenuButton className="text-gray-700 hover:bg-gray-100 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium inline-flex items-center">
                        {category.name}
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
                      </MenuButton>
                      <Menu slots={{ listbox: Listbox }}>
                        {category.subcategories.map((subcategory) => (
                          <StyledMenuItem key={subcategory.id}>
                            <Link
                              href={`/category/${category.slug}/${subcategory.slug}`}
                              className="block w-full text-left text-gray-700 font-medium"
                            >
                              {subcategory.name}
                            </Link>
                          </StyledMenuItem>
                        ))}
                      </Menu>
                    </Dropdown>
                  ) : (
                    <Link
                      key={category.id}
                      href={`/category/${category.slug}`}
                      className="text-gray-700 hover:bg-gray-100 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
                    >
                      {category.name}
                    </Link>
                  )
                )}
              <button className="bg-[#174194] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition duration-150 ease-in-out">
                Contáctanos
              </button>
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
            {Array.isArray(categories) &&
              categories.map((category) =>
                category.subcategories && category.subcategories.length > 0 ? (
                  <Dropdown key={category.id}>
                    <MenuButton className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100">
                      {category.name}
                    </MenuButton>
                    <Menu slots={{ listbox: Listbox }}>
                      {category.subcategories.map((subcategory) => (
                        <StyledMenuItem key={subcategory.id}>
                          <Link
                            href={`/category/${category.slug}/${subcategory.slug}`}
                            className="block w-full text-left text-gray-700 font-medium"
                          >
                            {subcategory.name}
                          </Link>
                        </StyledMenuItem>
                      ))}
                    </Menu>
                  </Dropdown>
                ) : (
                  <Link
                    key={category.id}
                    href={`/category/${category.slug}`}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100"
                  >
                    {category.name}
                  </Link>
                )
              )}
            <button className="mt-3 w-full bg-[#174194] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition duration-150 ease-in-out">
              Contáctanos
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
