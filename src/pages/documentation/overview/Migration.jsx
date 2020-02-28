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
  title: "Versiyon Değişikliği",
  desc: "Eski versiyonlar ve yeni versiyona geçerken dikkat etmeniz gerekenler",
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
      text: "Genel Bakış",
      link: "/overview"
    },
    {
      text: "Versiyon Değişikliği",
      link: "/migration"
    }
  ]
}