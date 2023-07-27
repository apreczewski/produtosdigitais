"use client"

import Image from 'next/image';
import { useState, useEffect } from 'react';
import logo from '@assets/images/fitFlavors-0.png';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200 ) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  })

  let navbarClasses = ['fixed top-0 w-full z-10 transition-all duration-500 ease-in-out'];
  if (isScrolled) {
    navbarClasses.push('bg-white bg-opacity-50 shadow-md');
  }

  return (
    <header className={navbarClasses.join(" ")}>
      <nav className="flex items-center justify-between p-5">
        <div className="flex items-center space-x-2">
          {/* Aqui você pode adicionar o logo */}
          <Image src={logo} alt="Logo" className="w-14 h-14" width={100} height={100} />
          {/* <span className="text-2xl font-bold">Seu Produto</span> */}
        </div>
        {/* <div>
          <a href="#features" className="px-4">Recursos</a>
          <a href="#pricing" className="px-4">Preços</a>
          <a href="#contact" className="px-4">Contato</a>
        </div> */}
      </nav>
    </header>
  );
}
