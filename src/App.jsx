import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import EntryList from "./components/EntryList";
import AddEntryModal from "./components/AddEntryModal";
import ViewEntryModal from "./components/ViewEntryModal";

const LOCAL_STORAGE_KEY = "diaryEntries";

export default function App() {
  const [entries, setEntries] = useState([]);
  const [selectedEntry, setSelectedEntry] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);

  // Load entries from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (stored) setEntries(JSON.parse(stored));
  }, []);

  // Save entries to localStorage when entries change
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(entries));
  }, [entries]);

  const openAddModal = () => setShowAddModal(true);
  const closeAddModal = () => setShowAddModal(false);

  const openViewModal = (entry) => {
    setSelectedEntry(entry);
    setShowViewModal(true);
  };
  const closeViewModal = () => setShowViewModal(false);

  const addEntry = (newEntry) => {
    setEntries((prev) => [newEntry, ...prev]);
  };

  return (
    <div className="min-h-screen bg-base-200 text-base-content">
      <Header onAddClick={openAddModal} />
      <main className="container mx-auto p-4">
        <EntryList entries={entries} onEntryClick={openViewModal} />
      </main>
      {showAddModal && (
        <AddEntryModal onClose={closeAddModal} onAdd={addEntry} />
      )}
      {showViewModal && selectedEntry && (
        <ViewEntryModal entry={selectedEntry} onClose={closeViewModal} />
      )}
    </div>
  );
}
