import React from "react";
import SideBar from "./components/menu/menu";
import Footer from "./components/footer/footer";
const HorizontalLayout = ({ children }) => {
  return (
    <section className="main-app-body">
      <div className="d-flex align-items-stretch">
        <SideBar />
        <div className="content-wrapper">
          <div className="app-wrapper-content">{children}</div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default HorizontalLayout;
