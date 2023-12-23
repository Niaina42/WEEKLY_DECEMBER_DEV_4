import React from "react";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";

const Layout = ({ children }) => {
  return (
    <main>
      <Header />
      <Sidebar>{children}</Sidebar>
    </main>
  )
};

export default Layout;