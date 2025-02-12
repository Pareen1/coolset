import { TableHeaderProps } from "@/types/table";
import React from "react";
import { MdArrowUpward, MdArrowDownward } from "react-icons/md";

const headers = [
  { name: "Name", sortable: false },
  { name: "Section", sortable: false },
  { name: "Price (€)", sortable: false },
  { name: "Price / 100 g (€)", sortable: true },
];

const TableHeader: React.FC<TableHeaderProps> = ({
  handleSort,
  sortDirection,
}) => {
  return (
    <thead className="bg-white border border-gray-200 border-b sticky top-0">
      <tr className="text-left">
        {headers.map((header) => (
          <th
            key={header.name}
            className={`border px-4 py-2 font-medium text-gray-600 ${
              header.sortable ? "cursor-pointer" : ""
            }`}
            onClick={header.sortable ? handleSort : undefined}
          >
            {header.sortable ? (
              <div className="flex items-center gap-2 hover">
                <div>
                  {sortDirection === "asc" ? (
                    <MdArrowUpward />
                  ) : (
                    <MdArrowDownward />
                  )}
                </div>
                <div>{header.name}</div>
              </div>
            ) : (
              header.name
            )}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
