
import { useContacts } from "../context/ContactsContext";
import FormModal from "./FormModal";
import ConfirmModal from "./ConfirmModal";
import ContactsList from "./ContactsList";
import ContactActions from "./ContactActions";

const Contacts = () => {
  const { isFormOpen, contactToDelete, openForm } = useContacts();

  return (
    <>
      {isFormOpen && <FormModal />}

      {contactToDelete &&
        (Array.isArray(contactToDelete) ? contactToDelete.length > 0 : true) && (
          <ConfirmModal
            title="Delete Contact"
            message={
              Array.isArray(contactToDelete)
                ? `Delete ${contactToDelete.length} contacts?`
                : `Delete ${contactToDelete.name}?`
            }
          />
        )}

      <div className="max-w-lg mx-auto">
        <ContactActions />
        <ContactsList />
      </div>

      <button
        onClick={() => openForm(null)}
        className="bg-linear-to-br from-blue-500 to-purple-500 text-white 
                   rounded-full w-14 h-14 text-3xl flex items-center justify-center 
                   fixed top-8 right-8 shadow-2xl hover:scale-110 transition-all"
      >
        +
      </button>
    </>
  );
};

export default Contacts;
