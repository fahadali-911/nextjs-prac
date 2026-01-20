import React from "react";
import Link from "next/link";
import styles from "../login.module.css";
import SignupForm from "@/app/_components/SignupForm";

const RegisterPage = () => {
  return (
    <div className=" max-w-md mx-auto bg-orange p-6 rounded-lg shadow-md text-black">
      <h1 className="text-2xl font-bold mb-6">Sign Up Page</h1>
      <SignupForm />
      <p className="mt-4 text-sm text-center">
        Already have an account?
        <Link href="/login" className="hover:text-blue-600 hover:underline ">
          Login
        </Link>
        here
      </p>
    </div>
  );
};
export default RegisterPage;
