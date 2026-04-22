import React from "react";

const ErrorMessage = ({ message }) => {
  return (
    <div className="flex items-center gap-3 bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 w-full max-w-xl mx-auto text-sm">
      <span className="text-lg">⚠️</span>
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage;
