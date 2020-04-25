import React from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"

import { BasePage } from "../../../components"

export const obj = {
  title: "Checkbox",
  desc: "Kullanıcıya çeşitli seçenekleri seçtirin",
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
      text: "Form",
      link: "/form"
    },
    {
      text: "Checkbox",
      link: "/checkbox"
    }
  ],
  pagination: {
    prev: {
      href: "select",
      text: "Select"
    },
    next: {
      href: "radio",
      text: "Radio"
    }
  }
}

const App = () => {
  return (
    <BasePage info={obj} />
  )
}

export default App