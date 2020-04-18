import React from "react"

import { BasePage } from "../../../components"

export const obj = {
  title: "Versiyon Değişikliği",
  desc: "Eski versiyonlar ve yeni versiyona geçerken dikkat etmeniz gerekenler",
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
      text: "Versiyon Değişikliği",
      link: "/migration"
    }
  ],
  pagination: {
    prev: {
      href: "support",
      text: "Destek Ol"
    },
    next: {
      href: "/docs/form",
      text: "Form"
    }
  }
}

const App = () => {
  return (
    <BasePage info={obj} />
  )
}

export default App