import { get } from "http";
import { getSession } from "../_lib/session";
import { getContacts } from "../api/contact";
import Contactlist from "../_components/contactlist";

const contactpages = async () => {
  const user = await getSession();
  if (!user) {
    return (
      <div>
        please{" "}
        <a href="/login" className="text-blue-600 hover:underline">
          login
        </a>{" "}
        to view contacts.
      </div>
    );
  }
  const Contacts = await getContacts(user?.id.toString());
  console.log("contacts list", Contacts);
  if (!Contacts || Contacts.length === 0) {
    return (
      <div>
        please{" "}
        <a href="/contact/new" className="text-blue-600 hover:underline">
          Add a new contact
        </a>{" "}
        to your contact list .
      </div>
    );
  }
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-black ">Your Contacts</h1>
        <a
          href="/contact/new"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
        >
          Add New Contact
        </a>
      </div>
      <Contactlist contacts={Contacts} />
    </div>
  );
};

export default contactpages;
