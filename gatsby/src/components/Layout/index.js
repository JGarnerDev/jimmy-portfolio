import React from "react"
import { graphql } from "gatsby"

import Nav from "../Nav"

const Layout = ({ children }) => {
  return (
    <main>
      <Nav />
      {children}
    </main>
  )
}

export default Layout
