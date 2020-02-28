import React, { Component } from "react"

import { SEO, BasePage } from "../../../components"

class App extends Component {
  render () {
    const { title, desc, breadcrumb, content } = obj

    return (
      <section>
        <SEO title={title} />

        <BasePage
          title={title}
          desc={desc}
          breadcrumb={breadcrumb}
          content={content}
        />
      </section>
    )
  }
}

export default App

export const obj = {
  title: "React",
  desc: "React projelerinizde kullanabilmeniz için geliştirilmiş Turkuaz bileşenleri",
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
      text: "Farklı Platformlar",
      link: "/library"
    },
    {
      text: "React",
      link: "/react"
    }
  ]
}