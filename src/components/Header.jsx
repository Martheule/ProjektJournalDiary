import React from "react";
import AddEntryButton from "./AddEntryButton";

export default function Header({ onAddClick }) {
  return (
    <header className="navbar bg-primary text-primary-content shadow-lg">
      <div className="flex-1 px-4 text-xl font-bold">🍉 My Diary</div>
      <AddEntryButton onClick={onAddClick} />
    </header>
  );
}
