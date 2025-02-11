"use client";
import { TableProps } from "@/types/table";
import React from "react";

const TableBody: React.FC<TableProps> = ({ data }) => {
  return (
    <tbody>
      {data.map(({ id, ...values }) => (
        <tr key={id} className="border-b last:border-b-0 hover:bg-gray-100">
          {Object.values(values).map((value, index) => (
            <td
              key={index}
              className={`px-4 and py-3 ${
                index >= 2 ? "text-right" : "text-left"
              } border border-gray-200 text-gray-900`}
            >
              {value}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
