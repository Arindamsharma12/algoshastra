import React from "react";

function Result({ score, totalQuestions, onRestart }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 text-center">
        <h1 className="text-3xl font-bold text-green-600">🎉 Quiz Completed! 🎉</h1>
        <p className="text-lg mt-3 text-gray-700">
          You scored <span className="text-blue-600 font-bold">{score}</span> out of {totalQuestions}!
        </p>

        {/* Score Progress Bar */}
        <div className="w-full bg-gray-300 rounded-full h-6 mt-4 relative">
          <div
            className="bg-blue-500 h-6 rounded-full text-white flex items-center justify-center text-sm font-bold"
            style={{ width: `${(score / totalQuestions) * 100}%` }}
          >
            {Math.round((score / totalQuestions) * 100)}%
          </div>
        </div>

        {/* Restart Button */}
        <button
          onClick={onRestart}
          className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
        >
          🔄 Restart Quiz
        </button>
      </div>
    </div>
  );
}

export default Result;
