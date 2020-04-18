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
  title: "Destek Ol",
  desc: "Projeye nasıl destek olabileceğinizi öğrenin",
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
      text: "Destek Ol",
      link: "/support"
    }
  ]
}