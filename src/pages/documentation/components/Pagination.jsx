import React from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"

import { BasePage } from "../../../components"

export const obj = {
  title: "Pagination",
  desc: "Responsive ve esnek tasarlanmış farklı çeşitlerde ki sayfalandırma bileşeni",
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
      text: "Pagination",
      link: "/pagination"
    }
  ],
  editlink: "documentation/components/Pagination",
  pagination: {
    prev: {
      href: "modal",
      text: "Modal"
    }
  }
}

const App = () => {
  return (
    <BasePage info={obj}>
      <section>
        <p>
          Aktif sayfayı göstermek için <code>is-current</code> sınıfını, pasif linkler için <code>disabled</code> özelliğini kullanabilirsiniz.
        </p>

        <div className="row mb-3">
          <div className="col-12 col-md-6 col-lg-4">
            <nav className="pagination">
              <a href="#!">
                <svg role="img" viewBox="0 0 256 512" height="12"><path fill="currentColor" d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"></path></svg>
              </a>
              <a href="#!" className="is-current">1</a>
              <a href="#!">2</a>
              <a href="#!" tabindex="-1" disabled>3</a>
              <a href="#!">
                <svg role="img" viewBox="0 0 256 512" height="12"><path fill="currentColor" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path></svg>
              </a>
            </nav>
          </div>
        </div>

        <SyntaxHighlighter language="html">
{`<nav class="pagination">
  <a href="#!">
    <svg role="img" viewBox="0 0 256 512" height="12"><path fill="currentColor" d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"></path></svg>
  </a>
  <a href="#!" class="is-current">1</a>
  <a href="#!">2</a>
  <a href="#!" tabindex="-1" disabled>3</a>
  <a href="#!">
    <svg role="img" viewBox="0 0 256 512" height="12"><path fill="currentColor" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path></svg>
  </a>
</nav>`}
        </SyntaxHighlighter>
      </section>
    </BasePage>
  )
}

export default App