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
            <span class="tooltip" data-content="Tooltip Text">Tooltip</span>

            <span class="tooltip is-multiline" data-content="Tooltip with a long Text. So we use is-tooltip-multiline modifier to force multiline display.">Multiline</span>

            <span class="tooltip is-bottom" data-content="Tooltip Text">Bottom</span>

            <span class="tooltip is-bottom is-multiline" data-content="Tooltip with a long Text. So we use is-tooltip-multiline modifier to force multiline display.">Multiline</span>

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
  title: "Tooltip",
  desc: "Üzerine gelindiğinde görünebilen farklı konumlardaki kısa yazılar",
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
      text: "Tooltip",
      link: "/tooltip"
    }
  ]
}