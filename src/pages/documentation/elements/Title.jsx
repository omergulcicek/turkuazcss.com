import React from "react"

import { BasePage } from "../../../components"

export const obj = {
  title: "Title",
  desc: "",
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
      text: "Title",
      link: "/title"
    }
  ],
  pagination: {
    prev: {
      href: "tag",
      text: "Tag"
    },
    next: {
      href: "tooltip",
      text: "Tooltip"
    }
  }
}

const App = () => {
  return (
    <BasePage info={obj} />
  )
}

export default App