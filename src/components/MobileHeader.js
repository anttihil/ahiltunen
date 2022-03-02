import React from "react";

const MobileHeader = ({ setHideNavbar }) => {
  const handleClick = () => {
    setHideNavbar((value) => !value);
  };

  return (
    <header className="md:hidden z-20 fixed inset-x-0 top-0 h-10 flex items-center font-space text-lg bg-slate-900 text-orange-50">
      <i
        onClick={handleClick}
        className="icon-menu mr-auto text-2xl p-3  text-orange-50"
      />
      <div className="mr-6">Antti Hiltunen</div>
    </header>
  );
};

export default MobileHeader;
