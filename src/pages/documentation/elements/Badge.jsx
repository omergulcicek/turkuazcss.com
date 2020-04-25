import React from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"

import { BasePage } from "../../../components"

export const obj = {
  title: "Badge",
  desc: "Minik uyarılar için geliştirilmiş rozetler",
  breadcrumb: [
    {
      text: "Ana Sayfa",
      link: "/"
    },
    {
      text: "Dokümantasyon",
      link: "/docs"
    },
    {
      text: "Elementler",
      link: "/elements"
    },
    {
      text: "Badge",
      link: "/badge"
    }
  ],
  pagination: {
    prev: {
      href: "/docs/elements",
      text: "Elementler"
    },
    next: {
      href: "box",
      text: "Box"
    }
  }
}

const App = () => {
  return (
    <BasePage info={obj} />
  )
}

export default App