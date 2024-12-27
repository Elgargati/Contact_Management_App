import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer, toast, Slide } from "react-toastify";
import ContactDetails from "./components/ContactDetails";
import ContactForm from "./components/ContactForm";
import Sidebar from "./components/Sidebar";
import SearchContact from "./components/SearchContact";
import NotFound from "./components/NotFound";

export default function App() {
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: "Mohammed El Gargati",
      email: "mohammedelgargati@gmail.com",
      phone: "0771440465",
      avatar:
        "https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg",
    },
    {
      id: 2,
      name: "Oussama",
      email: "Oussama@gmail.com",
      phone: "0661440233",
      avatar:
        "https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg",
    },
    {
      id: 3,
      name: "Salah",
      email: "salah@gmail.com",
      phone: "0761670222",
      avatar:
        "https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg",
    },
    {
      id: 4,
      name: "Azdine",
      email: "Azdine@gmail.com",
      phone: "0761670222",
      avatar:
        "https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg",
    },
    {
      id: 5,
      name: "Ayoub",
      email: "Ayoub@gmail.com",
      phone: "0761670222",
      avatar:
        "https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.phone.includes(searchTerm)
  );

  const handleSaveContact = (contactData) => {
    if (contactData.id) {
      setContacts(
        contacts.map((contact) =>
          contact.id === contactData.id ? contactData : contact
        )
      );
      notify("success", "Successfully modify info ");
    } else {
      const newContact = { ...contactData, id: Date.now() };
      setContacts([...contacts, newContact]);
      notify("success", "Persone successfully Added");
    }
  };

  const handleDeleteContact = (id) => {
    notify("error", "Person is deleted ");
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const notify = (type, message) => {
    const toastType = type;
    const toastMessage = message;

    toast[toastType](toastMessage, {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      transition: Slide,
      draggable: true,
      theme: "light",
    });
  };
  return (
    <Router>
      <div className="flex h-screen  bg-gradient-to-l from-zinc-50 to-blue-100 overflow-hidden">
        <Sidebar
          contacts={filteredContacts}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />
        <main className="flex-1 overflow-y-auto">
          <Routes>
            <Route path="/Contact_Management_App" element={<SearchContact />} />
            <Route
              path="/Contact_Management_App/contact/:id"
              element={
                <ContactDetails
                  contacts={contacts}
                  onDelete={handleDeleteContact}
                />
              }
            />
            <Route
              path="/Contact_Management_App/new"
              element={<ContactForm onSave={handleSaveContact} />}
            />
            <Route
              path="/Contact_Management_App/edit/:id"
              element={
                <ContactForm contacts={contacts} onSave={handleSaveContact} />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <ToastContainer
          theme={"light"}
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          limit={2}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </Router>
  );
}
