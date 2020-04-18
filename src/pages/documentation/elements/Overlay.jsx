import React from "react"

import { BasePage } from "../../../components"

export const obj = {
  title: "Overlay",
  desc: "",
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
      text: "Overlay",
      link: "/overlay"
    }
  ],
  pagination: {
    prev: {
      href: "notification",
      text: "Notification"
    },
    next: {
      href: "progress",
      text: "Progress"
    }
  }
}

const App = () => {
  return (
    <BasePage info={obj} />
  )
}

export default App