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
            <div class="card is-large">
              <div class="card-image">
                <img src="https://via.placeholder.com/640x480" alt="Placeholder image" />
              </div>
    
              <div class="card-content">
                <h5>Card title</h5>

                <p>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>

                <a href="#" class="button is-primary">Go somewhere</a>
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
  title: "Kart",
  desc: "Her yönüyle esnek ve özelleştirilebilir kart bileşenleri",
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
      text: "Kart",
      link: "/card"
    }
  ]
}