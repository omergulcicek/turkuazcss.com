import React from "react"

import { BasePage } from "../../../components"

export const obj = {
  title: "Select",
  desc: "Tarayıcının varsayılan açılır menüsü yeniden tasarlandı",
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
      text: "Select",
      link: "/select"
    }
  ],
  pagination: {
    prev: {
      href: "textarea",
      text: "Textarea"
    },
    next: {
      href: "checkbox",
      text: "Checkbox"
    }
  }
}

const App = () => {
  return (
    <BasePage info={obj} />
  )
}

export default App