import Table from "@/components/table/Table";
import { groceryItems } from "@/data/groceryData";

export default function Home() {
  return (
    <div className="flex flex-col items-center  min-h-screen bg-background p-16">
      <div className="w-full">
        <Table tableTitle={`Today's Groceries`} data={groceryItems} />
      </div>
    </div>
  );
}
