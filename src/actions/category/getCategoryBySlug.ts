"use server";

import { API_URL } from "@/shared/config";
import { Category } from "@/shared/types/category";
import axios from "axios";

const ENDPOINT_URL = `${API_URL}/api/categories/slug/`;

export default async function getCategoryBySlug(
  slug: string
): Promise<Category> {
  try {
    const { data } = await axios.get<Category>(`${ENDPOINT_URL}${slug}`);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
