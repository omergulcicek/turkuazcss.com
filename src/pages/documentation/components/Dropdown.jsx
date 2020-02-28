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
            <div class="dropdown">
              <a href="#!" class="button dropdown-trigger">click</a>
              
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#!">Action</a>
                <a class="dropdown-item" href="#!">Another action</a>
                <a class="dropdown-item" href="#!">Something else here</a>
                <div class="divider"></div>
                <a class="dropdown-item" href="#!">Separated link</a>
              </div>
            </div>

            <div class="dropdown is-hoverable">
              <a href="#!" class="button dropdown-trigger">:hover</a>
              
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#!">Action</a>
                <a class="dropdown-item" href="#!">Another action</a>
                <a class="dropdown-item" href="#!">Something else here</a>
                <div class="divider"></div>
                <a class="dropdown-item" href="#!">Separated link</a>
              </div>
            </div>

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
  title: "Dropdown",
  desc: "Etkileşimli bir açılır menü",
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
      text: "Dropdown",
      link: "/dropdown"
    }
  ]
}