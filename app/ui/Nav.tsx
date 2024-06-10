"use client";
import { useEffect, useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { RiCloseFill } from "react-icons/ri";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../../public/logo.jpg";
import Image from "next/image";

function Nav() {
  const router = usePathname();
  const isDashboard = router.startsWith("/dashboard");
  const [open, setOpen] = useState(false);

  if (isDashboard) {
    return null;
  }
  return (
    <nav className="nav">
      {/* <img src={logo} className="logo" /> */}
      <Link href="/">
        <Image src={logo} alt="logo" className="w-11 h-11 object-contain"  />
      </Link>

      <div
        className={`InnerNav ${
          open
            ? "top-0 opacity-100"
            : "top-[-1000%] lg:opacity-100 pointer-events-none md:pointer-events-auto opacity-0"
        }`}
        onClick={() => setOpen(!open)}
      >
        <Link className="NavLinks" href="/">
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
          Sign up
        </Link>
        <Link className="NavLinks" href="/login">
          Sign in
        </Link>
      </div>

      <button className="menu" onClick={() => setOpen(!open)}>
        {open ? <RiCloseFill /> : <HiOutlineMenuAlt3 />}
      </button>
    </nav>
  );
}

export default Nav;
