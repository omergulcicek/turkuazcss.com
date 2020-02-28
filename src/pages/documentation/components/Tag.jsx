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
            <div>
              <span class="tag">help@facebook.com</span>

              <span class="tag">
                <a class="delete is-small"></a>
                <span>support@google.com</span>
              </span>
              
              <span class="tag">
                <span>iletisim@omergulcicek.com</span>
                <a class="delete is-small"></a>
              </span>

              <span class="tag">
                <span>CSS gzip file</span>
                <span class="tag_detail">20.9 kB</span>
              </span>

              <span class="tag">
                <span class="tag_detail">20.9 kB</span>
                <span>CSS gzip file</span>
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
  title: "Etiket",
  desc: "Amaca yönelik tasarlanmış minik etiketleri her yerde kullanabilirsiniz",
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
      text: "Etiket",
      link: "/tag"
    }
  ]
}