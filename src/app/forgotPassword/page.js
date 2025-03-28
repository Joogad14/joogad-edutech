"use client";
import { useState } from "react";
import Link from "next/link";

export default function ForgotPassword() {  
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      
      if (!response.ok) throw new Error("Password reset failed");
      setMessage("A password reset link has been sent to your email.");
    } catch (error) {
      console.error("Error:", error);
      setMessage("Failed to send password reset email.");
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center my-5 min-h-screen bg-gray-100 p-4">
      <div className="w-full md:w-1/2 h-screen flex items-center justify-center p-4">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/joogad-chat.appspot.com/o/WhatsApp_Image_2025-03-27_at_10.40.46_f8c13d53-removebg-preview.png?alt=media&token=931c1d7c-0e8d-47d4-9e09-1998ba8d5909"
          alt="Forgot Password"
          className="w-full h-[80vh] object-contain"
        />
      </div>
      
      <div className="bg-white p-8 rounded-lg shadow-lg w-full md:w-1/3">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-4">Forgot Password</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>

          <div className="relative">
            <input type="email" id="email" onChange={handleChange} className="peer w-full border border-gray-300 rounded-md px-4 pt-5 pb-2 text-black focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500" placeholder=" "/>
            <label htmlFor="email" className="absolute left-4 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-purple-500">Email</label>
          </div>

          <button type="submit" className="w-full bg-purple-600 text-white p-3 rounded-lg">Send Reset Link</button>
        </form>

        {message && <p className="text-center text-sm text-gray-500 mt-4">{message}</p>}
        
        <p className="text-center mt-4 text-sm text-gray-500">
          <Link href="/signin" className="text-purple-500">Back to Login</Link>
        </p>
      </div>
    </div>
  );
}
