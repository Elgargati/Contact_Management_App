import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Edit2, Trash2, User, Mail, Phone } from "lucide-react";
import NotFound from "./NotFound";
export default function ContactDetails({ contacts, onDelete }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const contact = contacts.find((contact) => contact.id === parseInt(id));

  if (!contact) {
    return <NotFound />;
  }

  return (
    <div className="p-6 md:p-12 bg-gradient-to-r from-white to-blue-200 min-h-screen flex  items-start">
      <div className="w-full max-w-lg  p-6 rounded-lg shadow-lg hover:scale-105 duration-300">
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-center gap-4">
            {contact.avatar ? (
              <img
                src={contact.avatar}
                alt="Avatar"
                className="w-20 h-20 rounded-full shadow-md"
              />
            ) : (
              <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center shadow-md">
                <User size={40} className="text-gray-500" />
              </div>
            )}
            <h2 className="text-2xl font-bold text-gray-800">{contact.name}</h2>
          </div>
          <div className="flex  gap-2">
            <button
              onClick={() =>
                navigate(`/Contact_Management_App/edit/${contact.id}`)
              }
              className="p-2 text-blue-500 hover:bg-blue-100 rounded-lg flex items-center gap-2 transition"
            >
              <Edit2 size={20} />
              Edit
            </button>
            <button
              onClick={() => {
                onDelete(contact.id);
                navigate("/Contact_Management_App");
              }}
              className="p-2 text-red-500 hover:bg-red-50 rounded-lg flex items-center gap-2 transition"
            >
              <Trash2 size={20} />
              Delete
            </button>
          </div>
        </div>
        <div className="space-y-4">
          {/* Email */}
          <div className="flex items-center gap-3 text-gray-800">
            <Mail size={20} />
            <a
              href={`mailto:${contact.email}`}
              className="hover:text-blue-500 transition"
            >
              {contact.email}
            </a>
          </div>
          {/* Phone */}
          <div className="flex items-center gap-3 text-gray-800">
            <Phone size={20} />
            <a
              href={`tel:${contact.phone}`}
              className="hover:text-blue-500 transition"
            >
              {contact.phone}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
