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
            <p>
              <progress class="progress" value="15" max="100">15%</progress>
            </p>
            <p>
              <progress class="progress is-small" value="56" max="100">56%</progress>
            </p>
            <p>
              <progress class="progress is-large" value="85" max="100">85%</progress>
            </p>
            <p>
              <progress class="progress" value="23" max="100" disabled>23%</progress>
            </p>
            <p>
              <progress class="progress is-info" value="45" max="100">45%</progress>
            </p>
            <p>
              <progress class="progress is-success" value="60" max="100">60%</progress>
            </p>
            <p>
              <progress class="progress is-warning" value="75" max="100">75%</progress>
            </p>
            <p>
              <progress class="progress is-danger" value="90" max="100">90%</progress>
            </p>

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
  title: "Progress Bar",
  desc: "Sade ve şık ilerleme çubukları",
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
      text: "Progress Bar",
      link: "/progress"
    }
  ]
}