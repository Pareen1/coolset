"use client";
import { TableProps } from "@/types/table";
import React from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <table className="w-full border-collapse border border-gray-300 my-3">
      <TableHeader />
      <TableBody data={data} />
    </table>
  );
};

export default Table;
