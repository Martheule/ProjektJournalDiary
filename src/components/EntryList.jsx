import React from "react";
import EntryCard from "./EntryCard";

export default function EntryList({ entries, onEntryClick }) {
  if (entries.length === 0) {
    return (
      <p className="text-center text-lg text-gray-500 mt-12">
        No diary entries yet. Click "+ New Entry" to add one!
      </p>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
      {entries
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .map((entry) => (
          <EntryCard
            key={entry.id}
            entry={entry}
            onClick={() => onEntryClick(entry)}
          />
        ))}
    </div>
  );
}
