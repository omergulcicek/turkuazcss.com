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
            <ul class="list">
              <li class="list_item">Cras justo odio</li>
              <li class="list_item">Dapibus ac facilisis in</li>
            </ul>

            <div class="list">
              <a href="#!" class="list_item">Cras justo odio</a>
              <a href="#!" class="list_item is-active">Dapibus ac facilisis in</a>
              <a href="#!" class="list_item" tabindex="-1" disabled>Porta ac consectetur ac</a>
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
  title: "Liste",
  desc: "Sade görüntüsü ile linkleri listelemenin kolay yolu",
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
      text: "Liste",
      link: "/list"
    }
  ]
}