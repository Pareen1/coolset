"use client";
import { TableProps } from "@/types/table";
import React, { useMemo, useState } from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import TableFooter from "./TableFooter";
import { SectionOption } from "@/types/sectionOption";
import StyledMultiSelect from "../controls/StyledMultiSelect";

const Table: React.FC<TableProps> = ({ data, tableTitle }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [sortDirection, setSortDirection] = useState<"asc" | "des">("asc");
  const [selectedSections, setSelectedSections] = useState<SectionOption[]>([]);
  const totalItems = data.length;

  const calculatePricePer100g = (price: number, weight: number) => {
    return (price / weight) * 0.1;
  };

  const sectionNames = useMemo(() => {
    const sections = data.map((item) => item.section);
    const sectionNames = Array.from(new Set(sections));
    return sectionNames.map((section) => ({ label: section, value: section }));
  }, [data]);

  const handleSort = () => {
    setSortDirection((current) => (current === "asc" ? "des" : "asc"));
  };

  const sortedAndPaginatedData = useMemo(() => {
    let filteredData = data;
    if (selectedSections.length > 0) {
      filteredData = data.filter((item) =>
        selectedSections.some((section) => section.value === item.section)
      );
    }

    const calculatedData = filteredData.map((item) => ({
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
  }, [currentPage, rowsPerPage, data, sortDirection, selectedSections]);

  return (
    <div>
      <div className="flex justify-between items-center gap-2">
        <h1 className="font-medium text-xl">{tableTitle}</h1>
        <StyledMultiSelect
          sectionNames={sectionNames}
          selectedSections={selectedSections}
          setSelectedSections={setSelectedSections}
        />
      </div>
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
