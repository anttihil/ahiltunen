import React from "react";

const MobileHeader = ({ setHideNavbar }) => {
  const handleClick = () => {
    setHideNavbar((value) => !value);
  };

  return (
    <header className="md:hidden flex items-center font-serif bg-slate-900 text-white">
      <button
        onClick={handleClick}
        className="mr-auto p-2 bg-gray-400 text-black"
      >
        Menu
      </button>
      <div className="mr-4">Antti Hiltunen</div>
    </header>
  );
};

export default MobileHeader;
