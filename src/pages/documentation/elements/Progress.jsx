import React from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"

import { BasePage } from "../../../components"

export const obj = {
  title: "Progress Bar",
  desc: "Sade ve şık ilerleme çubukları",
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
      text: "Progress Bar",
      link: "/progress"
    }
  ],
  pagination: {
    prev: {
      href: "Overlay",
      text: "Overlay"
    },
    next: {
      href: "table",
      text: "Table"
    }
  }
}

const App = () => {
  return (
    <BasePage info={obj} />
  )
}

export default App