import React from "react"
import { navigate } from "gatsby"

const NotFoundPage = () => {
  if (typeof window !== "undefined") {
    window.location = "/"
  }

  return null
}

export default NotFoundPage
