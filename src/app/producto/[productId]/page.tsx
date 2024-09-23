"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Instagram } from "lucide-react";
import CircularProgress from "@mui/material/CircularProgress";
import getProductById from "@/actions/product/getProductById";
import { Products } from "@/shared/types/products";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/ui/social-icons";

export default function DetailProduct() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [product, setProduct] = useState<Products | null>(null);
  const [error, setError] = useState<string | null>(null);
  const params = useParams<{ productId: string }>();

  const fetchProduct = async () => {
    try {
      setLoading(true);
      const response = await getProductById(params.productId);
      setProduct(response);
      setError(null);
    } catch (error) {
      console.error("Error fetching product:", error);
      setError("Failed to load product. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === (product?.imageUrl?.length ?? 0) - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? (product?.imageUrl?.length ?? 1) - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    fetchProduct();
  }, [params.productId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <CircularProgress />
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <p className="text-red-500">{error || "Producto no encontrado"}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3 relative">
          {product.imageUrl && product.imageUrl.length > 0 ? (
            <>
              <Image
                src={product.imageUrl[currentImageIndex]}
                alt={product.name}
                width={400}
                height={400}
                className="w-full h-auto object-contain"
              />
              {product.imageUrl.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-6 h-6 text-gray-800" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-6 h-6 text-gray-800" />
                  </button>
                </>
              )}
            </>
          ) : (
            <div className="w-full h-[400px] bg-gray-200 flex items-center justify-center">
              <p>Imagen no disponible</p>
            </div>
          )}
        </div>
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold text-blue-800 mb-4">
            {product.name}
          </h1>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <ul className="list-disc list-inside mb-6">
            <li className="text-gray-600">Modelo: {product.model}</li>
            <li className="text-gray-600">Capacidad: {product.capacity}</li>
            <li className="text-gray-600">Voltaje: {product.voltage}</li>
            <li className="text-gray-600">
              Refrigerante: {product.refrigerant}
            </li>
          </ul>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <Button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full">
              <WhatsAppIcon className="inline-block mr-2 h-5 w-5" />
              Consultar por WhatsApp
            </Button>
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-4 py-2 rounded-full">
              <Instagram className="inline-block mr-2 h-5 w-5" />
              Consultar por Instagram
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
