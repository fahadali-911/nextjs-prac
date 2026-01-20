"use server";
import { revalidatePath } from "next/cache";
import { deleteContact } from "../api/contact";

export const deleteContactAction = async (
  prevState: any,
  formData: FormData,
) => {
  const id = formData.get("id") as string;
  try {
    await deleteContact({ id });
    revalidatePath("/contacts");
    return { success: true };
  } catch (error) {
    console.error("Failed to delete contact:", error);
    return { error: "Failed to delete contact" };
  }
};
