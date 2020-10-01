import React from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"

import { BasePage } from "../../../components"

export const obj = {
  title: "Tag",
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
      text: "Tag",
      link: "/tag"
    }
  ],
  editlink: "https://github.com/omergulcicek/turkuazcss.com/blob/master/src/pages/documentation/elements/Tag.jsx",
  pagination: {
    prev: {
      href: "table",
      text: "Table"
    },
    next: {
      href: "title",
      text: "Title"
    }
  }
}

const App = () => {
  return (
    <BasePage info={obj}>
      <section>
        <div className="row mb-3">
          <div className="col-12 col-md-6 col-lg-4">
            <span className="tag">Tag</span>
          </div>
        </div>

        <p>
          <SyntaxHighlighter language="html">
{`<span class="tag">Tag</span>`}
          </SyntaxHighlighter>
        </p>

        <p>
          Sağ yada sol yanına daha koyu bir alan ekleyebilirsin.
        </p>

        <div className="row mb-3">
          <div className="col-12 col-md-6 col-lg-4">
            <span className="tag">
              <span>versiyon</span>
              <span className="tag_detail">1.0.0</span>
            </span>
            
            <span className="tag">
              <span className="tag_detail">1.0.0</span>
              <span>versiyon</span>
            </span>
          </div>
        </div>

        <SyntaxHighlighter language="html">
{`<span class="tag">
  <span>versiyon</span>
  <span class="tag_detail">1.0.0</span>
</span>

<span class="tag">
  <span class="tag_detail">1.0.0</span>
  <span>versiyon</span>
</span>`}
        </SyntaxHighlighter>
      </section>
    </BasePage>
  )
}

export default App