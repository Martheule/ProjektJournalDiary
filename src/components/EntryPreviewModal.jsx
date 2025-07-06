// components/EntryPreviewModal.jsx
import React from "react";

const EntryPreviewModal = ({ entry, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-md overflow-auto max-h-[80vh]">
        <h2 className="text-xl font-bold mb-2">{entry.title}</h2>
        <div className="text-gray-500 mb-4">{entry.date}</div>
        <img src={entry.imageUrl} alt="" className="w-full mb-4 rounded" />
        <p>{entry.content}</p>
        <div className="text-right mt-4">
          <button onClick={onClose} className="px-4 py-2 border rounded">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default EntryPreviewModal;
