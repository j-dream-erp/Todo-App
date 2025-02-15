import React, { useState } from 'react';

const WaitingList = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add the logic to handle the email submission, e.g., sending it to an API.
    setMessage(`Thank you for signing up with ${email}!`);
    setEmail(''); // Clear the input field
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:30px_30px] pointer-events-none"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-1/2 h-1/2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full filter blur-3xl opacity-20 animate-blob"></div>
        <div className="w-1/2 h-1/2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="w-1/2 h-1/2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      <header className="py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">Join the Waiting List</h1>
        <p className="text-xl sm:text-2xl font-medium text-green-100">Be the first to know when we launch!</p>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="sr-only">Sign Up</h2>
        <div className="mt-8 flex justify-center">
          <form className="w-full max-w-md" onSubmit={handleSubmit}>
            <div className="flex items-center border-b border-teal-500 py-2">
              <input
                className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="email"
                placeholder="Enter your email"
                aria-label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                type="submit"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>

        {message && <div className="mt-4 text-center text-green-200">{message}</div>}

        <div className="mt-12 text-center">
          <p className="text-base text-gray-200">We respect your privacy. Unsubscribe at any time.</p>
        </div>
      </main>

      <footer className="bg-green-800 py-8 px-4 sm:px-6 lg:px-8">
        <p className="text-center text-base text-green-200">&copy; 2023 Waiting List. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default WaitingList;