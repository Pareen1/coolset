"use client";
import { useAccess } from "@/context/AccessContext";
import React, { useState } from "react";

const QuizGate = () => {
  const [userAnswer, setUserAnswer] = useState("");
  const [error, setError] = useState("");
  const { grantAccess } = useAccess();
  const correctAnswer = process.env.NEXT_PUBLIC_QUIZ_ANSWER;

  console.log("the correct answer is:", correctAnswer);

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (userAnswer.toLowerCase().trim() === correctAnswer) {
      grantAccess();
      setError("");
    } else {
      setError("❌ Oops! That's not correct. Try again!");
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg w-full max-w-md p-2 sm:p-6 flex flex-col items-center text-center border border-gray-200">
      <h1 className="text-2xl font-bold text-gray-800 mb-3">
        🔒 Unlock Access to the Table!
      </h1>
      <p className="text-gray-600 text-sm mb-4">
        What is <span className="font-semibold text-primary">Coolset</span>
        &apos;s main focus?
      </p>

      <form onSubmit={handleSubmit} className="w-full">
        <input
          type="text"
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary text-gray-700"
          placeholder="Type your answer here..."
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
        />

        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

        <button
          type="submit"
          onClick={handleSubmit}
          className="mt-4 w-full bg-primary hover:bg-secondary text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300"
        >
          ✅ Submit Answer
        </button>
      </form>
    </div>
  );
};

export default QuizGate;
