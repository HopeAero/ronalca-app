export interface PaginationData {
  page: number;
  perPage: number;
  totalItems: number;
  totalPages: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}

export interface PaginatedResponse<T> extends PaginationData {
  items: T[];
}

export type PaginationBody = {
  page?: number;
  perPage?: number;
};
