import React from "react"

import { BasePage } from "../../components"

export const obj = {
  title: "Takım",
  desc: "Takım açıklaması",
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
      text: "Takım",
      link: "/team"
    }
  ]
}

const App = () => {
  return (
    <BasePage info={obj} />
  )
}

export default App