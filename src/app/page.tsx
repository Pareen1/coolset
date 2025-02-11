import Table from "@/components/table/Table";
import { groceryItems } from "@/data/groceryData";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background py-8 px-16">
      <div className="w-full">
        <h1 className="">Today&apos;s Groceries</h1>
        <Table data={groceryItems} />
      </div>
    </div>
  );
}
