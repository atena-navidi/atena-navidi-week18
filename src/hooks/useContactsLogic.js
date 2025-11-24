

import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { initialContacts } from "../data/initialContacts";

const useContactsLogic = () => {
  const [contacts, setContacts] = useState(() => {
    const saved = localStorage.getItem("contacts");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return Array.isArray(parsed) ? parsed : initialContacts;
      } catch (error) {
        console.error("Failed to parse contacts from localStorage:", error);
        return initialContacts;
      }
    }
    localStorage.setItem("contacts", JSON.stringify(initialContacts));
    return initialContacts;
  });

  const [editingContactId, setEditingContactId] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [contactToDelete, setContactToDelete] = useState(null);
  const [selectedContacts, setSelectedContacts] = useState([]);
  const [query, setQuery] = useState("");

  // Persist contacts to localStorage
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  // Select / Deselect
  const toggleSelect = (id) =>
    setSelectedContacts((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );

  const selectAll = (list) => setSelectedContacts(list.map((c) => c.id));
  const deselectAll = () => setSelectedContacts([]);

  // Open / Close Form
  const openForm = (contactId = null) => {
    setEditingContactId(contactId);
    setIsFormOpen(true);
  };

  const closeFormHandler = () => {
    setEditingContactId(null);
    setIsFormOpen(false);
  };

  // Save Contact (Add or Edit)
  const saveHandler = (formData) => {
    if (editingContactId) {
      // Edit existing contact
      setContacts((prev) =>
        prev.map((c) => (c.id === editingContactId ? { ...c, ...formData } : c))
      );
    } else {
      // Add new contact
      setContacts((prev) => [...prev, { ...formData, id: uuidv4() }]);
    }

    setEditingContactId(null);
    setIsFormOpen(false);
  };

  // Delete
  const deleteHandler = (contact) => setContactToDelete(contact);

  const confirmDelete = () => {
    setContacts((prev) =>
      Array.isArray(contactToDelete)
        ? prev.filter((c) => !contactToDelete.includes(c.id))
        : prev.filter((c) => c.id !== contactToDelete.id)
    );
    setSelectedContacts([]);
    setContactToDelete(null);
  };

  const filteredContacts = contacts.filter((c) =>
    `${c.name} ${c.lastName} ${c.email} ${c.phone}`
      .toLowerCase()
      .includes(query.toLowerCase())
  );

  // Contact selected for editing
  const contactForEdit = contacts.find((c) => c.id === editingContactId) || null;

  return {
    contacts,
    filteredContacts,
    selectedContacts,
    isFormOpen,
    editingContactId,
    contactToDelete,
    query,
    contact: contactForEdit,

    setQuery,
    openForm,
    closeFormHandler,
    setContactToDelete,

    toggleSelect,
    selectAll,
    deselectAll,
    saveHandler,
    deleteHandler,
    confirmDelete,
  };
};

export default useContactsLogic;
