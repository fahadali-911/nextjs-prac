"use server";

import axios from "axios";
// import { redirect } from "next/dist/client/components/navigation";
import { usertype } from "../types/user";
import { deleteSession, setSession } from "../_lib/session";
import { redirect } from "next/navigation";

const API_URL = "http://localhost:3001";
export const loginAction = async (
  prevState: { success: boolean; message: string },
  formData: FormData,
) => {
  const email = formData.get("email");
  const password = formData.get("password");

  console.log(email, password);

  const response = await axios.get(
    `${API_URL}/users?email=${email}&password=${password}`,
  );
  console.log("API response:", response.data);
  const user: usertype = response.data[0];
  console.log("this is", user);

  if (!user) {
    console.log("user not found");
    return { success: false, message: "User not found" };
  }

  if (user.passwords !== password) {
    console.log("Invalid Credential");
    return { success: false, message: "Invalid password" };
  }
  //set users in the cookies
  console.log("User found:", user);

  await setSession({
    name: user.name,
    email: user.email,
    id: user.id,
    passwords: user.passwords,
  });
  console.log("Session set successfully");

  redirect("/contacts");
};

export const logoutAction = async () => {
  await deleteSession();
  redirect("/login");
};
