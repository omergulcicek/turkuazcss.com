import React from "react"
import { Link } from "react-router-dom"
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
            <code>is-none</code>, <code>is-hidden</code> yada <code>[hidden]</code> elementi gizler.
          </p>

<SyntaxHighlighter language="html">
{`<div class="is-none">...</div>
<div class="is-hidden">...</div>
<div hidden>...</div>`}
</SyntaxHighlighter>

          <p className="mt-5 mb-1">
            Diğer display sınıflarını <code>{`is-{display}`}</code> formatında kullanabilirsiniz.
          </p>

<SyntaxHighlighter language="html">
{`<div class="is-block">...</div>
<div class="is-flex">...</div>
<div class="is-inline">...</div>
<div class="is-inline-block">...</div>
<div class="is-inline-flex">...</div>`}
</SyntaxHighlighter>

          <p className="mt-5 mb-1">
            Çözünürlüğe göre display sınıflarına müdahale edebilirsiniz.
            <code>{`is-{display}-{breakpoint}`}</code> formatında kullanabilirsiniz.
          </p>

          <p className="mb-1">
            <code className="mr-1">is-none</code>
            <code className="mr-1">is-hidden</code>
            <code className="mr-1">is-block</code>
            <code className="mr-1">is-flex</code>
            <code className="mr-1">is-inline</code>
            <code className="mr-1">is-inline-block</code>
            <code className="mr-1">is-inline-flex</code>
          </p>

          <p className="mb-1">
            <code className="mr-1">is-none-sm</code>
            <code className="mr-1">is-hidden-sm</code>
            <code className="mr-1">is-block-sm</code>
            <code className="mr-1">is-flex-sm</code>
            <code className="mr-1">is-inline-sm</code>
            <code className="mr-1">is-inline-block-sm</code>
            <code className="mr-1">is-inline-flex-sm</code>
          </p>

          <p className="mb-1">
            <code className="mr-1">is-none-md</code>
            <code className="mr-1">is-hidden-md</code>
            <code className="mr-1">is-block-md</code>
            <code className="mr-1">is-flex-md</code>
            <code className="mr-1">is-inline-md</code>
            <code className="mr-1">is-inline-block-md</code>
            <code className="mr-1">is-inline-flex-md</code>
          </p>

          <p className="mb-1">
            <code className="mr-1">is-none-lg</code>
            <code className="mr-1">is-hidden-lg</code>
            <code className="mr-1">is-block-lg</code>
            <code className="mr-1">is-flex-lg</code>
            <code className="mr-1">is-inline-lg</code>
            <code className="mr-1">is-inline-block-lg</code>
            <code className="mr-1">is-inline-flex-lg</code>
          </p>

          <p className="mb-0">
            <code className="mr-1">is-none-xl</code>
            <code className="mr-1">is-hidden-xl</code>
            <code className="mr-1">is-block-xl</code>
            <code className="mr-1">is-flex-xl</code>
            <code className="mr-1">is-inline-xl</code>
            <code className="mr-1">is-inline-block-xl</code>
            <code className="mr-1">is-inline-flex-xl</code>
          </p>
        </section>
      </BasePage>
    </>
  )
}

export default App