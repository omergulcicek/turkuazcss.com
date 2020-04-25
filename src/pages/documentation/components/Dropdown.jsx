import React from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"

import { BasePage } from "../../../components"

export const obj = {
  title: "Dropdown",
  desc: "Etkileşimli bir açılır menü",
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
      text: "Bileşenler",
      link: "/components"
    },
    {
      text: "Dropdown",
      link: "/dropdown"
    }
  ],
  pagination: {
    prev: {
      href: "card",
      text: "Card"
    },
    next: {
      href: "footer",
      text: "Footer"
    }
  }
}

const App = () => {
  return (
    <BasePage info={obj} />
  )
}

export default App