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
            <div class="notification">
              <a class="delete"></a>
              Lorem ipsum dolor sit amet, consectetur
              adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. 
              <div class="divider"></div>Nullam gravida purus diam, et dictum <a href="">felis venenatis</a> efficitur. Sit amet,
              consectetur adipiscing elit
            </div>

            <div class="notification is-primary">
              <a class="delete"></a>
              Lorem ipsum dolor sit amet, consectetur
              adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. 
              <div class="divider"></div>Nullam gravida purus diam, et dictum <a href="">felis venenatis</a> efficitur. Sit amet,
              consectetur adipiscing elit
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
  title: "Uyarı",
  desc: "Kullanıcılarınızı bir şey hakkında uyarmak için bildirim blokları",
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
      text: "Uyarı",
      link: "/notification"
    }
  ]
}