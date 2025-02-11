import Table from "@/components/table/Table";
import { groceryItems } from "@/data/groceryData";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background p-8">
      <div className="w-full max-w-4xl">
        <h1 className="">Today&apos;s Groceries</h1>
        <Table data={groceryItems} />
      </div>
    </div>
  );
}
