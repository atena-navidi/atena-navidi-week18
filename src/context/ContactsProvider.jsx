
import { ContactsContext } from "./ContactsContext";
import useContactsLogic from "../hooks/useContactsLogic";

export default function ContactsProvider({ children }) {
  const value = useContactsLogic();

  return (
    <ContactsContext.Provider value={value}>
      {children}
    </ContactsContext.Provider>
  );
}
