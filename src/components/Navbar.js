import React from "react";
import { Link } from "gatsby";

const Navbar = ({ hideNavbar, setHideNavbar }) => {
  const defaultMobile =
    "fixed w-48 h-full pl-8 pt-8 z-20 left-0 inset-y-0 flex flex-col items-start space-y-4 font-serif bg-slate-900 text-white";
  const mdScreen =
    "md:flex md:px-4 md:pt-0 md:flex-row md:items-center md:space-y-0 md:space-x-4 md:z-auto md:justify-end md:h-10 md:w-full";
  const visibleStyle = defaultMobile + " " + mdScreen;
  const hiddenStyle = visibleStyle + " hidden";

  const handleClick = () => {
    setHideNavbar(true);
  };

  return (
    <nav className={hideNavbar ? hiddenStyle : visibleStyle}>
      <span className="mr-auto hidden md:block">Antti Hiltunen</span>

      <Link
        onClick={handleClick}
        activeClassName="text-gray-400"
        to="/background"
      >
        Background
      </Link>

      <Link
        onClick={handleClick}
        activeClassName="text-gray-400"
        to="/portfolio"
      >
        Portfolio
      </Link>

      <Link onClick={handleClick} activeClassName="text-gray-400" to="/contact">
        Contact
      </Link>
    </nav>
  );
};

export default Navbar;
