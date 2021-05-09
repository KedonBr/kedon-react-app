import React from "react"
import * as Icon from "react-feather"
const navigationConfig = [
  {
    id: "dashboard",
    title: "Dashboard",
    type: "collapse",
    badge: "warning",
    badgeText: "2",
    children: [
      {
        id: "analyticsDash",
        title: "Analytics",
        type: "item",
        //permissions: ["admin", "editor"],
        navLink: "/"
      },
      {
        id: "eCommerceDash",
        title: "eCommerce",
        type: "item",
        //permissions: ["admin"],
        navLink: "/ecommerce-dashboard"
      }
    ]
  },
  {
    type: "groupHeader",
    groupTitle: "APPS"
  },
  {
    id: "email",
    title: "Email",
    type: "item",
    //permissions: ["admin", "editor"],
    navLink: "/email/:filter",
    filterBase: "/email/inbox"
  },
  {
    id: "chat",
    title: "Chat",
    type: "item",
    //permissions: ["admin", "editor"],
    navLink: "/chat"
  },
  {
    id: "todo",
    title: "Todo",
    type: "item",
    //permissions: ["admin", "editor"],
    navLink: "/todo/:filter",
    filterBase: "/todo/all"
  },
  {
    id: "calendar",
    title: "Calendar",
    type: "item",
    //permissions: ["admin", "editor"],
    navLink: "/calendar"
  },
  {
    id: "eCommerce",
    title: "Ecommerce",
    type: "collapse",
    children: [
      {
        id: "shop",
        title: "Shop",
        type: "item",
        //permissions: ["admin", "editor"],
        navLink: "/ecommerce/shop"
      },
      {
        id: "detail",
        title: "Product Detail",
        type: "item",
        //permissions: ["admin", "editor"],
        navLink: "/ecommerce/product-detail"
      },
      {
        id: "wishList",
        title: "Wish List",
        type: "item",
        //permissions: ["admin", "editor"],
        navLink: "/ecommerce/wishlist"
      },
      {
        id: "checkout",
        title: "Checkout",
        type: "item",
        //permissions: ["admin", "editor"],
        navLink: "/ecommerce/checkout"
      }
    ]
  },
  {
    id: "users",
    title: "User",
    type: "collapse",
    children: [
      {
        id: "list",
        title: "List",
        type: "item",
        //permissions: ["admin", "editor"],
        navLink: "/app/user/list"
      },
      {
        id: "view",
        title: "View",
        type: "item",
        //permissions: ["admin", "editor"],
        navLink: "/app/user/view"
      },
      {
        id: "edit",
        title: "Edit",
        type: "item",
        //permissions: ["admin", "editor"],
        navLink: "/app/user/edit"
      }
    ]
  },
  {
    type: "groupHeader",
    groupTitle: "UI ELEMENTS"
  },
  {
    id: "dataList",
    title: "Data List",
    type: "collapse",
    badge: "primary",
    badgeText: "new",
    children: [
      {
        id: "listView",
        title: "List View",
        type: "item",
        //permissions: ["admin", "editor"],
        navLink: "/data-list/list-view"
      },
      {
        id: "thumbView",
        title: "Thumb View",
        type: "item",
        //permissions: ["admin", "editor"],
        navLink: "/data-list/thumb-view"
      }
    ]
  },
  {
    id: "content",
    title: "Content",
    type: "collapse",
    children: [
      {
        id: "gird",
        title: "Grid",
        type: "item",
        //permissions: ["admin", "editor"],
        navLink: "/ui-element/grid"
      },
      {
        id: "typography",
        title: "Typography",
        type: "item",
        //permissions: ["admin", "editor"],
        navLink: "/ui-element/typography"
      },
      {
        id: "textUitlities",
        title: "Text Utilities",
        type: "item",
        //permissions: ["admin", "editor"],
        navLink: "/ui-element/textutilities"
      },
      {
        id: "syntaxHighlighter",
        title: "Syntax Highlighter",
        type: "item",
        //permissions: ["admin", "editor"],
        navLink: "/ui-element/syntaxhighlighter"
      }
    ]
  },
  {
    id: "colors",
    title: "Colors",
    type: "item",
    //permissions: ["admin", "editor"],
    navLink: "/colors/colors"
  },
  {
    id: "icons",
    title: "Icons",
    type: "item",
    //permissions: ["admin", "editor"],
    navLink: "/icons/reactfeather"
  },
  {
    id: "cards",
    title: "Cards",
    type: "collapse",
    children: [
      {
        id: "basic",
        title: "Basic",
        type: "item",
        //permissions: ["admin", "editor"],
        navLink: "/cards/basic"
      },
      {
        id: "statistics",
        title: "Statistics",
        type: "item",
        //permissions: ["admin", "editor"],
        navLink: "/cards/statistics"
      },
      {
        id: "analytics",
        title: "Analytics",
        type: "item",
        //permissions: ["admin", "editor"],
        navLink: "/cards/analytics"
      },
      {
        id: "cardActions",
        title: "Card Actions",
        type: "item",
        //permissions: ["admin", "editor"],
        navLink: "/cards/action"
      }
    ]
  },
  {
    id: "components",
    title: "Components",
    type: "collapse",
    children: [
      {
        id: "alerts",
        title: "Alerts",
        type: "item",
        //permissions: ["admin", "editor"],
        navLink: "/components/alerts"
      },
      {
        id: "buttons",
        title: "Buttons",
        type: "item",
        //permissions: ["admin", "editor"],
        navLink: "/components/buttons"
      },
      {
        id: "breadCrumbs",
        title: "Breadcrumbs",
        type: "item",
        //permissions: ["admin", "editor"],
        navLink: "/components/breadcrumbs"
      },
      {
        id: "carousel",
        title: "Carousel",
        type: "item",
        //permissions: ["admin", "editor"],
        navLink: "/components/carousel"
      },
      {
        id: "collapse",
        title: "Collapse",
        type: "item",
        //permissions: ["admin", "editor"],
        navLink: "/components/collapse"
      },
      {
        id: "dropDowns",
        title: "Dropdowns",
        type: "item",
        //permissions: ["admin", "editor"],
        navLink: "/components/dropdowns"
      },
      {
        id: "listGroup",
        title: "List Group",
        type: "item",
        //permissions: ["admin", "editor"],
        navLink: "/components/list-group"
      },
      {
        id: "modals",
        title: "Modals",
        type: "item",
        //permissions: ["admin", "editor"],
        navLink: "/components/modals"
      },
      {
        id: "pagination",
        title: "Pagination",
        type: "item",
        //permissions: ["admin", "editor"],
        navLink: "/components/pagination"
      },
      {
        id: "navsComponent",
        title: "Navs Component",
        type: "item",
        //permissions: ["admin", "editor"],
        navLink: "/components/nav-component"
      },
      {
        id: "navbar",
        title: "Navbar",
        type: "item",
        //permissions: ["admin", "editor"],
        navLink: "/components/navbar"
      },
      {
        id: "tabsComponent",
        title: "Tabs Component",
        type: "item",
        //permissions: ["admin", "editor"],
        navLink: "/components/tabs-component"
      },
      {
        id: "pillsComponent",
        title: "Pills Component",
        type: "item",
        //permissions: ["admin", "editor"],
        navLink: "/components/pills-component"
      },
      {
        id: "tooltips",
        title: "Tooltips",
        type: "item",
        //permissions: ["admin", "editor"],
        navLink: "/components/tooltips"
      },
      {
        id: "popovers",
        title: "Popovers",
        type: "item",
        //permissions: ["admin", "editor"],
        navLink: "/components/popovers"
      },
      {
        id: "badges",
        title: "Badges",
        type: "item",
        //permissions: ["admin", "editor"],
        navLink: "/components/badges"
      },
      {
        id: "pillBadges",
        title: "Pill Badges",
        type: "item",
        //permissions: ["admin", "editor"],
        navLink: "/components/pill-badges"
      },
      {
        id: "progress",
        title: "Progress",
        type: "item",
        //permissions: ["admin", "editor"],
        navLink: "/components/progress"
      },
      {
        id: "mediaObjects",
        title: "Media Objects",
        type: "item",
        //permissions: ["admin", "editor"],
        navLink: "/components/media-objects"
      },
      {
        id: "spinners",
        title: "Spinners",
        type: "item",
        //permissions: ["admin", "editor"],
        navLink: "/components/spinners"
      },
      {
        id: "toasts",
        title: "Toasts",
        type: "item",
        //permissions: ["admin", "editor"],
        navLink: "/components/toasts"
      }
    ]
  },
  {
    id: "extraComponents",
    title: "Extra Components",
    type: "collapse",
    children: [
      {
        id: "autoComplete",
        title: "Auto Complete",
        type: "item",
        //permissions: ["admin", "editor"],
        navLink: "/extra-components/auto-complete"
      },
      {
        id: "avatar",
        title: "Avatar",
        type: "item",
        //permissions: ["admin", "editor"],
        navLink: "/extra-components/avatar"
      },
      {
        id: "chips",
        title: "Chips",
        type: "item",
        //permissions: ["admin", "editor"],
        navLink: "/extra-components/chips"
      },
      {
        id: "divider",
        title: "Divider",
        type: "item",
        //permissions: ["admin", "editor"],
        navLink: "/extra-components/divider"
      }
    ]
  },
  {
    type: "groupHeader",
    groupTitle: "FORMS & TABLES"
  },
  {
    id: "formElements",
    title: "Form Elements",
    type: "collapse",
    children: [
      {
        id: "select",
        title: "Select",
        type: "item",
        //permissions: ["admin", "editor"],
        navLink: "/forms/elements/select"
      },
      {
        id: "switch",
        title: "Switch",
        type: "item",
        //permissions: ["admin", "editor"],
        navLink: "/forms/elements/switch"
      },
      {
        id: "checkbox",
        title: "Checkbox",
        type: "item",
        //permissions: ["admin", "editor"],
        navLink: "/forms/elements/checkbox"
      },
      {
        id: "radio",
        title: "Radio",
        type: "item",
        //permissions: ["admin", "editor"],
        navLink: "/forms/elements/radio"
      },
      {
        id: "input",
        title: "Input",
        type: "item",
        //permissions: ["admin", "editor"],
        navLink: "/forms/elements/input"
      },
      {
        id: "inputGroup",
        title: "Input Group",
        type: "item",
        //permissions: ["admin", "editor"],
        navLink: "/forms/elements/input-group"
      },
      {
        id: "numberInput",
        title: "Number Input",
        type: "item",
        //permissions: ["admin", "editor"],
        navLink: "/forms/elements/number-input"
      },
      {
        id: "textarea",
        title: "Textarea",
        type: "item",
        //permissions: ["admin", "editor"],
        navLink: "/forms/elements/textarea"
      },
      {
        id: "date_&_timePicker",
        title: "Date & Time Picker",
        type: "item",
        //permissions: ["admin", "editor"],
        navLink: "/forms/elements/pickers"
      },
      {
        id: "inputMask",
        title: "Input Mask",
        type: "item",
        //permissions: ["admin", "editor"],
        navLink: "/forms/elements/input-mask"
      }
    ]
  },
  {
    id: "formLayouts",
    title: "Form Layouts",
    type: "item",
    //permissions: ["admin", "editor"],
    navLink: "/forms/layout/form-layout"
  },
  {
    id: "wizard",
    title: "Form Wizard",
    type: "item",
    //permissions: ["admin", "editor"],
    navLink: "/forms/wizard"
  },
  {
    id: "formik",
    title: "Formik",
    type: "item",
    //permissions: ["admin", "editor"],
    navLink: "/forms/formik"
  },
  {
    id: "tables",
    title: "Tables",
    type: "collapse",
    children: [
      {
        id: "tablesReactstrap",
        title: "Reactstrap Tables",
        type: "item",
        //permissions: ["admin", "editor"],
        navLink: "/tables/reactstrap"
      },
      {
        id: "reactTables",
        title: "React Tables",
        type: "item",
        //permissions: ["admin", "editor"],
        navLink: "/tables/react-tables"
      },
      {
        id: "aggrid",
        title: "agGrid Table",
        type: "item",
        //permissions: ["admin", "editor"],
        navLink: "/tables/agGrid"
      },
      {
        id: "dataTable",
        title: "DataTables",
        type: "item",
        //permissions: ["admin", "editor"],
        navLink: "/tables/data-tables"
      }
    ]
  },
  {
    type: "groupHeader",
    groupTitle: "PAGES"
  },
  {
    id: "profile",
    title: "Profile",
    type: "item",
    //permissions: ["admin", "editor"],
    navLink: "/pages/profile",
    collapsed: true
  },
  {
    id: "accountSettings",
    title: "Account Settings",
    type: "item",
    //permissions: ["admin", "editor"],
    navLink: "/pages/account-settings"
  },
  {
    id: "faq",
    title: "FAQ",
    type: "item",
    //permissions: ["admin", "editor"],
    navLink: "/pages/faq"
  },

  {
    id: "knowledgeBase",
    title: "Knowledge Base",
    type: "item",
    //permissions: ["admin", "editor"],
    navLink: "/pages/knowledge-base",
    parentOf: [
      "/pages/knowledge-base/category/questions",
      "/pages/knowledge-base/category"
    ]
  },
  {
    id: "search",
    title: "Search",
    type: "item",
    //permissions: ["admin", "editor"],
    navLink: "/pages/search"
  },

  {
    id: "invoice",
    title: "Invoice",
    type: "item",
    //permissions: ["admin", "editor"],
    navLink: "/pages/invoice"
  },

  {
    id: "authentication",
    title: "Authentication",
    type: "collapse",
    children: [
      {
        id: "login",
        title: "Login",
        type: "item",
        //permissions: ["admin", "editor"],
        navLink: "/pages/login",
        newTab: true
      },
      {
        id: "register",
        title: "Register",
        type: "item",
        //permissions: ["admin", "editor"],
        navLink: "/pages/register",
        newTab: true
      },
      {
        id: "forgotPassword",
        title: "Forgot Password",
        type: "item",
        //permissions: ["admin", "editor"],
        navLink: "/pages/forgot-password",
        newTab: true
      },
      {
        id: "resetPassword",
        title: "Reset Password",
        type: "item",
        //permissions: ["admin", "editor"],
        navLink: "/pages/reset-password",
        newTab: true
      },
      {
        id: "lockScreen",
        title: "Lock Screen",
        type: "item",
        //permissions: ["admin", "editor"],
        navLink: "/pages/lock-screen",
        newTab: true
      }
    ]
  },
  {
    id: "miscellaneous",
    title: "Miscellaneous",
    type: "collapse",
    children: [
      {
        id: "comingSoon",
        title: "Coming Soon",
        type: "item",
        //permissions: ["admin", "editor"],
        navLink: "/misc/coming-soon",

        newTab: true
      },
      {
        id: "error",
        title: "Error",
        type: "collapse",
        children: [
          {
            id: "404",
            title: "404",
            type: "item",

            //permissions: ["admin", "editor"],
            navLink: "/misc/error/404",

            newTab: true
          },
          {
            id: "500",
            title: "500",
            type: "item",

            //permissions: ["admin", "editor"],
            navLink: "/misc/error/500",

            newTab: true
          }
        ]
      },
      {
        id: "notAuthorized",
        title: "Not Authorized",
        type: "item",
        //permissions: ["admin", "editor"],
        navLink: "/misc/not-authorized",

        newTab: true
      },
      {
        id: "maintenance",
        title: "Maintenance",
        type: "item",
        //permissions: ["admin", "editor"],
        navLink: "/misc/maintenance",

        newTab: true
      }
    ]
  },
  {
    type: "groupHeader",
    groupTitle: "CHARTS & MAPS"
  },
  {
    id: "charts",
    title: "Charts",
    type: "collapse",
    badge: "success",
    badgeText: "3",
    children: [
      {
        id: "apex",
        title: "Apex",
        type: "item",
        //permissions: ["admin", "editor"],
        navLink: "/charts/apex"
      },
      {
        id: "chartJs",
        title: "ChartJS",
        type: "item",
        //permissions: ["admin", "editor"],
        navLink: "/charts/chartjs"
      },
      {
        id: "recharts",
        title: "Recharts",
        type: "item",
        //permissions: ["admin", "editor"],
        navLink: "/charts/recharts"
      }
    ]
  },
  {
    id: "leafletMaps",
    title: "Leaflet Maps",
    type: "item",
    //permissions: ["admin", "editor"],
    navLink: "/maps/leaflet"
  },
  {
    type: "groupHeader",
    groupTitle: "EXTENSIONS"
  },
  {
    id: "sweetAlert",
    title: "Sweet Alerts",
    type: "item",
    //permissions: ["admin", "editor"],
    navLink: "/extensions/sweet-alert"
  },
  {
    id: "toastr",
    title: "Toastr",
    type: "item",
    //permissions: ["admin", "editor"],
    navLink: "/extensions/toastr"
  },
  {
    id: "rcSlider",
    title: "Rc Slider",
    type: "item",
    //permissions: ["admin", "editor"],
    navLink: "/extensions/slider"
  },
  {
    id: "fileUploader",
    title: "File Uploader",
    type: "item",
    //permissions: ["admin", "editor"],
    navLink: "/extensions/file-uploader"
  },
  {
    id: "wysiwygEditor",
    title: "Wysiwyg Editor",
    type: "item",
    //permissions: ["admin", "editor"],
    navLink: "/extensions/wysiwyg-editor"
  },
  {
    id: "drag_&_drop",
    title: "Drag & Drop",
    type: "item",
    //permissions: ["admin", "editor"],
    navLink: "/extensions/drag-and-drop"
  },
  {
    id: "tour",
    title: "Tour",
    type: "item",
    //permissions: ["admin", "editor"],
    navLink: "/extensions/tour"
  },
  {
    id: "clipBoard",
    title: "Clipboard",
    type: "item",
    //permissions: ["admin", "editor"],
    navLink: "/extensions/clipboard"
  },
  {
    id: "contentMenu",
    title: "Context Menu",
    type: "item",
    //permissions: ["admin", "editor"],
    navLink: "/extensions/context-menu"
  },
  {
    id: "swiper",
    title: "Swiper",
    type: "item",
    //permissions: ["admin", "editor"],
    navLink: "/extensions/swiper"
  },
  {
    id: "access-control",
    title: "Access Control",
    type: "item",
    //permissions: ["admin", "editor"],
    navLink: "/extensions/access-control"
  },
  {
    id: "i18n",
    title: "I18n",
    type: "item",
    //permissions: ["admin", "editor"],
    navLink: "/extensions/i18n"
  },
  {
    id: "treeView",
    title: "Tree",
    type: "item",
    //permissions: ["admin", "editor"],
    navLink: "/extensions/tree"
  },
  {
    id: "extPagination",
    title: "Pagination",
    type: "item",
    //permissions: ["admin", "editor"],
    navLink: "/extensions/pagination"
  },
  {
    id: "extImport",
    title: "Import",
    type: "item",
    //permissions: ["admin", "editor"],
    navLink: "/extensions/import"
  },
  {
    id: "extExport",
    title: "Export",
    type: "item",
    //permissions: ["admin", "editor"],
    navLink: "/extensions/export"
  },
  {
    id: "extExportSelected",
    title: "Export Selected",
    type: "item",
    navLink: "/extensions/export-selected",
    //permissions: ["admin", "editor"]
  },
  {
    type: "groupHeader",
    groupTitle: "OTHERS"
  },
  {
    id: "menuLevels",
    title: "Menu Levels",
    type: "collapse",
    children: [
      {
        id: "secondLevel",
        title: "Second Level",
        type: "item",
        //permissions: ["admin", "editor"],
        navlink: ""
      },
      {
        id: "secondLevel1",
        title: "Second Level",
        type: "collapse",

        children: [
          {
            id: "ThirdLevel",
            title: "Third Level",
            type: "item",
            //permissions: ["admin", "editor"],
            navLink: ""
          },
          {
            id: "ThirdLevel1",
            title: "Third Level",
            type: "item",
            //permissions: ["admin", "editor"],
            navLink: ""
          }
        ]
      }
    ]
  },
  {
    id: "disabledMenu",
    title: "Disabled Menu",
    type: "item",
    //permissions: ["admin", "editor"],
    navLink: "#",
    disabled: true
  },
  {
    type: "groupHeader",
    groupTitle: "SUPPORT"
  },
  {
    id: "documentation",
    title: "Documentation",
    type: "external-link",
    //permissions: ["admin", "editor"],
    navLink:
      "https://pixinvent.com/demo/vuexy-react-admin-dashboard-template/documentation"
  },
  {
    id: "raiseSupport",
    title: "Raise Support",
    type: "external-link",
    newTab: true,
    //permissions: ["admin", "editor"],
    navLink: "https://pixinvent.ticksy.com/"
  }
]

export default navigationConfig
