import React from "react"

import { BasePage } from "../../../components"

export const obj = {
  title: "Divider",
  desc: "Tasarımınızı bölümlere ayırmak için dikey veya yatay bir ayırıcı",
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
      text: "Bileşenler",
      link: "/components"
    },
    {
      text: "Divider",
      link: "/divider"
    }
  ],
  pagination: {
    prev: {
      href: "delete",
      text: "Delete"
    },
    next: {
      href: "image",
      text: "Image"
    }
  }
}

const App = () => {
  return (
    <BasePage info={obj} />
  )
}

export default App