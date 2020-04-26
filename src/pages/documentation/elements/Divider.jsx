import React from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"

import { BasePage } from "../../../components"

export const obj = {
  title: "Divider",
  desc: "Tasarımınızı bölümlere ayırmak için dikey veya yatay bir ayırıcı",
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
      text: "Divider",
      link: "/divider"
    }
  ],
  pagination: {
    prev: {
      href: "delete",
      text: "Delete"
    },
    next: {
      href: "image",
      text: "Image"
    }
  }
}

const App = () => {
  return (
    <BasePage info={obj}>
      <section>
        <p>
          Divider elemanı sayfadaki içeriği dikey yada yatay olarak ikiye ayırır. <code>data-content</code> attribute ile ortasına küçük yazılar ekleyebilirsiniz.
        </p>

        <div className="row mb-3">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="divider"></div>
            <div className="divider" data-content="yada"></div>
          </div>
        </div>

        <SyntaxHighlighter language="html">
{`<div class="divider"></div>
<div class="divider" data-content="yada"></div>
`}
        </SyntaxHighlighter>

        <p className="mt-5">
          Divider elementini dikey yapmak için <code>is-vertical</code> sınıfını eklemek yeterlidir.
        </p>
        
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="divider is-vertical"></div>
            <div className="divider is-vertical" data-content="yada"></div>
          </div>
        </div>

        <SyntaxHighlighter language="html">
{`<div class="divider is-vertical"></div>
<div class="divider is-vertical" data-content="yada"></div>
`}
        </SyntaxHighlighter>
      </section>
    </BasePage>
  )
}

export default App