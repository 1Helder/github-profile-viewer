import React from "react";

const Header = () => {
  return (
    <header className="w-full bg-white border-b border-gray-100 py-4 px-6 mb-8">
      <div className="max-w-2xl mx-auto flex items-center gap-2">
        <span className="text-2xl">🐙</span>
        <h1 className="text-lg font-semibold text-gray-900">
          GitHub Profile Viewer
        </h1>
      </div>
    </header>
  );
};

export default Header;
