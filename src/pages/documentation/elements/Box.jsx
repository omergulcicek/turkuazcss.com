import React from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"

import { BasePage } from "../../../components"

export const obj = {
  title: "Box",
  desc: "Diğer elementleri kapsaması için beyaz bir kutu",
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
      text: "Elementler",
      link: "/elements"
    },
    {
      text: "Box",
      link: "/box"
    }
  ],
  pagination: {
    prev: {
      href: "badge",
      text: "Badge"
    },
    next: {
      href: "button",
      text: "Button"
    }
  }
}

const App = () => {
  return (
    <BasePage info={obj}>
      <section>
        <p>
          Box elemanı gölgeli, kenarları hafif yuvarlak beyaz bir kapsayıcıdır.
        </p>

        <div className="row mb-3">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="box"></div>
          </div>
        </div>

        <SyntaxHighlighter language="html">
          {`<div class="box"></div>`}
        </SyntaxHighlighter>
      </section>
    </BasePage>
  )
}

export default App