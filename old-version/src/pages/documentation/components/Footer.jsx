import React from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"

import { BasePage } from "../../../components"

export const obj = {
  title: "Footer",
  desc: "Herhangi bir şey içerebilen basit tasarlanmış footer örnekleri",
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
      text: "Footer",
      link: "/footer"
    }
  ],
  editlink: "documentation/components/Footer",
  pagination: {
    prev: {
      href: "dropdown",
      text: "Dropdown"
    },
    next: {
      href: "list",
      text: "List"
    }
  }
}

const App = () => {
  return (
    <BasePage info={obj} />
  )
}

export default App