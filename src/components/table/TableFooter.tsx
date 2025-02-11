import React from "react";
import { TableFooterProps } from "@/types/table";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const TableFooter: React.FC<TableFooterProps> = ({
  totalItems,
  rowsPerPage,
  currentPage,
  setCurrentPage,
  setRowsPerPage,
}) => {
  const rowsPerPageOptions = [5, 10, 20, 50, 100];
  const startItem = (currentPage - 1) * rowsPerPage + 1;
  const endItem = Math.min(currentPage * rowsPerPage, totalItems);

  return (
    <div className="flex items-center bg-white text-gray-500 gap-16">
      <div>
        <label htmlFor="rows-per-page" className="mr-2">
          Rows per page:
        </label>
        <select
          id="rows-per-page"
          value={rowsPerPage}
          onChange={(e) => setRowsPerPage(Number(e.target.value))}
          className="rounded px-2 py-1"
        >
          {rowsPerPageOptions.map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
      </div>

      <div className="flex items-center">
        <div>
          {startItem}-{endItem} of {totalItems}
        </div>

        <div>
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2 disabled:opacity-50"
          >
            <FaChevronLeft className="text-sm" />
          </button>

          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={endItem === totalItems}
            className="p-2 disabled:opacity-50"
          >
            <FaChevronRight className="text-sm" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TableFooter;
