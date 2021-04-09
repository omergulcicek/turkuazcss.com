import React from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"

import { BasePage } from "../../../components"

export const obj = {
  title: "Embed",
  desc: "Herhangi bir cihazda ölçeklenen video yerleştirmeleri",
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
      text: "Embed",
      link: "/embed"
    }
  ],
  editlink: "documentation/helpers/Embed",
  pagination: {
    prev: {
      href: "display",
      text: "Display"
    },
    next: {
      href: "spacing",
      text: "Spacing"
    }
  }
}

const App = () => {
  return (
    <>
      <BasePage info={obj}>
        <section>
          <p>
            Sayfa içerisine farklı bir kaynaktan video yerleştirmek için kullanacağınız yardımcı koddur.
          </p>

          <div className="embed mb-4">
          <iframe src="https://www.youtube.com/embed/Rel-VqospQc" allowfullscreen></iframe>
          </div>

<SyntaxHighlighter language="html">
{`<div class="embed">
  <iframe src="..." allowfullscreen></iframe>
</div>`}
</SyntaxHighlighter>
        </section>
      </BasePage>
    </>
  )
}

export default App