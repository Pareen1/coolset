import React from "react";

interface TableCellProps {
  children: React.ReactNode;
  textAlign?: "left" | "right";
}

const TableCell: React.FC<TableCellProps> = ({ children, textAlign }) => {
  return (
    <td
      className={`px-4 py-3 border border-gray-200 text-gray-900 text-${textAlign}`}
    >
      {children}
    </td>
  );
};

export default TableCell;
