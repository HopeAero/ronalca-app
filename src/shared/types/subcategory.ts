export interface Subcategories {
  id: number;
  name: string;
  description: string;
  status: boolean;
  slug: string;
  imageUrl: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}
