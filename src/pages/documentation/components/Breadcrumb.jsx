import React, { Component } from "react"

import { SEO, BasePage, Settings } from "../../../components"

class App extends Component {
  constructor(props) {
    super(props)
  }
  
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

        <Settings>
          <aside>
            <nav class="breadcrumb is-small">
              <ul>
                <li><a href="#!">Home</a></li>
                <li><a href="#!">Frameworks</a></li>
                <li>Turkuaz</li>
              </ul>
            </nav>

            <nav class="breadcrumb">
              <ul>
                <li><a href="#!">Home</a></li>
                <li><a href="#!">Frameworks</a></li>
                <li>Turkuaz</li>
              </ul>
            </nav>
            
            <nav class="breadcrumb is-large">
              <ul>
                <li><a href="#!">Home</a></li>
                <li><a href="#!">Frameworks</a></li>
                <li>Turkuaz</li>
              </ul>
            </nav>

            <pre>
              
            <div dangerouslySetInnerHTML={{ __html: `` }} />

            </pre>
          </aside>

          <aside>
          </aside>
        </Settings>

      </section>
    )
  }
}

export default App

export const obj = {
  title: "Breadcrumb",
  desc: "Navigasyon deneyiminizi geliştirmek için basit bir sayfa konumu bileşeni",
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
      text: "Bileşenler",
      link: "/components"
    },
    {
      text: "Breadcrumb",
      link: "/breadcrumb"
    }
  ]
}