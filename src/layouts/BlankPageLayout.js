import React from "react"
import themeConfig from "../configs/themeConfig"
import classnames from "classnames"

const BlankLayout = ({ children, ...rest }) => {
  return (
    <pre>{children}</pre>
  )
}

export default BlankLayout
