import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav>
      <p id="logo">My App</p>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
    </nav>
  );
}

export default Navbar;
