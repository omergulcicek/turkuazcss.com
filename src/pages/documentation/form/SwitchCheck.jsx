import React from "react"

import { BasePage } from "../../../components"

export const obj = {
  title: "Switch",
  desc: "Sadece iki seçeneği bulunan özelleştirilmiş bir checkbox",
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
      text: "Switch",
      link: "/switch"
    }
  ],
  pagination: {
    prev: {
      href: "radio",
      text: "Radio"
    },
    next: {
      href: "/docs/elements",
      text: "Elementler"
    }
  }
}

const App = () => {
  return (
    <BasePage info={obj} />
  )
}

export default App