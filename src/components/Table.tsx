"use client";
import { TableProps } from "@/types/table";
import React from "react";

const Table: React.FC<TableProps> = ({ data }) => {
  console.log(data.length);
  return <div>Table</div>;
};

export default Table;
