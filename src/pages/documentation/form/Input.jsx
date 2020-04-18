import React from "react"

import { BasePage } from "../../../components"

export const obj = {
  title: "Input",
  desc: "Metin giriş alanı ve çeşitleri",
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
      text: "Input",
      link: "/input"
    }
  ],
  pagination: {
    prev: {
      href: "/docs/form",
      text: "Form"
    },
    next: {
      href: "textarea",
      text: "Textarea"
    }
  }
}

const App = () => {
  return (
    <BasePage info={obj} />
  )
}

export default App