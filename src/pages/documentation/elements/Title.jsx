import React from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"

import { BasePage } from "../../../components"

export const obj = {
  title: "Title",
  desc: "Daha büyük ve şık başlıklar",
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
      text: "Title",
      link: "/title"
    }
  ],
  pagination: {
    prev: {
      href: "tag",
      text: "Tag"
    },
    next: {
      href: "tooltip",
      text: "Tooltip"
    }
  }
}

const App = () => {
  return (
    <BasePage info={obj}>
      <section>
        <p>
          Normal başlıklara nazaran biraz daha büyük gösterişli başlık elementi. <code>&lt;h1>, &lt;h2>, &lt;h3>, &lt;h4>, &lt;h5>, &lt;h6></code> herhangi bir başlığa ilgili sınıfları ekleyebilirsin.
        </p>

        <h6 className="title is-size-1">Title 1</h6>
        <h6 className="title is-size-2">Title 2</h6>
        <h6 className="title is-size-3">Title 3</h6>
        <h6 className="title is-size-4">Title 4</h6>

        <SyntaxHighlighter language="html">
{`<h6 class="title is-size-1">Title 1</h6>
<h6 class="title is-size-2">Title 2</h6>
<h6 class="title is-size-3">Title 3</h6>
<h6 class="title is-size-4">Title 4</h6>`}
        </SyntaxHighlighter>
      </section>
    </BasePage>
  )
}

export default App