import { Products } from "./products";

export interface Subcategories {
  id: number;
  name: string;
  description: string;
  status: boolean;
  slug: string;
  imageUrl: string;
  products: Products[];
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}
