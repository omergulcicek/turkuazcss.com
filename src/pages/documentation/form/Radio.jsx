import React from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"

import { BasePage } from "../../../components"

export const obj = {
  title: "Radio",
  desc: "Kullanıcının seçeneklerden yalnızca birini seçtirin",
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
      text: "Radio",
      link: "/radio"
    }
  ],
  pagination: {
    prev: {
      href: "checkbox",
      text: "Checkbox"
    },
    next: {
      href: "switch",
      text: "Switch"
    }
  }
}

const App = () => {
  return (
    <BasePage info={obj} />
  )
}

export default App