import React from "react";
import SideBar from "./components/menu/menu";
import Footer from "./components/footer/footer";
const HorizontalLayout = ({ children }) => {
  return (
    <main className="main-app-body">
      <div className="d-flex align-items-stretch">
        <SideBar />
        <div className="content-wrapper">
          {children}
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default HorizontalLayout;
