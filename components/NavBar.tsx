"use client";

import Link from 'next/link';
import NavLink from './NavLink';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/16/solid';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import MenuOverlay from './MenuOverlay';
import { NavLinkProps } from '@/app/interfaces';
import { useTheme } from 'next-themes';

const navLinks: NavLinkProps[] = [
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Projects",
    href: "#projects",
  },
  {
    title: "Skills",
    href: "#skills",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <nav className='bg-white dark:bg-[#1e1e1e] bg-opacity-100 fixed top-0 left-0 right-0 z-10'>
      <div className='flex flex-wrap items-center justify-between mx-auto px-4 py-2'>
        <Link href="/" className='text-2xl md:text-5xl text-black dark:text-white font-semibold'>KR</Link>
        <div className='mobile-menu block md:hidden'>
          {!navOpen ? (
            <button
              onClick={() => setNavOpen(true)}
              className='flex items-center px-3 py-2 border rounded border-gray-800 dark:border-slate-200 text-gray-800 dark:text-slate-200 hover:text-black dark:hover:text-white hover:border-black dark:hover:border-white'>
              <Bars3Icon className='h-5 w-5' /></button>
          ) : (
            <button
              onClick={() => setNavOpen(false)}
              className='flex items-center px-3 py-2 border rounded border-gray-800 dark:border-slate-200 text-slate-200 dark:text-slate-200 hover:text-black dark:hover:text-white hover:border-black dark:hover:border-white'>
              <XMarkIcon className='h-5 w-5' /></button>)
          }
        </div>
        <div className='menu hidden md:block md:w-auto' id="navbar">
          <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
            {
              navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink href={link.href} title={link.title} />
                </li>
              ))
            }
          </ul>
        </div>
        <button
          onClick={toggleTheme}
            className='flex items-center px-3 py-2 border rounded border: slate-800 text-black hover:text-yellow-500 hover:border-yellow-500 dark:border-slate-800 dark:text-white dark:hover:text-white dark:hover:border-white'>
              {theme === 'dark' ? <SunIcon className='h-5 w-5' /> : <MoonIcon className='h-5 w-5' /> }
          </button>
      </div>
      {navOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;