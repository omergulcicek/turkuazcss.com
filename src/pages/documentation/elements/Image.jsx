import React from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"

import { BasePage } from "../../../components"

export const obj = {
  title: "Image",
  desc: "Duyarlı resimler için bir kapsayıcı",
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
      text: "Image",
      link: "/image"
    }
  ],
  pagination: {
    prev: {
      href: "divider",
      text: "Divider"
    },
    next: {
      href: "notification",
      text: "Notification"
    }
  }
}

const App = () => {
  return (
    <BasePage info={obj} />
  )
}

export default App