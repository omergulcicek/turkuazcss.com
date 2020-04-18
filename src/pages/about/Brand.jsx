import React from "react"

import { BasePage } from "../../components"

export const obj = {
  title: "Marka Yönergesi",
  desc: "Turkuaz logosu, markanın doğru kullanımı, kullanılan renkler ve çeşitli bilgiler",
  breadcrumb: [
    {
      text: "Ana Sayfa",
      link: "/"
    },
    {
      text: "Hakkında",
      link: "/about"
    },
    {
      text: "Marka Yönergesi",
      link: "/brand"
    }
  ]
}

const App = () => {
  return (
    <BasePage content={obj} />
  )
}

export default App