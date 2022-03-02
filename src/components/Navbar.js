import React from "react";
import { Link } from "gatsby";

const Navbar = ({ hideNavbar, setHideNavbar }) => {
  const defaultMobile =
    "font-space text-lg fixed w-48 h-full pl-8 pt-8 z-40 left-0 inset-y-0 flex flex-col items-start space-y-6  shadow bg-slate-900 text-orange-50";
  const mdScreen =
    "md:flex md:px-4 md:pt-0 md:flex-row md:items-center md:space-y-0 md:space-x-4 md:justify-end md:h-10 md:w-full";
  const visibleStyle = defaultMobile + " " + mdScreen;
  const hiddenStyle = visibleStyle + " hidden";

  const handleClick = () => {
    setHideNavbar(true);
  };

  return (
    <nav className={hideNavbar ? hiddenStyle : visibleStyle}>
      <span className="mr-auto hidden md:block">Antti Hiltunen</span>

      <Link onClick={handleClick} activeClassName="text-orange-300" to="/">
        Home
      </Link>
      <Link onClick={handleClick} activeClassName="text-orange-300" to="/about">
        About Me
      </Link>

      <Link
        onClick={handleClick}
        activeClassName="text-orange-300"
        to="/projects"
      >
        Projects
      </Link>
    </nav>
  );
};

export default Navbar;
