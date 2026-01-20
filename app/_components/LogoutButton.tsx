"use client";
import React, { use } from "react";
import { logoutAction } from "../actions/auth";
import { redirect, useRouter } from "next/navigation";

const LogoutButton = () => {
  const router = useRouter();
  const handleLogout = async () => {
    try {
      await logoutAction();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <button
      className="px-4 py-2  bg-red-500 text-black rounded-md hover:bg-red-600 transition-colors cursor-pointer"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
};
export default LogoutButton;
