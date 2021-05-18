import React from "react";
import themeConfig from "../configs/themeConfig";
import classnames from "classnames";
import Footer from "./components/footer/footer";
import Header from './components/header/header'
const FullPageLayout = ({ children, ...rest }) => {
  return (
    <div
      className={classnames(
        "full-layout wrapper bg-full-screen-image blank-page dark-layout",
        {
          "layout-dark": themeConfig.layoutDark,
        }
      )}
    >
      <div className="app-content">
        <div className="content-wrapper">
          <div className="content-body">
            <div className="flexbox-container">
              <Header/>
              <main className="main w-100 h-100">{children}</main>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FullPageLayout;
