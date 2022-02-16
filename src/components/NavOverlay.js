import React, { useCallback, useEffect } from "react";

const NavOverlay = ({ hideNavbar, setHideNavbar }) => {
  console.log(hideNavbar);

  const handleEsc = useCallback(
    (event) => {
      if (event.key === "Escape") {
        console.log("Escape was pressed");
        setHideNavbar(true);
      }
    },
    [setHideNavbar]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleEsc, false);

    return () => {
      window.removeEventListener("keydown", handleEsc, false);
    };
  }, [hideNavbar, handleEsc]);

  const visibleStyle =
    "z-10 fixed md:hidden inset-0 bg-neutral-900 backdrop-blur-sm opacity-50 transition-opacity duration-300";
  const hiddenStyle = visibleStyle + " hidden";
  const handleClick = () => {
    console.log("Clicked on overlay2.");
    setHideNavbar(true);
  };

  return (
    <div
      onClick={handleClick}
      className={hideNavbar ? hiddenStyle : visibleStyle}
    ></div>
  );
};

export default NavOverlay;
