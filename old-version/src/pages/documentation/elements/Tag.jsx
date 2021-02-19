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
  editlink: "documentation/elements/Tag",
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
            <span className="tag mr-1">tag</span>
            <span className="tag is-primary mr-1">primary</span>
            <span className="tag is-success mr-1">success</span>
            <span className="tag is-warning mr-1">warning</span>
            <span className="tag is-danger mr-1">danger</span>
            <span className="tag is-info mr-1">info</span>
          </div>
        </div>

        <p>
          <SyntaxHighlighter language="html">
{`<span class="tag">tag</span>
<span class="tag is-primary">primary</span>
<span class="tag is-success">success</span>
<span class="tag is-warning">warning</span>
<span class="tag is-danger">danger</span>
<span class="tag is-info">info</span>`}
          </SyntaxHighlighter>
        </p>
      </section>
    </BasePage>
  )
}

export default App