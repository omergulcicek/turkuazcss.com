import React from "react"

import { BasePage } from "../../../components"

export const obj = {
  title: "Destek Ol",
  desc: "Projeye nasıl destek olabileceğinizi öğrenin",
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
      text: "Destek Ol",
      link: "/support"
    }
  ],
  pagination: {
    prev: {
      href: "preview",
      text: "Önizleme"
    },
    next: {
      href: "migration",
      text: "Versiyon Değişiklikleri"
    }
  }
}

const App = () => {
  return (
    <BasePage info={obj} />
  )
}

export default App