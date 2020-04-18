import React from "react"

import { BasePage } from "../../../components"

export const obj = {
  title: "Media",
  desc: "Görsel ve yanında açıklama içeren kapsayıcılar",
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
      text: "Media",
      link: "/media"
    }
  ],
  pagination: {
    prev: {
      href: "list",
      text: "List"
    },
    next: {
      href: "modal",
      text: "Modal"
    }
  }
}

const App = () => {
  return (
    <BasePage info={obj} />
  )
}

export default App