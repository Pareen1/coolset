import { GroceryItem, TableGroceryItem } from "./grocery";

export interface TableProps {
  data: GroceryItem[];
}

export interface TableBodyProps {
  data: TableGroceryItem[];
}

export interface TableFooterProps {
  currentPage: number;
  totalItems: number;
  rowsPerPage: number;
  setCurrentPage: (page: number) => void;
  setRowsPerPage: (rows: number) => void;
}

export interface TableHeaderProps {
  handleSort: () => void;
  sortDirection: "asc" | "des";
}
