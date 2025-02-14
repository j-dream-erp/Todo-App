import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <h1 className="text-5xl font-bold mb-4">Welcome to Todo-App</h1>
      <p className="text-lg mb-8">Your one-stop solution for managing tasks efficiently.</p>
      <Image
        src="/next.svg"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />
      <Link href="/tasks">
        <a className="mt-4 px-6 py-2 bg-white text-blue-500 rounded-full hover:bg-gray-200 transition">Get Started</a>
      </Link>
      <footer className="absolute bottom-0 mb-4">
        <p className="text-sm">Built with ❤️ using Next.js</p>
      </footer>
    </div>
  );
}