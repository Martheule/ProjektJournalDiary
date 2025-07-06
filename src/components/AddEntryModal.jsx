import React from "react";
import EntryForm from "./EntryForm";

export default function AddEntryModal({ onClose, onAdd }) {
  return (
    <div className="modal modal-open modal-bottom sm:modal-middle">
      <div className="modal-box relative max-w-lg">
        <button
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          onClick={onClose}
          aria-label="Close add entry form"
        >
          ✕
        </button>
        <h3 className="font-bold text-lg mb-4">Add New Diary Entry</h3>
        <EntryForm
          onSubmit={(data) => {
            onAdd({
              id: crypto.randomUUID(),
              ...data,
            });
            onClose();
          }}
          onCancel={onClose}
        />
      </div>
    </div>
  );
}
