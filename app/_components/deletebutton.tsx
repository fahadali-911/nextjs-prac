"use client";

import React, { useActionState } from "react";
import { ContactType } from "../types/contact";
import { FiTrash, FiTrash2 } from "react-icons/fi";
type DeleteButtonProps = {
  action: (prevState: any, formdata: FormData) => Promise<any>;
  contact: ContactType;
};

const DeleteButton = ({ action, contact }: DeleteButtonProps) => {
  const [state, formAction] = useActionState(action, null);
  return (
    <form method="post">
      <input type="hidden" name="id" value={contact.id} />
      <button
        type="submit"
        className="flex items-center gap-2 px-3 py-1 border border-red-500 rounded-md hover:border-red-800 hover:bg-red-400 text-red-900 cursor-pointer"
        onClick={(e) => {
          if (!confirm(`Are you sure you want to delete ${contact.name}?`)) {
            e.preventDefault();
          }
        }}
      >
        <FiTrash2 className=" text-red-500 text-lg " />
      </button>
    </form>
  );
};
export default DeleteButton;
