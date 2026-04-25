"use client";

import { useState } from "react";
import Link from "next/link";
import { headerItems, ThemeSwitcher } from "../exports";
import { Sansita_Swashed } from "next/font/google";
import { FiMenu, FiX } from "react-icons/fi";

const sansita = Sansita_Swashed({
  subsets: ["latin"],
  weight: ["400"],
});

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className={`my-bg ${sansita.className}`}>
      <div className="mx-auto text-white max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="text-4xl hover:text-[#941600]/75 transition duration-300"
          >
            Hayani
          </Link>

          <div className="hidden md:flex items-center gap-4">
            <nav>
              <ul className="flex items-center gap-4">
                {headerItems.map(({ text, link }) => (
                  <li key={text}>
                    <Link href={`/${link}`}>{text}</Link>
                  </li>
                ))}
              </ul>
            </nav>

            <ThemeSwitcher />
          </div>

          <div
            onClick={() => setOpen(!open)}
            className="z-50 md:hidden rounded-full p-2 cursor-pointer border-2 border-dashed"
          >
            {open ? <FiX size={25} /> : <FiMenu size={25} />}
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden text-center bg-slate-100 dark:bg-slate-900 border-b my-border absolute top-16 left-0 w-full px-4 py-4 space-y-4">
          {headerItems.map(({ text, link }) => (
            <Link
              key={text}
              href={`/${link}`}
              className="block"
              onClick={() => setOpen(false)}
            >
              {text}
            </Link>
          ))}

          <div>
            <ThemeSwitcher />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
