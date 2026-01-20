import React from "react";
import { ContactType } from "../types/contact";
import Link from "next/dist/client/link";
import { FiEdit } from "react-icons/fi";
import DeleteButton from "./deletebutton";
import { deleteContactAction } from "../actions/contact";

const Contactlist = ({ contacts }: { contacts: ContactType[] }) => {
  return (
    <div className="space-y-4 ">
      {contacts.map((contact) => (
        <div key={contact.id} className="p-4 border rounded-lg text-black">
          <div className="flex justify-between items-start ">
            <div>
              <h2 className="text-lg font-semibold ">{contact.name}</h2>
              <p>{contact.email}</p>
            </div>
            <div className="flex items-center self-center gap-3">
              <Link href={`/contact/edit/${contact.id}`} className=" ">
                <FiEdit className="text-blue-600" />
              </Link>
              <DeleteButton action={deleteContactAction} contact={contact} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Contactlist;
