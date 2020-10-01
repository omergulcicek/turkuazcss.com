import React from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"

import { BasePage } from "../../../components"

export const obj = {
  title: "Tooltip",
  desc: "Üzerine gelindiğinde görünebilen farklı konumlardaki kısa yazılar",
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
      text: "Tooltip",
      link: "/tooltip"
    }
  ],
  editlink: "documentation/elements/Tooltip",
  pagination: {
    prev: {
      href: "title",
      text: "Title"
    },
    next: {
      href: "/docs/components",
      text: "Bileşenler"
    }
  }
}

const App = () => {
  return (
    <BasePage info={obj}>
      <section>
        <u className="tooltip" data-content="Turkuaz">Bu yazının üzerine gelin</u>

        <p>
          <SyntaxHighlighter language="html">
{`<span class="tooltip" data-content="Turkuaz">Bu yazının üzerine gelin</span>`}
          </SyntaxHighlighter>
        </p>
      </section>

      <section>
        <h2>Çeşit</h2>

        <p>
          Tooltip'in aşağıda açılması için <code>is-bottom</code> sınıfı ekleyebilirsin.
        </p>

        <u className="tooltip is-bottom" data-content="Turkuaz">Aşağıda açılan tooltip örneği</u>

        <p>
          <SyntaxHighlighter language="html">
{`<span class="tooltip is-bottom" data-content="Turkuaz">Aşağıda açılan tooltip örneği</span>`}
          </SyntaxHighlighter>
        </p>

        <p className="mt-5">
          Çok satırlı tooltip özelliği için <code>is-multiline</code> sınıfı ekleyebilirsin.
        </p>

        <div>
          <u className="tooltip is-multiline" data-content="Hızlı esnek ve kolay web sayfaları geliştirmek için tasarlanan güçlü bir CSS Framework">Çok satırlı tooltip örneği</u>
        </div>

        <div>
          <u className="tooltip is-bottom is-multiline" data-content="Hızlı esnek ve kolay web sayfaları geliştirmek için tasarlanan güçlü bir CSS Framework">Aşağıda açılan çok satırlı tooltip örneği</u>
        </div>

        <p>
          <SyntaxHighlighter language="html">
{`<span class="tooltip is-multiline" data-content="Hızlı esnek ve kolay web sayfaları geliştirmek için tasarlanan güçlü bir CSS Framework">Yazı</span>

<span class="tooltip is-bottom is-multiline" data-content="Hızlı esnek ve kolay web sayfaları geliştirmek için tasarlanan güçlü bir CSS Framework">Yazı</span>`}
          </SyntaxHighlighter>
        </p>
      </section>
    </BasePage>
  )
}

export default App