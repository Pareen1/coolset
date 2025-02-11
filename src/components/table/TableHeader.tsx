import React from "react";

const headers = ["Name", "Section", "Price (€)", "Price / 100 g (€)"];

const TableHeader = () => {
  return (
    <thead className="bg-white border border-gray-200 border-b sticky top-0 z-10">
      <tr className="text-left">
        {headers.map((header) => (
          <th
            key={header}
            className="border px-4 py-2 font-medium text-gray-600"
          >
            {header}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
