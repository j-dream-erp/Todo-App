import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:gap-20 bg-blue-100">
      <Image
        className="dark:invert"
        src="/next.svg"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />
      <ol className="list-inside list-decimal text-left text-sm text-gray-500">
        <li className="mb-2">
          Get started by editing {" "}
          <code className="bg-black/[.05] dark:bg-white/[.05] p-1">src/app/page.tsx</code>
        </li>
        <li>
          Save and see your changes instantly.
        </li>
      </ol>
      <div className="flex gap-4 items-center">
        <a
          className="rounded-full border border-solid border-gray-300 hover:border-gray-400"
          href="https://vercel.com/templates/nextjs"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            width={100}
            height={24}
            priority
          />
        </a>
      </div>
    </div>
  );
}