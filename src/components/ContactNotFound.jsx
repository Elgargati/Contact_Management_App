import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeftFromLine } from "lucide-react";
import pageNotFound from "../assets/not-found_page.svg";
export default function ContactNotFound() {
  const navigate = useNavigate();
  return (
    <div className="p-6 flex flex-col items-center justify-center min-h-screen text-gray-500">
      <img src={pageNotFound} className="w-1/2" alt="" />
      <h2 className="text-2xl font-bold my-4">Contact Not Found </h2>
      <button
        onClick={() => navigate("/Contact_Management_App")}
        className="bg-gradient-to-br from-cyan-300 to-blue-700 hover:bg-gradient-to-bl flex gap-3 text-white px-4 py-2 rounded-lg  transition"
      >
        <ArrowLeftFromLine />
        Go Back
      </button>
    </div>
  );
}
