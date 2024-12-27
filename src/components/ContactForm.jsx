import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function ContactForm({ contacts, onSave }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    avatar: "",
  });

  useEffect(() => {
    if (id) {
      const contact = contacts.find((contact) => contact.id === parseInt(id));
      if (contact) {
        setFormData(contact);
      }
    }
  }, [id, contacts]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    id ? navigate(`/contact/${id}`) : navigate(`/Contact_Management_App`);
  };

  return (
    <div className="p-6 md:p-12 bg-gradient-to-r from-white to-blue-200 min-h-screen flex ">
      <div className=" p-8  w-4/5 mx-auto  ">
        <h2 className=" text-center  mb-6 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          {id ? "Edit Contact" : "Add New Contact"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Champ Nom */}
          <div class="relative z-0 w-full mb-5 group">
            <input
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="block py-2.5 px-0 w-full text-lg  bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_name"
              class="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Name
            </label>
          </div>

          {/* Champ Email */}
          <div class="relative z-0 w-full mb-5 group">
            <input
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              class="block py-2.5 px-0 w-full text-lg  bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_email"
              class="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </div>

          {/* Champ Téléphone */}

          <div class="relative z-0 w-full mb-5 group">
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="block py-2.5 px-0 w-full text-lg  bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_Tel"
              class="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Phone
            </label>
          </div>

          {/* Champ Avatar */}

          <div class="relative z-0 w-full mb-5 group">
            <input
              type="url"
              value={formData.avatar}
              onChange={(e) =>
                setFormData({ ...formData, avatar: e.target.value })
              }
              className="block py-2.5 px-0 w-full text-lg  bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              for="floating_Avatar"
              class="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Avatar URL (optional)
            </label>
          </div>

          {/* Boutons */}
          <div className="flex justify-center gap-4 pt-4">
            <button
              type="submit"
              className=" text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl px-6 py-2 rounded-full  transition"
            >
              {id ? ` Update` : `Add`} Contact
            </button>

            <button
              type="button"
              onClick={
                id
                  ? () => navigate(`/contact/${id}`)
                  : () => navigate(`/Contact_Management_App`)
              }
              className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl px-6 py-2 rounded-full  transition"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
