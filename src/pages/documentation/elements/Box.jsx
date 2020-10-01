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
  editlink: "https://github.com/omergulcicek/turkuazcss.com/blob/master/src/pages/documentation/elements/Box.jsx",
  pagination: {
    prev: {
      href: "/docs/elements",
      text: "Elementler"
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
        <div className="row mb-3">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="box"></div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-md-6">
            <SyntaxHighlighter language="html">
              {`<div class="box"></div>`}
            </SyntaxHighlighter>
          </div>
        </div>
      </section>
    </BasePage>
  )
}

export default App