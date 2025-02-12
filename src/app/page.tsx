"use client";
import QuizGate from "@/components/QuizGate";
import Table from "@/components/table/Table";
import { useAccess } from "@/context/AccessContext";
import { groceryItems } from "@/data/groceryData";

export default function Home() {
  const { hasAccess } = useAccess();
  return (
    <div className="flex flex-col items-center min-h-screen bg-background md:p-16 p-8">
      {!hasAccess ? (
        <QuizGate />
      ) : (
        <div className="w-full">
          <Table tableTitle={`Today's Groceries`} data={groceryItems} />
        </div>
      )}
    </div>
  );
}
