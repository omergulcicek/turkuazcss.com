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
              <label>Kullanıcı Adı</label>
              <input type="text" placeholder="omergulcicek" class="input" />
              <small class="input-text">En az 3 karakter</small>
            </div>
            <div class="form-field">
              <input type="text" placeholder="Lorem ipsum dolor sit amet consectetur, adipisicing elit" class="input" disabled />
            </div>
            <div class="form-field">
              <input type="text" class="input" value="Lorem ipsum dolor sit amet consectetur, adipisicing elit" readonly />
            </div>
            <div class="form-field">
              <input type="text" placeholder="Valid input" class="input is-valid" />
              <small class="input-text">E-posta kullanılabilir.</small>
            </div>
            <div class="form-field">
              <input type="text" placeholder="Invalid input" class="input is-invalid" />
              <small class="input-text">E-posta adresi kullanılmaktadır.</small>
            </div>
            <div class="form-field has-loading">
              <input type="text" placeholder="Loading..." class="input" />
            </div>
            <div class="form-field has-icon">
              <input type="mail" placeholder="support@example.com" class="input" />
              <span class="input-icon">
                <i class="fa fa-user"></i>
              </span>
            </div>
            <div class="form-field has-icon">
              <input type="password" placeholder="password" class="input" />
              <span class="input-icon">
                <i class="fa fa-key"></i>
              </span>
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
  title: "Input",
  desc: "Metin giriş alanı ve çeşitleri",
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
      text: "Input",
      link: "/input"
    }
  ]
}