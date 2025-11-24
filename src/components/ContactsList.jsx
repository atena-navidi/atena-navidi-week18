import { useContacts } from "../context/ContactsContext";

const ContactsList = () => {
  const {
    filteredContacts,
    toggleSelect,
    selectedContacts,
    openForm,
    deleteHandler,
  } = useContacts();

  if (filteredContacts.length === 0) {
    return (
      <p className="text-center text-gray-300 mt-10">
        No contacts yet — click <span className="font-semibold">+</span> to add
        one!
      </p>
    );
  }

  return (
    <div className="mt-6">
      {filteredContacts.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl mb-3 shadow-lg"
        >
          <div className="flex items-center gap-4">
            <input
              type="checkbox"
              className="w-5 h-5 accent-purple-500"
              checked={selectedContacts.includes(item.id)}
              onChange={() => toggleSelect(item.id)}
            />
            <div>
              <h3 className="font-bold text-white text-lg">
                {item.name} {item.lastName}
              </h3>
              <p className="text-gray-300 text-sm">{item.email}</p>
              <p className="text-gray-300 text-sm">{item.phone}</p>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              className="text-blue-300 hover:text-blue-400 transition"
              onClick={() => openForm(item.id)}
            >
              Edit
            </button>
            <button
              className="text-red-300 hover:text-red-400 transition"
              onClick={() => deleteHandler(item)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactsList;
