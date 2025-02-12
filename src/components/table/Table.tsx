"use client";
import { TableProps } from "@/types/table";
import React, { useMemo, useState } from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import TableFooter from "./TableFooter";

const Table: React.FC<TableProps> = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [sortDirection, setSortDirection] = useState<"asc" | "des">("asc");
  const totalItems = data.length;

  const calculatePricePer100g = (price: number, weight: number) => {
    return (price / weight) * 0.1;
  };

  const handleSort = () => {
    setSortDirection((current) => (current === "asc" ? "des" : "asc"));
  };

  const sortedAndPaginatedData = useMemo(() => {
    const calculatedData = data.map((item) => ({
      ...item,
      pricePer100g: calculatePricePer100g(item.price, item.weight),
    }));

    calculatedData.sort((a, b) => {
      if (sortDirection === "asc") {
        return a.pricePer100g - b.pricePer100g;
      } else {
        return b.pricePer100g - a.pricePer100g;
      }
    });

    const startIndex = (currentPage - 1) * rowsPerPage;
    return calculatedData.slice(startIndex, startIndex + rowsPerPage);
  }, [currentPage, rowsPerPage, data, sortDirection]);

  return (
    <div>
      <table className="w-full my-3">
        <TableHeader handleSort={handleSort} sortDirection={sortDirection} />
        <TableBody data={sortedAndPaginatedData} />
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
