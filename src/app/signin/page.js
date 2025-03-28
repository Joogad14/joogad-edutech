"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; 
import Link from "next/link";
import Navbar from "@/components/Navbar"; 


export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ 
    email: "",
    password: "" 
  })

  const handleChange = (e) => {
    setFormData({
      ...formData, 
      [e.target.id]: e.target.value 
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Signup failed: ${errorText}`);
      }
  
      const data = await response.json()
      console.log("Server response:", data)
  
      if (response.ok) {
        router.push("/success")
      } else {
        console.error("Signup failed:", data.message || "Unknown error");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  
  

  return (
    <>
    <Navbar />
    <div className="flex flex-col md:flex-row items-center justify-center my-5 min-h-screen bg-gray-100 p-4">
      <div className="w-full md:w-1/2 h-screen flex items-center justify-center p-4">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/joogad-chat.appspot.com/o/10161832-removebg-preview.png?alt=media&token=0392d20e-5a0b-4e88-8c84-6bd83f13751f" 
          alt="Login"
          className="w-full h-[80vh] object-contain"
        />
      </div>

      <div className="bg-white p-8 rounded-lg shadow-lg w-full md:w-1/3">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-4">Sign In</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          
          <div className="relative">
            <input type="email" id="email" onChange={handleChange} className="peer w-full border border-gray-300 rounded-md px-4 pt-5 pb-2 text-black focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500" placeholder=" "/>
            <label htmlFor="email" className="absolute left-4 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-purple-500">Email</label>
          </div>

          <div className="relative">
            <input type="password" id="password" onChange={handleChange} className="peer w-full border border-gray-300 rounded-md px-4 pt-5 pb-2 text-black focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500" placeholder=" "/>
            <label htmlFor="password" className="absolute left-4 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-purple-500">Password</label>
          </div>

          <button type="submit" className="w-full bg-purple-600 text-white p-3 rounded-lg">Log In</button>
        </form>

        <p className="text-center mt-4 text-sm text-gray-500">
          <Link href="/forgotPassword" className="text-purple-500">Forgot Password? Click Here</Link>
        </p>

        <div className="text-center my-4 text-gray-500">Other sign-up options</div>
      <div className="flex justify-center space-x-4">
      <button className="w-full cursor-pointer flex items-center justify-center bg-white border border-gray-400 text-gray-700 py-3 rounded-lg mb-3">
          <img 
          src="https://firebasestorage.googleapis.com/v0/b/joogad-chat.appspot.com/o/download%20(9).png?alt=media&token=a80211c2-7d78-406a-bfe2-9b737075fed0" 
          alt="google" 
          className="w-6 h-6" 
          />
      </button>

      <button className="w-full cursor-pointer flex items-center justify-center bg-white border border-gray-400 text-gray-700 py-3 rounded-lg  mb-3">
          <img 
          src="https://firebasestorage.googleapis.com/v0/b/joogad-chat.appspot.com/o/download%20(10).png?alt=media&token=0e9c2277-5850-4310-b04c-b48594818659" 
          alt="facebook" 
          className="w-6 h-6" 
          />
      </button>

      <button className="w-full cursor-pointer flex items-center justify-center bg-white border border-gray-400 text-gray-700 py-3 rounded-lg  mb-3">
          <img 
          src="https://firebasestorage.googleapis.com/v0/b/joogad-chat.appspot.com/o/download%20(11).png?alt=media&token=b6e7c79e-e464-41ec-8bc8-29a426263e93" 
          alt="tiktok" 
          className="w-6 h-6" 
          />
      </button>
      </div>
      <p className="text-center mt-4 text-sm text-gray-500">
        Don't have an account? 
        <Link href="/signup" className="text-purple-500 font-semibold">Click here</Link>
     </p>

      </div>
    </div>
    </>
  );
}
