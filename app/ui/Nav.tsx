"use client";
import { useEffect, useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { RiCloseFill } from "react-icons/ri";
import Link from "next/link";
function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="nav">
      {/* <img src={logo} className="logo" /> */}
      <Link href="/">
        <p className="font-bold">GLS</p>
      </Link>

      <div
        className={`InnerNav ${
          open
            ? "top-0 opacity-100"
            : "top-[-1000%] lg:opacity-100 pointer-events-none md:pointer-events-auto opacity-0"
        }`}
        onClick={() => setOpen(!open)}
      >
        <Link className="NavLinks" href="#home">
          Home
        </Link>
        <Link className="NavLinks" href="#about">
          About
        </Link>
        <Link className="NavLinks" href="#service">
          Service
        </Link>
        <Link className="NavLinks" href="#testimonial">
          Testimonial
        </Link>

        <Link className="NavLinks" href="/signup">
          SignUp
        </Link>
        <Link className="NavLinks" href="/login">
          Login
        </Link>
      </div>

      <button className="menu" onClick={() => setOpen(!open)}>
        {open ? <RiCloseFill /> : <HiOutlineMenuAlt3 />}
      </button>
    </nav>
  );
}

export default Nav;
