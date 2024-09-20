"use server";

import { API_URL } from "@/shared/config";
import { Subcategories } from "@/shared/types/subcategory";
import axios from "axios";

const ENDPOINT_URL = `${API_URL}/api/subcategories/`;

export default async function getSubcategoryBySlug(
  slug: string
): Promise<Subcategories> {
  try {
    const { data } = await axios.get<Subcategories>(`${ENDPOINT_URL}${slug}`);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
