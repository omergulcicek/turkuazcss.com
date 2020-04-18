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
              <select class="select">
                <option>Default select</option>
                <option>Option</option>
                <option>Option</option>
                <option>Option</option>
              </select>
            </div>
            <div class="form-field">
              <select class="select" disabled>
                <option>Default select</option>
                <option>Option</option>
                <option>Option</option>
                <option>Option</option>
              </select>
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
  title: "Select",
  desc: "Tarayıcının varsayılan açılır menüsü yeniden tasarlandı",
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
      text: "Select",
      link: "/select"
    }
  ]
}