import React from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"

import { BasePage } from "../../../components"

export const obj = {
  title: "Kart",
  desc: "Her yönüyle esnek ve özelleştirilebilir kart bileşenleri",
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
      text: "Kart",
      link: "/card"
    }
  ],
  pagination: {
    prev: {
      href: "breadcrumb",
      text: "Breadcrumb"
    },
    next: {
      href: "dropdown",
      text: "Dropdown"
    }
  }
}

const App = () => {
  return (
    <BasePage info={obj} />
  )
}

export default App