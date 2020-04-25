import React from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"

import { BasePage } from "../../../components"

export const obj = {
  title: "Title",
  desc: "Daha büyük ve şık başlıklar",
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
      text: "Title",
      link: "/title"
    }
  ],
  pagination: {
    prev: {
      href: "tag",
      text: "Tag"
    },
    next: {
      href: "tooltip",
      text: "Tooltip"
    }
  }
}

const App = () => {
  return (
    <BasePage info={obj} />
  )
}

export default App