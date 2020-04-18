import React from "react"

import { BasePage } from "../../../components"

export const obj = {
  title: "Table",
  desc: "Basit ve farklı seçenekler ile özelleştirilmiş HTML tablo elementi",
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
      text: "Table",
      link: "/table"
    }
  ],
  pagination: {
    prev: {
      href: "progress",
      text: "Progress"
    },
    next: {
      href: "tag",
      text: "Tag"
    }
  }
}

const App = () => {
  return (
    <BasePage info={obj} />
  )
}

export default App