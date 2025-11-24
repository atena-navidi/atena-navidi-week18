# :card_index: Contact List App

Manage your contacts easily with this simple and modern **React** app!  
Add, edit, delete, and search contacts with instant validation. Perfect for keeping your contacts organized. :sunglasses:


## :sparkles: Features

- :heavy_plus_sign: **Add Contacts** – Name, Last Name, Email, Phone
- :pencil2: **Edit Contacts** – Update existing info
- :wastebasket: **Delete Contacts** – Single or multiple with confirmation
- :mag: **Search Contacts** – By name, email, or phone
- :white_check_mark: **Form Validation** – Required fields, valid email & phone, no duplicates
- :iphone: **Responsive Design** – Works beautifully on all screen sizes
- :floppy_disk: **Persistent Storage** – Data saved in LocalStorage

## :hammer_and_wrench: Tech Stack

- **React** – Frontend library  
- **React Hook Form** – Form handling  
- **Yup** – Schema validation  
- **Tailwind CSS** – Styling  
- **UUID** – Unique IDs for contacts  
- LocalStorage – Save your contacts in the browser

## 🚀 Getting Started

### Prerequisites

Make sure you have:

- Node.js ≥ 16.x
- npm or yarn

### Installation
```
# Clone the repo
git clone https://github.com/yourusername/contact-list-app.git

# Go to project folder
cd contact-list-app

# Install dependencies
npm install
# or
yarn install
```
### :jigsaw: How to use
1. Click the :heavy_plus_sign: button at the top-right to add a new contact.

2. Fill in Name, Last Name, Email, and Phone.

3. Click Save :white_check_mark: to add the contact.

4. Edit a contact using the Edit button :pencil2:.

5. Delete a contact with Delete :wastebasket: or select multiple contacts and click Delete Selected.

6. Use the search bar :mag: to quickly find a contact.

### :file_folder: Project Structure
```
src/
├─ components/
│  ├─ Contacts.jsx
│  ├─ ContactsList.jsx
│  ├─ ContactActions.jsx
│  ├─ FormModal.jsx
│  ├─ ConfirmModal.jsx
│  └─ Header.jsx
│
├─ context/
│  ├─ ContactsContext.js
│  └─ ContactsProvider.jsx
│
├─ data/
│  └─ initialContacts.js
│
├─ hooks/
│  └─ useContactsLogic.js
│
├─ validation/
│  └─ contactSchema.js
│
└─ App.jsx

```

### :bulb: Tips

- Make sure phone numbers start with 09 and are 11 digits.

- Emails must be valid and unique.

- Bulk delete is easy: select multiple contacts and click Delete Selected.

- Your data is stored in LocalStorage, so it persists even after closing the browser.

Enjoy managing your contacts! :sunglasses::card_index: