import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="mb-14 px-4 lg:px-0 sticky top-0 bg-zinc-900 z-40">
      <div className="border-b-2 border-zinc-500 py-5 lg:py-6">
        <div className="flex justify-between items-center">
          <Link href="/"><div className="text-2xl text-zinc-300 font-bold tracking-tight">Eden<span className="text-[#7bbb29] font-bold">Hack</span> <span className="text-[#fffc00] italic text-sm">Snapchat</span></div></Link>
          <div className="hidden md:block">
            <ul className="flex justify-center items-center gap-6">
              <li>
                <Link href="/" className="text-lg text-white font-semibold">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/" className="text-lg text-white font-semibold">
                  Fonctionnalités
                </Link>
              </li>
              <li>
                <Link href="/" className="text-lg text-white font-semibold">
                  Open Source
                </Link>
              </li>
              <li>
                <Link href="/" className="text-lg text-white font-semibold">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/" className="text-lg text-white font-semibold">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;