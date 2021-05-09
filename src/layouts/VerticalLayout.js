import React, { PureComponent } from "react";
import classnames from "classnames";
import Sidebar from "./components/menu/menu";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";

class VerticalLayout extends PureComponent {
  state = {
    width: window.innerWidth,
    currRoute: this.props.location.pathname
  };
  collapsedPaths = [];
  mounted = false;
  updateWidth = () => {
    if (this.mounted) {
      this.setState(prevState => ({
        width: window.innerWidth
      }));
    }
  };

  componentDidMount() {
    this.mounted = true;
    let {
      location: { pathname },
    } = this.props;

    if (this.mounted) {
      if (window !== "undefined") {
        window.addEventListener("resize", this.updateWidth, false);
      }
      if (this.collapsedPaths.includes(pathname)) {
        this.props.collapseSidebar(true);
      }

      let layout = 'dark';
      return layout === "dark"
        ? document.body.classList.add("dark-layout")
        : layout === "semi-dark"
        ? document.body.classList.add("semi-dark-layout")
        : null;
    }
  }

  componentDidUpdate(prevProps, prevState) {}

  handleCollapsedMenuPaths = item => {};

  toggleSidebarMenu = val => {};

  sidebarMenuHover = val => {};

  handleSidebarVisibility = () => {
    if (this.mounted) {
      if (window !== undefined) {
        window.addEventListener("resize", () => {
          if (this.state.sidebarHidden) {
            this.setState({
              sidebarHidden: !this.state.sidebarHidden
            });
          }
        });
      }
      this.setState({
        sidebarHidden: !this.state.sidebarHidden
      });
    }
  };

  componentWillUnmount() {
    this.mounted = false;
  }

  handleCurrentLanguage = lang => {};

  handleAppOverlay = value => {
    if (value.length > 0) {
      this.setState({
        appOverlay: true
      });
    } else if (value.length < 0 || value === "") {
      this.setState({
        appOverlay: false
      });
    }
  };

  handleAppOverlayClick = () => {
    this.setState({
      appOverlay: false
    });
  };

  render() {
    //let appProps = this.props.app.customizer;
    let menuThemeArr = [
      "primary",
      "success",
      "danger",
      "info",
      "warning",
      "dark"
    ];
    let sidebarProps = {
      toggleSidebarMenu: this.props.collapseSidebar,
      toggle: this.toggleSidebarMenu,
      sidebarState: this.state.sidebarState,
      sidebarHover: this.sidebarMenuHover,
      sidebarVisibility: this.handleSidebarVisibility,
      visibilityState: this.state.sidebarHidden,
      activePath: this.props.match.path,
      collapsedMenuPaths: this.handleCollapsedMenuPaths,
      currentLang: this.state.currentLang,
      //activeTheme: appProps.menuTheme,
      collapsed: this.state.collapsedContent,
      permission: this.props.permission,
      deviceWidth: this.state.width
    };
    let navbarProps = {
      toggleSidebarMenu: this.toggleSidebarMenu,
      sidebarState: this.state.sidebarState,
      sidebarVisibility: this.handleSidebarVisibility,
      currentLang: this.state.currentLang,
      changeCurrentLang: this.handleCurrentLanguage,
      handleAppOverlay: this.handleAppOverlay,
      appOverlayState: this.state.appOverlay,
      //navbarColor: appProps.navbarColor,
      //navbarType: appProps.navbarType
    };

    let footerProps = {
      //footerType: appProps.footerType,
      //hideScrollToTop: appProps.hideScrollToTop
    };

    let customizerProps = {
      customizerState: this.state.customizer,
      handleCustomizer: this.handleCustomizer,
      changeMode: this.props.changeMode,
      changeNavbar: this.props.changeNavbarColor,
      changeNavbarType: this.props.changeNavbarType,
      changeFooterType: this.props.changeFooterType,
      changeMenuTheme: this.props.changeMenuColor,
      collapseSidebar: this.props.collapseSidebar,
      hideScrollToTop: this.props.hideScrollToTop,
      //activeMode: appProps.theme,
      //activeNavbar: appProps.navbarColor,
      //navbarType: appProps.navbarType,
      //footerType: appProps.footerType,
      //menuTheme: appProps.menuTheme,
      //scrollToTop: appProps.hideScrollToTop,
      //sidebarState: appProps.sidebarCollapsed
    };
    return (
      <div
        className={classnames(
          `wrapper vertical-layout theme`,
          {
            "menu-collapsed":
              this.state.collapsedContent === true && this.state.width >= 1200,
            /*"fixed-footer": appProps.footerType === "sticky",
            "navbar-static": appProps.navbarType === "static",
            "navbar-sticky": appProps.navbarType === "sticky",
            "navbar-floating": appProps.navbarType === "floating",
            "navbar-hidden": appProps.navbarType === "hidden",
            "theme-primary": !menuThemeArr.includes(appProps.menuTheme)*/
          }
        )}
      >
        <Sidebar {...sidebarProps} />
        <div
          className={classnames("app-content content", {
            "show-overlay": this.state.appOverlay === true
          })}
          onClick={this.handleAppOverlayClick}
        >
          <Navbar {...navbarProps} />
          <div className="content-wrapper">{this.props.children}</div>
        </div>

        <Footer {...footerProps} />
        <div
          className="sidenav-overlay"
          onClick={this.handleSidebarVisibility}
        />
      </div>
    );
  }
}
export default (VerticalLayout);
