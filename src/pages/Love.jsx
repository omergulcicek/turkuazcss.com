import React from "react"

import { BasePage } from "./../components"

export const obj = {
  title: "Sevgi",
  desc: "Turkuaz ile geliştirilen harika siteler!",
  breadcrumb: [
    {
      text: "Ana Sayfa",
      link: "/"
    },
    {
      text: "Sevgi",
      link: "/love"
    }
  ]
}

const App = () => {
  return (
    <>
      <BasePage info={obj}>
        <section>
          
        </section>
      </BasePage>
    </>
  )
}

export default App