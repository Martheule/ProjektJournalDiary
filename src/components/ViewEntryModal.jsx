import React from "react";
import EntryDetails from "./EntryDetails";

export default function ViewEntryModal({ entry, onClose }) {
  return (
    <div className="modal modal-open modal-bottom sm:modal-middle">
      <div className="modal-box max-w-lg relative">
        <button
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          onClick={onClose}
          aria-label="Close diary entry view"
        >
          ✕
        </button>
        <EntryDetails entry={entry} />
      </div>
    </div>
  );
}
export default ViewEntryModal;