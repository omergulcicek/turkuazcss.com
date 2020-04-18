import React, { Component } from "react"

import { SEO, BasePageHeader } from "../../../components"

class App extends Component {
  render () {
    const { title, desc, breadcrumb } = obj

    return (
      <>
        <SEO title={title} />

        <BasePageHeader
          title={title}
          desc={desc}
          breadcrumb={breadcrumb}
        />
      </>
    )
  }
}

export default App

export const obj = {
  title: "Kurulum",
  desc: "Projenize uygun Turkuaz paketini nasıl kullanacağınıza ait bilgiler",
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
      text: "Kurulum",
      link: "/start"
    }
  ]
}