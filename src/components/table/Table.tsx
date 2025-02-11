"use client";
import { TableProps } from "@/types/table";
import React, { useMemo, useState } from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import TableFooter from "./TableFooter";

const Table: React.FC<TableProps> = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const totalItems = data.length;

  const calculatePricePer100g = (price: number, weight: number) => {
    return (price / weight) * 0.1;
  };

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * rowsPerPage;
    return data.slice(startIndex, startIndex + rowsPerPage).map((item) => ({
      ...item,
      pricePer100g: calculatePricePer100g(item.price, item.weight),
    }));
  }, [currentPage, rowsPerPage, data]);

  return (
    <div>
      <table className="w-full my-3">
        <TableHeader />
        <TableBody data={paginatedData} />
      </table>
      <TableFooter
        totalItems={totalItems}
        rowsPerPage={rowsPerPage}
        setRowsPerPage={setRowsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Table;
