import React from "react"

import { BasePage } from "../../../components"

export const obj = {
  title: "Tooltip",
  desc: "Üzerine gelindiğinde görünebilen farklı konumlardaki kısa yazılar",
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
      text: "Tooltip",
      link: "/tooltip"
    }
  ],
  pagination: {
    prev: {
      href: "title",
      text: "Title"
    },
    next: {
      href: "/docs/components",
      text: "Bileşenler"
    }
  }
}

const App = () => {
  return (
    <BasePage info={obj} />
  )
}

export default App