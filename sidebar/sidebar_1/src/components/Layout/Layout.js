import React from "react";
import Sidebar from "../Sidebar/Sidebar.js";
import { SLayout, SMain } from "./styles.js";

const Layout = ({ children }) => {
  return (
    <SLayout>
      <Sidebar />
      <SMain>{children}</SMain>
    </SLayout>
  );
};

export default Layout;