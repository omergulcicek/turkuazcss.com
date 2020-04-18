import React from "react"

import { BasePage } from "../../../components"

export const obj = {
  title: "Tag",
  desc: "Amaca yönelik tasarlanmış minik etiketleri her yerde kullanabilirsiniz",
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
      text: "Tag",
      link: "/tag"
    }
  ],
  pagination: {
    prev: {
      href: "table",
      text: "Table"
    },
    next: {
      href: "title",
      text: "Title"
    }
  }
}

const App = () => {
  return (
    <BasePage info={obj} />
  )
}

export default App