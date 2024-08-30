import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link href="#home">Home</Link></li>
        <li><Link href="#about">About Me</Link></li>
        <li><Link href="#projects">Projects</Link></li>
        <li><Link href="#skills">Skills</Link></li>
        <li><Link href="#contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;