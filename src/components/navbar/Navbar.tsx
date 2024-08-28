"use client";

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
import { grey } from "@mui/material/colors";

export default function Navbar() {
  const [categories, setCategories] = useState<Category[]>([]);

  const fetchCategories = async () => {
    const response = await getCategory();
    setCategories(response);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  console.log(categories);

  const Listbox = styled("ul")(
    ({ theme }) => `
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
    box-sizing: border-box;
    padding: 6px;
    margin: 12px 0;
    min-width: 200px;
    border-radius: 12px;
    overflow: auto;
    outline: 0;
    background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
    border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
    box-shadow: 0px 4px 6px ${
      theme.palette.mode === "dark" ? "rgba(0,0,0, 0.50)" : "rgba(0,0,0, 0.05)"
    };
    z-index: 1;
    `
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
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link
                href="/"
                className="text-gray-700 hover:bg-gray-100 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Inicio
              </Link>
              {Array.isArray(categories) &&
                categories.map((category) =>
                  category.subcategories &&
                  category.subcategories.length > 0 ? (
                    <Dropdown key={category.id}>
                      <MenuButton className="text-gray-700 hover:bg-gray-100 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                        {category.name}
                        <Menu slots={{ listbox: Listbox }}>
                          {category.subcategories.map((subcategory) => (
                            <MenuItem key={subcategory.id}>
                              <Link
                                href={`/category/${category.slug}/${subcategory.slug}`}
                              >
                                {subcategory.name}
                              </Link>
                            </MenuItem>
                          ))}
                        </Menu>
                      </MenuButton>
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
