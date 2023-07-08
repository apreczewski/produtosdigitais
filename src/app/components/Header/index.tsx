"use client";

import React, { useEffect, useState } from "react";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    // Check if window is defined (so if we're on the client-side)
    if (typeof window !== "undefined") {
      const offset = window.scrollY;
      if (offset > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }
  };

  useEffect(() => {
    // Check if window is defined (so if we're on the client-side)
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <nav
      className={`fixed w-full z-10 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="text-2xl text-gray-800 font-bold">Nome do Site</div>
        <div className="space-x-4">
          <a href="/signin" className="text-blue-500 hover:text-blue-400">
            Sign In
          </a>
          <a
            href="/signup"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-400"
          >
            Cadastre-se
          </a>
        </div>
      </div>
    </nav>
  );
};
