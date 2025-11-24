
import { useContacts } from "../context/ContactsContext";

const ContactActions = () => {
  const {
    query,
    setQuery,
    selectedContacts,
    selectAll,
    deselectAll,
    setContactToDelete,
    filteredContacts,
  } = useContacts();

  const allSelected =
    filteredContacts.length > 0 &&
    selectedContacts.length === filteredContacts.length;

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border p-2 rounded-lg w-full sm:w-auto flex-1"
      />

      <div className="flex flex-wrap gap-2 justify-center sm:justify-end">
        {filteredContacts.length > 0 && (
          <>
            <button
              onClick={() =>
                allSelected ? deselectAll() : selectAll(filteredContacts)
              }
              className={`px-4 py-2 rounded-lg ${
                allSelected
                  ? "bg-gray-400 text-white hover:bg-gray-500"
                  : "bg-green-600 text-white hover:bg-green-700"
              }`}
            >
              {allSelected ? "Deselect All" : "Select All"}
            </button>

            {selectedContacts.length > 0 && (
              <button
                onClick={() => setContactToDelete(selectedContacts)}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
              >
                Delete Selected ({selectedContacts.length})
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ContactActions;
