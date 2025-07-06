import React from "react";

export default function EntryCard({ entry, onClick }) {
  const excerpt = entry.content.length > 100 ? entry.content.slice(0, 100) + "…" : entry.content;

  return (
    <div
      tabIndex={0}
      role="button"
      onClick={onClick}
      onKeyDown={(e) => (e.key === "Enter" ? onClick() : null)}
      className="card bg-base-100 shadow cursor-pointer hover:shadow-lg transition-shadow rounded-lg p-4"
      aria-label={`View diary entry titled ${entry.title}`}
    >
      <h2 className="font-semibold text-lg">{entry.title}</h2>
      <time className="text-sm text-gray-500">{new Date(entry.date).toLocaleDateString()}</time>
      <p className="mt-2 text-sm text-gray-700 whitespace-pre-wrap">{excerpt}</p>
    </div>
  );
}

export default EntryCard;
