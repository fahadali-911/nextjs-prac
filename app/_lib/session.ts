import { cookies } from "next/headers";
import { usertype } from "../types/user";
import { promises } from "dns";
import { Session } from "inspector/promises";
//set session cookies
export const setSession = async (user: usertype) => {
  const cookieStore = await cookies();

  cookieStore.set("session", JSON.stringify(user), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: "/",
  });

  console.log("Session cookie set:", cookieStore.get("session"));
};
//get session cookies
export const getSession = async (): Promise<usertype | null> => {
  const session = (await cookies()).get("session")?.value;
  if (!session) return null;
  const user = JSON.parse(session) as usertype;
  return user;
};

//delete session cookies
export const deleteSession = async () => {
  const cookieStore = await cookies();
  cookieStore.delete("session");
};
