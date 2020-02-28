import React, { Component } from "react"

import { SEO, BasePage } from "./../components"

class App extends Component {
  render () {
    const { title, desc, breadcrumb, content } = obj

    return (
      <>
        <section>
          <SEO title={title} />

          <BasePage
            title={title}
            desc={desc}
            breadcrumb={breadcrumb}
            content={content}
          />
        </section>

        <section>
          <h2>Marka</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, commodi animi exercitationem autem nisi omnis nobis alias voluptates cupiditate, saepe fuga blanditiis fugit. Distinctio mollitia dolore alias delectus nobis repudiandae.
          </p>
        </section>

        <section>
          <h2>Logo</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, commodi animi exercitationem autem nisi omnis nobis alias voluptates cupiditate, saepe fuga blanditiis fugit. Distinctio mollitia dolore alias delectus nobis repudiandae.
          </p>
        </section>

        <section>
          <h2>Renk</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, commodi animi exercitationem autem nisi omnis nobis alias voluptates cupiditate, saepe fuga blanditiis fugit. Distinctio mollitia dolore alias delectus nobis repudiandae.
          </p>
        </section>

        <section>
          <h2>Tarayıcı Desteği</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, commodi animi exercitationem autem nisi omnis nobis alias voluptates cupiditate, saepe fuga blanditiis fugit. Distinctio mollitia dolore alias delectus nobis repudiandae.
          </p>
        </section>
      </>
    )
  }
}

export default App

export const obj = {
  title: "Hakkında",
  desc: "Kurucu, marka, projenin nasıl ve neden başladığı hakkında daha fazla bilgi edinin",
  breadcrumb: [
    {
      text: "Ana Sayfa",
      link: "/"
    },
    {
      text: "Hakkında",
      link: "/about"
    }
  ]
}