import React, { Component } from "react"

import { SEO, BasePage } from "./../components"

class App extends Component {
  render () {
    const { title, desc, breadcrumb, content } = obj

    return (
      <>
        <section>
          <SEO title={title} />

          <BasePage
            title={title}
            desc={desc}
            breadcrumb={breadcrumb}
            content={content}
          />
        </section>

        <section>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem dolorem unde odit maiores, amet ratione nobis rem! Debitis, dolores rerum. Ea repellendus unde aspernatur! Dolorum tenetur blanditiis molestias minima quod?
          </p>
        </section>
      </>
    )
  }
}

export default App

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