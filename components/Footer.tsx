const Footer = () => {
  return (
    <footer aria-label="Developer Information" className="m-5 p-1 text-md">
      <div className="flex flex-row justify-between">
        <p>
          built by:{" "}
          <a
            href="https://github.com/kimmykokonut"
            className="hover:text-green-600"
          >
            kimmykokonut
          </a>
        </p>
        <a
          href="https://github.com/kimmykokonut/kim-robinson"
          className="hover:text-green-600"
        >
          Source Code
        </a>
      </div>
    </footer>
  );
};
export default Footer;
