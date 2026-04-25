"use client";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { IoMoon } from "react-icons/io5";
import { MdSunny } from "react-icons/md";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="no-btn p-2 rounded-full border-2 border-white border-dashed cursor-pointer"
    >
      {theme === "dark" ? <MdSunny size={25} /> : <IoMoon size={25} />}
    </button>
  );
};

export default ThemeSwitcher;
