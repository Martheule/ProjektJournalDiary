import React from "react";

export default function AddEntryButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="btn btn-outline btn-secondary mr-4"
      aria-label="Add new diary entry"
    >
      + New Entry
    </button>
  );
}
