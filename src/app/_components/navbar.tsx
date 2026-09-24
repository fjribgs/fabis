"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Menu } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Beranda", href: "/"},
    { label: "Tentang Kami", href: "#"},
    { label: "PPDB", href:"#"},
    { label: "Lokasi", href:"#"}
  ]

  return (
    <nav className="fixed w-screen px-16 max-md:px-4 py-4 max-md:py-2.5 flex justify-between items-center bg-white shadow-sm">
        <Link href={"/"}>
          <Image
            src="/logo-fabis-with-text.jpg"
            width={200}
            height={200}
            alt=""
          />
        </Link>

        <div className="absolute gap-3 text-md font-medium flex left-1/2 -translate-x-1/2 text-dark-greenblue max-md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-bricolage hover:font-bold duration-200 transition-all">
                {item.label}
            </Link>
          ))}
        </div>

        <div className="max-md:hidden">
          <Link href={"#"}
          className="flex gap-2 font-bricolage bg-dark-greenblue text-lg text-white px-8 py-2.5 rounded-[999] 
          inset-shadow-red-100 cursor-pointer hover:bg-greenblue duration-200 transition-all">
            Contact
            <ArrowUpRight />
          </Link>
        </div>

        {isOpen && (
          <div className="absolute top-18 py-8 flex flex-col w-full items-end right-0 px-4 text-2xl text-dark-greenblue 
          font-medium gap-3.5 bg-white">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-bricolage hover:font-bold duration-200 transition-all">
                  {item.label}
              </Link>
            ))}
            <Link href={"#"}
            className="flex gap-2 mt-2 font-bricolage bg-dark-greenblue text-xl text-white px-8 py-2.5 rounded-[999] 
            inset-shadow-red-100 cursor-pointer hover:bg-greenblue duration-200 transition-all">
              Contact
              <ArrowUpRight />
            </Link>
          </div>
        )}

        <button onClick={() => setIsOpen(!isOpen)}
          className="hidden max-md:block">
          <Menu />
        </button>
      </nav>
  )
}