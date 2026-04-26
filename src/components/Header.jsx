import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="border-b-2 border-zinc-500 px-4 py-3 flex justify-between items-center">
      <Link href={"/"} className="text-lg font-semibold">
        Dev Story
      </Link>

      <nav className="flex gap-5">
        <Link href={"/tutorials"}>Tutorials</Link>
        <Link href={"/login"}>Login</Link>
        <Link href={"/register"}>Register</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/stories"}>Stories</Link>
      </nav>
    </header>
  );
};

export default Header;
