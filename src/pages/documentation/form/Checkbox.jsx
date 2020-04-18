import React, { Component } from "react"

import { SEO, BasePageHeader, Settings } from "../../../components"

class App extends Component {
  constructor(props) {
    super(props)
  }
  
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

        <Settings>
          <aside>
            <div class="form-field">
              <p>
                <label>
                  <input type="checkbox" class="checkbox" />
                  <span>Normal</span>
                </label>
              </p>
              <p>
                <label>
                  <input type="checkbox" class="checkbox" checked />
                  <span>Seçili</span>
                </label>
              </p>
              <p>
                <label>
                <input type="checkbox" class="checkbox" disabled />
                  <span>Pasif</span>
                </label>
              </p>
              <p>
                <label>
                  <input type="checkbox" class="checkbox" checked disabled />
                  <span>Seçili ve pasif</span>
                </label>
              </p>

              <p>
                <label>
                  <input type="checkbox" class="checkbox color-input" />
                  <span style={{backgroundColor: "#6574cd"}}></span>
                </label>
                <label>
                  <input type="checkbox" class="checkbox color-input" />
                  <span style={{backgroundColor: "#cd201f"}}></span>
                </label>
                <label>
                  <input type="checkbox" class="checkbox color-input" />
                  <span style={{backgroundColor: "#7bd235"}}></span>
                </label>
              </p>

              <p>
                <label>
                  <input type="checkbox" class="checkbox select-input is-circle" />
                  <span>
                    S
                  </span>
                </label>
                <label>
                  <input type="checkbox" class="checkbox select-input is-circle" />
                  <span>
                    Medium
                  </span>
                </label>
                <label>
                  <input type="checkbox" class="checkbox select-input" />
                  <span>
                    Large
                  </span>
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
  title: "Checkbox",
  desc: "Kullanıcıya çeşitli seçenekleri seçtirin",
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
      text: "Checkbox",
      link: "/checkbox"
    }
  ]
}