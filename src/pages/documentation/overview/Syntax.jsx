import React from "react"

import { BasePage } from "../../../components"

export const obj = {
  title: "Kod Yapısı",
  desc: "Turkuaz'ın kullandığı sınıflandırma hakkında detaylar",
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
      text: "Kod Yapısı",
      link: "/syntax"
    }
  ]
}

const App = () => {
  return (
    <BasePage content={obj} />
  )
}

export default App