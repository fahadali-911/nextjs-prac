import Link from "next/link";
import React from "react";
import LogoutButton from "./LogoutButton";
import { loginAction } from "../actions/auth";
import { cookies } from "next/headers";

const Navbar = async () => {
  const sessionCookie = (await cookies()).get("session");
  const session = sessionCookie ? JSON.parse(sessionCookie.value) : null;
  return (
    <nav className="bg-sky-500 shadow-sm">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-600">
          Contact Manager
        </Link>

        <div className="flex items-center space-x-4">
          {session ? (
            <>
              <Link href="/contact" className="hover:text-blue-600">
                Contact
              </Link>

              <LogoutButton />
            </>
          ) : (
            <>
              <Link href="/login" className="hover:text-blue-600">
                Login
              </Link>
              <Link href="/register" className="hover:text-blue-600">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
