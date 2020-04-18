import React from "react"

import { BasePage } from "../../../components"

export const obj = {
  title: "Önizleme",
  desc: "Tüm Turkuaz öğelerine tek sayfada göz atın",
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
      text: "Genel Bakış",
      link: "/overview"
    },
    {
      text: "Önizleme",
      link: "/preview"
    }
  ]
}

const App = () => {
  return (
    <BasePage content={obj} />
  )
}

export default App