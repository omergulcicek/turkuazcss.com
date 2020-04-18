import React from "react"

import { BasePage } from "../../../components"

export const obj = {
  title: "Modal",
  desc: "Sitenize kullanıcı bildirimleri veya tamamen özel içerik için iletişim kutuları",
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
      text: "Modal",
      link: "/modal"
    }
  ],
  pagination: {
    prev: {
      href: "media",
      text: "Media"
    },
    next: {
      href: "navbar",
      text: "Navbar"
    }
  }
}

const App = () => {
  return (
    <BasePage info={obj} />
  )
}

export default App