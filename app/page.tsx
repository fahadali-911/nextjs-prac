import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <div className="text-center">
        <h1 className="text4-xl  text-black font-bold"> 
           Welcome to Contact Manager 
        </h1>
        <p className="mt-2 text-lg text-gray-800">
          Manage your contacts easily and efficiently
        </p>
      </div>

      <div className="text-center">
        <p className="mt-2 text-lg text-gray-600">
          start managing your contacts today!
        </p>
      </div>
    </div>
  );
}
