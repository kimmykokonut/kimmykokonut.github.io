import Link from "next/link";
import { FC } from "react";
import { NavLinkProps } from "@/app/interfaces";

const NavLink: FC<NavLinkProps> = ({ href, title }) => {
  return (
    <Link 
    href={href} 
    className='block py-2 pl-3 pr-4 text-slate-800 dark:text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-black dark:hover:text-white'
    >
      {title}
    </Link>
  );
};
export default NavLink;