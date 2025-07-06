import React from "react";

export default function EntryDetails({ entry }) {
  return (
    <article>
      <h2 className="font-bold text-2xl mb-2">{entry.title}</h2>
      <time className="text-sm text-gray-500 mb-4 block">
        {new Date(entry.date).toLocaleDateString()}
      </time>
      <p className="whitespace-pre-wrap">{entry.content}</p>
    </article>
  );
}


export default EntryDetails;
