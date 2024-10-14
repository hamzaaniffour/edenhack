import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="px-4 lg:px-0">
      <div className="bg-zinc-900 text-center border-t-[1px] border-zinc-500 py-6">
        <p className="text-zinc-100 font-normal text-sm">
          Copyright 2024 ©{" "}
          <Link href="/" className="font-semibold text-[#7bbb29]">
            EdenHack
          </Link>
          , Site. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
