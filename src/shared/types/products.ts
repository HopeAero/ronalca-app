export interface Products {
  id: number;
  name: string;
  description: string;
  model: string;
  capacity: string;
  voltage: string;
  refrigerant: string;
  imageUrl: string[];
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}
