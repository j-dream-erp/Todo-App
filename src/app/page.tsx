'use client';

import { useState } from "react";
import Image from "next/image";
// import Link from "next/link"; // Commented out

export default function Home() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Thank you for signing up, ${email}!`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div className="text-center p-10">
        <h1 className="text-6xl font-extrabold mb-4">Welcome to Todo-App</h1>
        <p className="text-xl mb-8">Your one-stop solution for managing tasks efficiently.</p>
        <form onSubmit={handleSubmit} className="flex justify-center mb-8">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 rounded-l-md w-1/3"
            required
          />
          <button type="submit" className="p-3 bg-white text-black rounded-r-md hover:bg-gray-200">
            Join the Waiting List
          </button>
        </form>
        <p className="mt-4">Be the first to know about our next-generation Todo App!</p>
      </div>
      <div className="flex flex-col items-center">
        <Image
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <p className="mt-4 text-sm">Built by <span className="font-bold">Copernic.ai</span></p>
      </div>
      <footer className="absolute bottom-0 mb-4">
        <p className="text-sm">Built with ❤️ using Next.js</p>
      </footer>
    </div>
  );
}