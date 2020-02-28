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
  title: "Kod Yapısı",
  desc: "Turkuaz'ın kullandığı sınıflandırma hakkında detaylar",
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
      text: "Kod Yapısı",
      link: "/syntax"
    }
  ]
}