import React from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"

import { BasePage } from "../../../components"

export const obj = {
  title: "Breadcrumb",
  desc: "Navigasyon deneyiminizi geliştirmek için basit bir sayfa konumu bileşeni",
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
      text: "Breadcrumb",
      link: "/breadcrumb"
    }
  ],
  editlink: "https://github.com/omergulcicek/turkuazcss.com/blob/master/src/pages/documentation/components/Breadcrumb.jsx",
  pagination: {
    prev: {
      href: "/docs/components",
      text: "Bileşenler"
    },
    next: {
      href: "card",
      text: "Card"
    }
  }
}

const App = () => {
  return (
    <BasePage info={obj}>
      <section>
        <div className="row mb-3">
          <div className="col-12 col-md-6 col-lg-4">
            <nav className="breadcrumb">
              <ul>
                <li><a href="#!">Home</a></li>
                <li><a href="#!">Frameworks</a></li>
                <li>Turkuaz</li>
              </ul>
            </nav>
          </div>
        </div>

        <SyntaxHighlighter language="html">
{`<nav class="breadcrumb">
  <ul>
    <li><a href="#!">Home</a></li>
    <li><a href="#!">Frameworks</a></li>
    <li>Turkuaz</li>
  </ul>
</nav>`}
        </SyntaxHighlighter>
      </section>

      <section>
        <h2>Boyut</h2>

        <p>
          Breadcrumb elementi 3 farklı boyuta sahiptir.
        </p>

        <div className="row mb-3">
          <div className="col-12 col-md-6 col-lg-4">
            <nav className="breadcrumb is-small">
              <ul>
                <li><a href="#!">Home</a></li>
                <li><a href="#!">Frameworks</a></li>
                <li>Turkuaz</li>
              </ul>
            </nav>
            
            <nav className="breadcrumb">
              <ul>
                <li><a href="#!">Home</a></li>
                <li><a href="#!">Frameworks</a></li>
                <li>Turkuaz</li>
              </ul>
            </nav>
            
            <nav className="breadcrumb is-large">
              <ul>
                <li><a href="#!">Home</a></li>
                <li><a href="#!">Frameworks</a></li>
                <li>Turkuaz</li>
              </ul>
            </nav>            
          </div>
        </div>

        <SyntaxHighlighter language="html">
{`<span class="breadcrumb is-small"></span>
<span class="breadcrumb"></span>
<span class="breadcrumb is-large"></span>`}
        </SyntaxHighlighter>
      </section>
    </BasePage>
  )
}

export default App