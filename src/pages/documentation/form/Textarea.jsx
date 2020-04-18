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
              <textarea placeholder="textarea" class="textarea"></textarea>
            </div>
            <div class="form-field">
              <textarea placeholder="disabled textarea" class="textarea" disabled></textarea>
            </div>
            <div class="form-field">
              <textarea class="textarea" readonly>readonly textarea</textarea>
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
  title: "Textarea",
  desc: "Çok satırlı metin giriş alanı ve çeşitleri",
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
      text: "Textarea",
      link: "/textarea"
    }
  ]
}