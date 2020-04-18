import React from "react"

import { BasePage } from "../../../components"

export const obj = {
  title: "Box",
  desc: "Diğer elementleri kapsaması için beyaz bir kutu",
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
      text: "Box",
      link: "/box"
    }
  ],
  pagination: {
    prev: {
      href: "badge",
      text: "Badge"
    },
    next: {
      href: "button",
      text: "Button"
    }
  }
}

const App = () => {
  return (
    <BasePage info={obj}>
      <section>
        <div className="box"></div>
      </section>
    </BasePage>
  )
}

export default App