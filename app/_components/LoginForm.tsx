"use client";
import React from "react";
import { useActionState } from "react";
import { loginAction } from "../actions/auth";

export const LoginForm = () => {
  const [state, formAction] = useActionState(loginAction, {
    success: true,
    message: "",
  });
  return (
    <form action={formAction} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-900">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          required
          className="mt-1 block w-full rounded-md border-gray-600 shadow-sm from-red-400"
        />
      </div>

      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-900">
          Password
        </label>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          required
          className="mt-1 block w-full rounded-md border-gray-600 shadow-sm from-orange-400"
        />
        {state.message && <p className="text-red-500 mt-1">{state.message}</p>}
      </div>
      <button
        type="submit"
        className="mt-3 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
      >
        Login
      </button>
    </form>
  );
};
export default LoginForm;
