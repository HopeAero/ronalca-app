import { Subcategories } from "./subcategory";

export interface Category {
  id: number;
  name: string;
  description: string;
  status: boolean;
  slug: string;
  imageUrl: string;
  subcategories: Subcategories[];
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}
