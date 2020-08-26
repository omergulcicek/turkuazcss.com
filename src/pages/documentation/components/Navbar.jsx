import React from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"

import { BasePage } from "../../../components"

export const obj = {
  title: "Navbar",
  desc: "Resim, link, buton ve dropdown destekleyebilen duyarlı menü",
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
      text: "Navbar",
      link: "/navbar"
    }
  ],
  pagination: {
    prev: {
      href: "modal",
      text: "Modal"
    },
    next: {
      href: "pagination",
      text: "Pagination"
    }
  }
}

const App = () => {
  return (
    <BasePage info={obj}>
      <section>
        <div className="row mb-3">
          <div className="col-12">
            <nav className="nav justify-space-between">
              <a className="nav_brand" href="#">
                <svg role="img" viewBox="0 0 109.000000 162.000000" height="30"><g transform="translate(0.000000,162.000000) scale(0.100000,-0.100000)" stroke="none" fill="#03968a"><path d="M20 1083 c0 -570 2 -588 61 -706 65 -128 168 -231 295 -295 110 -55 156 -62 433 -62 l251 0 0 38 c0 104 -61 202 -153 245 -44 21 -72 26 -180 30 -106 5 -136 10 -180 30 -76 35 -122 79 -159 155 l-33 67 -5 410 -5 410 -27 47 c-54 91 -152 148 -254 148 l-44 0 0 -517z"></path><path d="M490 1048 c-91 -63 -93 -204 -3 -264 69 -46 223 -38 302 16 25 18 58 49 73 70 27 37 58 132 58 177 l0 23 -199 0 c-189 0 -200 -1 -231 -22z"></path></g></svg>
                <strong className="ml-3">Turkuaz</strong>
              </a>
              <a href="">Home</a>
              <a href="" tabindex="-1" aria-disabled="true" disabled>Blog</a>
              <a href="">About</a>
              <div className="dropdown is-hoverable nav_item">
                <a href="#!" className="dropdown_trigger">Contact</a>
                
                <div className="dropdown_menu">
                  <a className="dropdown_item" href="#!">Mail</a>
                  <a className="dropdown_item" href="#!">Telephone</a>
                  <div className="divider"></div>
                  <a className="dropdown_item" href="#!">Map</a>
                </div>
              </div>
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
    </BasePage>
  )
}

export default App