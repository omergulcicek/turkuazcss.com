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
  ],
  pagination: {
    prev: {
      href: "preview",
      text: "Önizleme"
    },
    next: {
      href: "support",
      text: "Destek Ol"
    }
  }
}

const App = () => {
  return (
    <BasePage info={obj} />
  )
}

export default App