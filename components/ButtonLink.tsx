interface ButtonLinkProps {
  href?: string;
  children: React.ReactNode;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({ href, children }) => {
  return (
    <a
      href={href}
      className="px-4 py-2 w-full sm:w-fit rounded-full mr-4 bg-white hover:bg-slate-200 bg-gradient-to-br from-blue-500 via-green-500 to-yellow-500 text-white inline-block text-center">
      {children}
    </a>
  );
};
export default ButtonLink;