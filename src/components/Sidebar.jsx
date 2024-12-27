import React from "react";
import { Link } from "react-router-dom";
import { Search, PlusCircle, User, ReceiptText } from "lucide-react";

export default function Sidebar({ contacts, searchTerm, onSearchChange }) {
  return (
    <div className="md:w-72 hover:w-80 duration-300 bg-gradient-to-r from-cyan-100 to-blue-200 md:h-screen border-b md:border-r flex flex-col">
      {/* Header */}
      <div className="p-4 border-b">
        <Link to={"/Contact_Management_App"}>
          <h1 className="text-xl text-center flex items-center justify-start gap-2 uppercase hover:text-gray-500 font-bold text-gray-800 mb-4">
            <ReceiptText />
            Contacts
          </h1>
        </Link>
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 pl-10 border rounded-full text-sm outline-none focus:ring focus:ring-blue-200 "
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={16} />
        </div>
      </div>

      <div className="overflow-y-auto overflow-x-hidden flex-1">
        {contacts.length > 0 ? (
          contacts.map((contact) => (
            <Link
              key={contact.id}
              to={`/Contact_Management_App/contact/${contact.id}`}
              className=" text-left p-1  bg-gradient-to-r from-blue-200 to-white m-3 rounded-xl hover:bg-gradient-to-br  flex items-center gap-3"
            >
              {contact.avatar ? (
                <img
                  src={contact.avatar}
                  alt="Avatar"
                  className="w-8 h-8 rounded-full"
                />
              ) : (
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                  <User size={16} className="text-gray-500" />
                </div>
              )}
              <span className="text-sm font-medium truncate">
                {contact.name}
              </span>
            </Link>
          ))
        ) : (
          <div className="p-4 text-gray-500 text-sm text-center">
            No contacts found
          </div>
        )}
      </div>

      <Link
        to="/Contact_Management_App/new"
        className="m-4 w-2/3 mx-auto text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 px-4 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-600"
      >
        <PlusCircle size={20} />
        Add Contact
      </Link>
    </div>
  );
}
