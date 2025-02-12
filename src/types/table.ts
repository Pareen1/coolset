import { GroceryItemProps, TableGroceryItemProps } from "./grocery";

export interface TableProps {
  data: GroceryItemProps[];
  tableTitle: string;
}

export interface TableBodyProps {
  data: TableGroceryItemProps[];
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

export interface TableRowProps {
  item: TableGroceryItemProps;
}
