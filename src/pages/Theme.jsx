import React from "react"

import { BasePage } from "./../components"

export const obj = {
  title: "Tema",
  desc: "Turkuaz'ın geliştiricileri tarafından oluşturulan <strong>ücretsiz</strong> temalar",
  breadcrumb: [
    {
      text: "Ana Sayfa",
      link: "/"
    },
    {
      text: "Tema",
      link: "/theme"
    }
  ]
}

const App = () => {
  return (
    <>
    <BasePage content={obj} />
    <section>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea deleniti enim ipsam, est repudiandae dolorem animi hic, dicta dignissimos, error saepe expedita delectus nemo eligendi nihil rem itaque sint maxime!
      </p>
    </section>
    </>
  )
}

export default App