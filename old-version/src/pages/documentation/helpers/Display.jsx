import React from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"

import { BasePage } from "../../../components"

export const obj = {
  title: "Display",
  desc: "Bir elemanın görüntü değerini değiştirin",
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
      text: "Yardımcı Kodlar",
      link: "/helpers"
    },
    {
      text: "Display",
      link: "/display"
    }
  ],
  editlink: "documentation/helpers/Display",
  pagination: {
    prev: {
      href: "border",
      text: "Border"
    },
    next: {
      href: "embed",
      text: "Embed"
    }
  }
}

const App = () => {
  return (
    <>
      <BasePage info={obj}>        
        <section>
          <p>
            <code>d-none</code> ve <code>[hidden]</code> elementi gizler.
          </p>

<SyntaxHighlighter language="html">
{`<div class="d-none">...</div>
<div hidden>...</div>`}
</SyntaxHighlighter>

          <p className="mt-5 mb-1">
            Diğer display sınıflarını <code>{`d-{display}`}</code> formatında kullanabilirsiniz.
          </p>

<SyntaxHighlighter language="html">
{`<div class="d-block">...</div>
<div class="d-flex">...</div>
<div class="d-inline">...</div>
<div class="d-inline-block">...</div>
<div class="d-inline-flex">...</div>`}
</SyntaxHighlighter>

          <p className="mt-5 mb-1">
            Çözünürlüğe göre display sınıflarına müdahale edebilirsiniz.
            <code>{`d-{display}-{breakpoint}`}</code> formatında kullanabilirsiniz.
          </p>

          <p className="mb-1">
            <code className="mr-1">d-none</code>
            <code className="mr-1">d-block</code>
            <code className="mr-1">d-flex</code>
            <code className="mr-1">d-inline</code>
            <code className="mr-1">d-inline-block</code>
            <code className="mr-1">d-inline-flex</code>
          </p>

          <p className="mb-1">
            <code className="mr-1">d-none-sm</code>
            <code className="mr-1">d-block-sm</code>
            <code className="mr-1">d-flex-sm</code>
            <code className="mr-1">d-inline-sm</code>
            <code className="mr-1">d-inline-block-sm</code>
            <code className="mr-1">d-inline-flex-sm</code>
          </p>

          <p className="mb-1">
            <code className="mr-1">d-none-md</code>
            <code className="mr-1">d-block-md</code>
            <code className="mr-1">d-flex-md</code>
            <code className="mr-1">d-inline-md</code>
            <code className="mr-1">d-inline-block-md</code>
            <code className="mr-1">d-inline-flex-md</code>
          </p>

          <p className="mb-1">
            <code className="mr-1">d-none-lg</code>
            <code className="mr-1">d-block-lg</code>
            <code className="mr-1">d-flex-lg</code>
            <code className="mr-1">d-inline-lg</code>
            <code className="mr-1">d-inline-block-lg</code>
            <code className="mr-1">d-inline-flex-lg</code>
          </p>

          <p className="mb-0">
            <code className="mr-1">d-none-xl</code>
            <code className="mr-1">d-block-xl</code>
            <code className="mr-1">d-flex-xl</code>
            <code className="mr-1">d-inline-xl</code>
            <code className="mr-1">d-inline-block-xl</code>
            <code className="mr-1">d-inline-flex-xl</code>
          </p>
        </section>
      </BasePage>
    </>
  )
}

export default App