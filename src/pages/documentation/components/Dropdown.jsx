import React from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"

import { BasePage } from "../../../components"

export const obj = {
  title: "Dropdown",
  desc: "Etkileşimli bir açılır menü",
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
      text: "Dropdown",
      link: "/dropdown"
    }
  ],
  pagination: {
    prev: {
      href: "card",
      text: "Card"
    },
    next: {
      href: "footer",
      text: "Footer"
    }
  }
}

const App = () => {
  return (
    <BasePage info={obj}>
      <section>
        <p>
          Card bileşeni ihtiyacınıza göre özelleştirebileceğiniz yazı, buton yada görsel içerebilen kapsayıcılardır.
        </p>

        <div className="row mb-3">

          <template>
            //TODO: Dropdown click olanı eklenecek
          </template>

        <div className="col-12 col-md-6 col-lg-4">
          <div className="dropdown">
            <a href="#!" className="button dropdown-trigger">click</a>
            
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#!">Action</a>
              <a className="dropdown-item" href="#!">Another action</a>
              <a className="dropdown-item" href="#!">Something else here</a>
              <div className="divider"></div>
              <a className="dropdown-item" href="#!">Separated link</a>
            </div>
          </div>
          
          <div className="dropdown is-hoverable">
            <a href="#!" className="button dropdown-trigger">:hover</a>
            
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#!">Action</a>
              <a className="dropdown-item" href="#!">Another action</a>
              <a className="dropdown-item" href="#!">Something else here</a>
              <div className="divider"></div>
              <a className="dropdown-item" href="#!">Separated link</a>
            </div>
          </div>
        </div>
      </div>

        <SyntaxHighlighter language="html">
{`<div class="dropdown">
  <a href="#!" class="button dropdown-trigger">:hover</a>
  
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#!">Action</a>
    <a class="dropdown-item" href="#!">Another action</a>
    <a class="dropdown-item" href="#!">Something else here</a>
    <div class="divider"></div>
    <a class="dropdown-item" href="#!">Separated link</a>
  </div>
</div>

<div class="dropdown is-hoverable">
  <a href="#!" class="button dropdown-trigger">:hover</a>

  <div class="dropdown-menu">
    <a class="dropdown-item" href="#!">Action</a>
    <a class="dropdown-item" href="#!">Another action</a>
    <a class="dropdown-item" href="#!">Something else here</a>
    <div class="divider"></div>
    <a class="dropdown-item" href="#!">Separated link</a>
  </div>
</div>`}
        </SyntaxHighlighter>
      </section>

      <section>
        <h2>Kombinasyon</h2>

        <p>
          Dropdown bileşenini ihtiyacınız olan herhangi bir yere ekleyebilirsiniz.
        </p>

        <template>
          //TODO: Menü yada card içerisinde birer örnek yapılabilir.
        </template>
      </section>
    </BasePage>
  )
}

export default App