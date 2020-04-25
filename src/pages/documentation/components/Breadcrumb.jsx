import React from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"

import { BasePage } from "../../../components"

export const obj = {
  title: "Breadcrumb",
  desc: "Navigasyon deneyiminizi geliştirmek için basit bir sayfa konumu bileşeni",
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
      text: "Breadcrumb",
      link: "/breadcrumb"
    }
  ],
  pagination: {
    prev: {
      href: "/docs/components",
      text: "Bileşenler"
    },
    next: {
      href: "card",
      text: "Card"
    }
  }
}

const App = () => {
  return (
    <BasePage info={obj} />
  )
}

export default App