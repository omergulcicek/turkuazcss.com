import React from "react"

import { BasePage } from "../../../components"

export const obj = {
  title: "Delete",
  desc: "Her yerde kullanabileceğin çarpı işareti",
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
      text: "Delete",
      link: "/delete"
    }
  ],
  pagination: {
    prev: {
      href: "button",
      text: "Button"
    },
    next: {
      href: "divider",
      text: "Divider"
    }
  }
}

const App = () => {
  return (
    <BasePage info={obj} />
  )
}

export default App