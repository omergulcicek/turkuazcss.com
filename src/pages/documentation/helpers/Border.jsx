import React from "react"
import { Link } from "react-router-dom"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"

import { BasePage } from "../../../components"
import { BorderExample } from "../../../components/Styled"

export const obj = {
  title: "Border",
  desc: "Bir elementin sınırlarına kenarlık ekleyin yada kaldırın",
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
      text: "Border",
      link: "/border"
    }
  ],
  editlink: "documentation/helpers/Border",
  pagination: {
    prev: {
      href: "flex",
      text: "Flex"
    },
    next: {
      href: "display",
      text: "Display"
    }
  }
}

const App = () => {
  return (
    <>
      <BasePage info={obj}>        
        <section>
          <BorderExample>
            <div></div>
            <span className="mx-3">-></span>
            <div className="border"></div>
          </BorderExample>

          <SyntaxHighlighter language="html">
{`<div class="has-border">...</div>`}
          </SyntaxHighlighter>
        </section>

        <section>
          <h3>Çeşit</h3>
          <h6 className="mt-4">Rounded</h6>

          <BorderExample>
            <div className="border"></div>
            <span className="mx-3">-></span>
            <div className="border is-rounded"></div>
          </BorderExample>

<SyntaxHighlighter language="html">
{`<div class="has-border is-rounded">...</div>`}
</SyntaxHighlighter>

          <h6 className="mt-4">Circle</h6>

          <BorderExample>
            <div className="border"></div>
            <span className="mx-3">-></span>
            <div className="border is-circle"></div>
          </BorderExample>

<SyntaxHighlighter language="html">
{`<div class="has-border is-circle">...</div>`}
</SyntaxHighlighter>

          <h6 className="mt-4">No Border</h6>

          <BorderExample>
            <div className="border"></div>
            <span className="mx-3">-></span>
            <div className="border no-border"></div>
          </BorderExample>

<SyntaxHighlighter language="html">
{`<div class="no-border">...</div>`}
</SyntaxHighlighter>
        </section>
      </BasePage>
    </>
  )
}

export default App