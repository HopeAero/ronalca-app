"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import getSubcategoryBySlug from "@/actions/category/getSubcategory";
import type { Subcategories } from "@/shared/types/subcategory";
import { useParams } from "next/navigation";
import Banner from "@/components/categorias/banner";
import CircularProgress from "@mui/material/CircularProgress";
import Link from "next/link";

export default function ProductListing() {
  const [subcategories, setSubcategories] = useState<Subcategories | null>(
    null
  );
  const [loading, setLoading] = useState<boolean>(true);
  const params = useParams<{ subcategorySlug: string }>();

  const fetchSubcategory = async () => {
    try {
      const response = await getSubcategoryBySlug(params.subcategorySlug);
      setSubcategories(response);
    } catch (error) {
      console.error("Error fetching subcategory:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubcategory();
  }, [params.subcategorySlug]);

  return (
    <>
      <Banner subcategories={subcategories} />
      <div className="container mx-auto px-4 py-8">
        <h1
          className="text-3xl font-bold mb-6"
          style={{ color: "#293E8C", fontWeight: "900", fontSize: "31" }}
        >
          PRODUCTOS DISPONIBLES
        </h1>
        {loading ? (
          <div className="flex justify-center items-center">
            <CircularProgress />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {subcategories?.products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
              >
                <div className="p-4 flex-grow">
                  <Image
                    src={product.imageUrl[0]}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="w-full h-48 object-contain mb-4"
                  />
                  <h2 className="text-sm font-bold text-center text-blue-800 mb-2">
                    {product.name}
                  </h2>
                </div>
                <div className="px-4 pb-4">
                  <Link href={`/producto/${product.id}`}>
                    <Button className="w-full bg-sky-400 hover:bg-sky-500 text-white text-sm font-normal">
                      Ver detalle
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
