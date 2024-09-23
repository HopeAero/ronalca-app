"use server";

import { API_URL } from "@/shared/config";
import { Products } from "@/shared/types/products";

import axios from "axios";

const ENDPOINT_URL = `${API_URL}/api/products/`;

export default async function getProductById(id: string): Promise<Products> {
  try {
    const { data } = await axios.get<Products>(`${ENDPOINT_URL}${id}`);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
