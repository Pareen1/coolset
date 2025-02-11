"use client";
import { TableBodyProps } from "@/types/table";
import React from "react";
import TableRow from "./TableRow";

const TableBody: React.FC<TableBodyProps> = ({ data }) => {
  return (
    <tbody>
      {data.map((item) => (
        <TableRow key={item.id} item={item} />
      ))}
    </tbody>
  );
};

export default TableBody;
