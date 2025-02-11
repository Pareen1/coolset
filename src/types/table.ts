import { GroceryItem } from "./grocery";

export interface TableProps {
  data: GroceryItem[];
}

export interface TableFooterProps {
  currentPage: number;
  totalItems: number;
  rowsPerPage: number;
  setCurrentPage: (page: number) => void;
  setRowsPerPage: (rows: number) => void;
}
