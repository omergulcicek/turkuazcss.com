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
            <a class="button" id="showModal">Modal aç</a>
            
            <dialog class="modal" id="modal">
              <h3>Good job!</h3>
              <p>
                You clicked the button!
              </p>
              <a class="button is-primary" id="closeModal">OK</a>
            </dialog>

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
  title: "Modal",
  desc: "Sitenize kullanıcı bildirimleri veya tamamen özel içerik için iletişim kutuları",
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
      text: "Modal",
      link: "/modal"
    }
  ]
}