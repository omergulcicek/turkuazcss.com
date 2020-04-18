import React from "react"

import { BasePage } from "../../../components"

export const obj = {
  title: "Navbar",
  desc: "Resim, link, buton ve dropdown destekleyebilen duyarlı menü",
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
      text: "Navbar",
      link: "/navbar"
    }
  ],
  pagination: {
    prev: {
      href: "modal",
      text: "Modal"
    },
    next: {
      href: "pagination",
      text: "Pagination"
    }
  }
}

const App = () => {
  return (
    <BasePage info={obj} />
  )
}

export default App