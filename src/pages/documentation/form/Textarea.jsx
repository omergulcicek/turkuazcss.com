import React from "react"

import { BasePage } from "../../../components"

export const obj = {
  title: "Textarea",
  desc: "Çok satırlı metin giriş alanı ve çeşitleri",
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
      text: "Textarea",
      link: "/textarea"
    }
  ],
  pagination: {
    prev: {
      href: "input",
      text: "Input"
    },
    next: {
      href: "select",
      text: "Select"
    }
  }
}

const App = () => {
  return (
    <BasePage info={obj} />
  )
}

export default App