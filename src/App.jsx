import ContactsProvider from "./context/ContactsProvider";
import Contacts from "./components/Contacts.jsx";
import Header from "./components/Header.jsx";

function App() {
  return (
    <ContactsProvider>
      <Header />
      <Contacts />
    </ContactsProvider>
  );
}

export default App;
