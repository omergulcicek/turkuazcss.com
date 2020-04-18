import React from "react"

import { BasePage } from "../../../components"

export const obj = {
  title: "Kurulum",
  desc: "Projenize uygun Turkuaz paketini nasıl kullanacağınıza ait bilgiler",
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
      text: "Kurulum",
      link: "/start"
    }
  ],
  pagination: {
    prev: {
      href: "/docs/overview",
      text: "Genel Bakış"
    },
    next: {
      href: "preview",
      text: "Önizleme"
    }
  }
}

const App = () => {
  return (
    <BasePage info={obj} />
  )
}

export default App