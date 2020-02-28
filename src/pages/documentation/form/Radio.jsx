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
                  <input type="radio" name="radio" class="radio" />
                  <span>Normal</span>
                </label>
              </p>
              <p>
                <label>
                  <input type="radio" name="radio" class="radio" checked />
                  <span>Seçili</span>
                </label>
              </p>
              <p>
                <label>
                  <input type="radio" name="radio2" class="radio" disabled />
                  <span>Pasif</span>
                </label>
              </p>
              <p>
                <label>
                  <input type="radio" name="radio2" class="radio" checked disabled />
                  <span>Seçili ve pasif</span>
                </label>
              </p>

              <p>
                <label>
                  <input type="radio" class="radio color-input is-circle" name="radio3" />
                  <span style={{backgroundColor: "#6574cd"}}></span>
                </label>
                <label>
                  <input type="radio" class="radio color-input is-circle" name="radio3" />
                  <span style={{backgroundColor: "#cd201f"}}></span>
                </label>
                <label>
                  <input type="radio" class="radio color-input" name="radio3" />
                  <span style={{backgroundColor: "#7bd235"}}></span>
                </label>
              </p>

              <p>
                <label>
                  <input type="radio" class="radio select-input is-circle" name="radio4" />
                  <span>
                    <i class="fa fa-ambulance"></i>
                  </span>
                </label>
                <label>
                  <input type="radio" class="radio select-input is-circle" name="radio4" />
                  <span>
                    <i class="fa fa-rocket"></i>
                    <span class="ml-1">Rokey</span>
                  </span>
                </label>
                <label>
                  <input type="radio" class="radio select-input" name="radio4" />
                  <span>
                    <i class="fa fa-bicycle"></i>
                    <span class="ml-1">Bisikletle geleceğim</span>
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
  title: "Radio",
  desc: "Kullanıcının seçeneklerden yalnızca birini seçtirin",
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
      text: "Radio",
      link: "/radio"
    }
  ]
}