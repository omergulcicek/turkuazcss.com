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
  pagination: {
    prev: {
      href: "navbar",
      text: "Navbar"
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
              <a href="#!">«</a>
              <a href="#!" className="is-current">1</a>
              <a href="#!">2</a>
              <a href="#!" tabindex="-1" disabled>3</a>
              <a href="#!">»</a>
            </nav>
          </div>
        </div>

        <SyntaxHighlighter language="html">
{`<nav class="pagination">
  <a href="#!">«</a>
  <a href="#!" class="is-current">1</a>
  <a href="#!">2</a>
  <a href="#!" tabindex="-1" disabled>3</a>
  <a href="#!">»</a>
</nav>`}
        </SyntaxHighlighter>
      </section>
    </BasePage>
  )
}

export default App