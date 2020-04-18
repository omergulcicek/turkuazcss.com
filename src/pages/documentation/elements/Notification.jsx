import React from "react"

import { BasePage } from "../../../components"

export const obj = {
  title: "Notification",
  desc: "Kullanıcılarınızı bir şey hakkında uyarmak için bildirim blokları",
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
      text: "Elementler",
      link: "/elements"
    },
    {
      text: "Notification",
      link: "/notification"
    }
  ],
  pagination: {
    prev: {
      href: "image",
      text: "Image"
    },
    next: {
      href: "overlay",
      text: "Overlay"
    }
  }
}

const App = () => {
  return (
    <BasePage info={obj} />
  )
}

export default App