import React, { Component } from "react"

import { SEO, BasePageHeader } from "../../../components"

class App extends Component {
  render () {
    const { title, desc, breadcrumb } = obj

    return (
      <section>
        <SEO title={title} />

        <BasePageHeader
          title={title}
          desc={desc}
          breadcrumb={breadcrumb}
        />
      </section>
    )
  }
}

export default App

export const obj = {
  title: "CSS",
  desc: "En sade haliyle CSS kodları",
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
      text: "CSS",
      link: "/css"
    }
  ]
}