import TableCell from "./TableCell";
import { TableRowProps } from "@/types/table";

const TableRow: React.FC<TableRowProps> = ({ item }) => {
  return (
    <tr className="border-b last:border-b-0 hover:bg-gray-100">
      <TableCell>{item.name}</TableCell>
      <TableCell>{item.section}</TableCell>
      <TableCell textAlign="right">{item.price.toFixed(2)}</TableCell>
      <TableCell textAlign="right">{item.pricePer100g.toFixed(2)}</TableCell>
    </tr>
  );
};

export default TableRow;
