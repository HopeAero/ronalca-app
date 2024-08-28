"use server";

import { API_URL } from "@/shared/config";
import { Category } from "@/shared/types/category";
import axios from "axios";

const ENDPOINT_URL = `${API_URL}/api/categories/all`;

export default async function getCategory(): Promise<Category[]> {
  try {
    const { data } = await axios.get<Category[]>(ENDPOINT_URL);

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
