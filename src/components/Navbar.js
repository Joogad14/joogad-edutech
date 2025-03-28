"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [search, setSearch] = useState("")

  return (
    <nav className="bg-white shadow-md py-3 px-6 flex items-center justify-between fixed top-0 left-0 w-full z-50">
      <Link href="/">
  <div className="flex items-center space-x-2">
    <img 
      src="https://firebasestorage.googleapis.com/v0/b/joogad-chat.appspot.com/o/logo-removebg-preview%20(1).png?alt=media&token=1f637d77-da72-4f24-a191-b84fc5e640ba"
      alt="Main Logo"
      className="h-12 w-auto"
    />
    
    <img 
      src="https://firebasestorage.googleapis.com/v0/b/joogad-chat.appspot.com/o/Green_Modern_Marketing_Logo_1_-removebg-preview.png?alt=media&token=63d9d464-99b4-45f8-b66b-6512558e69b0"
      alt="Additional Logo"
      className="h-12 w-auto"
    />
  </div>
</Link>

      {/* Search Bar */}
      <div className="relative w-full max-w-md">
  <input 
    type="text" 
    placeholder="Search for anything" 
    className="w-full px-4 py-2 pl-12 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-purple-600"
  />
  <button className="absolute left-3 top-1/2 transform -translate-y-1/2">
    <img 
      src="https://firebasestorage.googleapis.com/v0/b/joogad-chat.appspot.com/o/download__18_-removebg-preview.png?alt=media&token=2f1fc49e-f639-4047-8b9b-b5ab894950ce" 
      alt="Search" 
      className="w-6 h-6"
    />
  </button>
</div>






      {/* Auth Buttons */}
      <div className="flex space-x-4">
        <Link href="/login">
          <button className="text-gray-700 font-medium hover:text-purple-600">Log in</button>
        </Link>
        <Link href="/signup">
          <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
            Sign up
          </button>
        </Link>
      </div>
    </nav>
  );
}
