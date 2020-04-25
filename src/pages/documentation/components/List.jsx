import React from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"

import { BasePage } from "../../../components"

export const obj = {
  title: "Liste",
  desc: "Sade görüntüsü ile linkleri listelemenin kolay yolu",
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
      text: "Liste",
      link: "/list"
    }
  ],
  pagination: {
    prev: {
      href: "footer",
      text: "Footer"
    },
    next: {
      href: "media",
      text: "Media"
    }
  }
}

const App = () => {
  return (
    <BasePage info={obj} />
  )
}

export default App