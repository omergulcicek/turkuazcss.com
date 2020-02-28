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
            <div class="form-field">
              <p>
                <label>
                  <input type="checkbox" class="switch" />
                  <span></span>
                </label>
              </p>
              <p>
                <label>
                Kapalı
                  <input type="checkbox" class="switch" />
                  <span></span>
                Açık
                </label>
              </p>
              <p>
                <label>
                Kapalı
                  <input type="checkbox" class="switch" checked />
                  <span></span>
                Açık
                </label>
              </p>
              <p>
                <label>
                Kapalı
                  <input type="checkbox" class="switch" disabled />
                  <span></span>
                Açık
                </label>
              </p>
              <p>
                <label>
                Kapalı
                  <input type="checkbox" class="switch" checked disabled />
                  <span></span>
                Açık
                </label>
              </p>
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
  title: "Switch",
  desc: "Sadece iki seçeneği bulunan özelleştirilmiş bir checkbox",
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
      text: "Form",
      link: "/form"
    },
    {
      text: "Switch",
      link: "/switch"
    }
  ]
}