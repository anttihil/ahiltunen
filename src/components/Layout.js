import React, { StrictMode } from "react";
import MobileHeader from "./MobileHeader";
import Navbar from "./Navbar";
import NavOverlay from "./NavOverlay";
import { useState } from "react";

const Layout = ({ children }) => {
  const [hideNavbar, setHideNavbar] = useState(true);

  return (
    <StrictMode>
      <div className="min-h-screen flex-col">
        <MobileHeader setHideNavbar={setHideNavbar} />
        <div className="flex flex-col flex-1 items-center">
          <Navbar hideNavbar={hideNavbar} setHideNavbar={setHideNavbar} />
          <NavOverlay setHideNavbar={setHideNavbar} hideNavbar={hideNavbar} />
          <main className="font-sans bg-slate-200 text-black">{children}</main>
        </div>
      </div>
    </StrictMode>
  );
};

export default Layout;
