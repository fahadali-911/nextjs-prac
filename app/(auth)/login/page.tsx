import React from "react";
import Link from "next/link";
import styles from "../login.module.css";
import LoginForm from "@/app/_components/LoginForm";
const LoginPage = () => {
  return (
    <div className=" max-w-md mx-auto bg-orange p-6 rounded-lg shadow-md text-black">
      <h1 className="text-2xl font-bold mb-6">Login Page</h1>
      <LoginForm />
      <p className="mt-4 text-sm text-center">
        Don't have an account?
        <Link href="/register" className="hover:text-blue-600 hover:underline ">
          Register
        </Link>
        here
      </p>
    </div>
  );
};
export default LoginPage;
