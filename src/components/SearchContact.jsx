import React from "react";
import { Info } from "lucide-react";
import { Link } from "react-router-dom";
import SearchPeople from "../assets/people-search.svg";
export default function SearchContact() {
  return (
    <div className="p-6 flex flex-col items-center justify-center min-h-screen ">
      <div
        class="flex items-center p-4 mb-4 text-2xl text-blue-600 border border-blue-300 rounded-lg bg-blue-50 "
        role="alert"
      >
        <Info className="mx-2" />
        <span class="sr-only">Info</span>
        <div>
          <span class="font-medium">Info alert!</span> Select a contact or
          create a{" "}
          <Link
            to={"/Contact_Management_App/new"}
            className="font-bold hover:text-blue-900"
          >
            New one
          </Link>
        </div>
      </div>

      <img src={SearchPeople} className="w-1/3" alt="" />
    </div>
  );
}
