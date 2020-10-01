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
  editlink: "documentation/components/Dropdown",
  pagination: {
    prev: {
      href: "card",
      text: "Card"
    },
    next: {
      href: "list",
      text: "List"
    }
  }
}

export const dropdownToggle = (e) => {
  const dropdownWrap =  e.target.parentElement
  dropdownWrap.classList.add("is-active")

  document.body.addEventListener("click", () => {
    const dropdowns = document.querySelectorAll(".dropdown.is-active")
    dropdowns.forEach(e => e.classList.remove("is-active"))
  })
}

const App = () => {
  return (
    <BasePage info={obj}>
      <section>
        <div className="row mb-3">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="dropdown">
              <a href="#!" className="button dropdown-trigger" onClick={e => dropdownToggle(e)}>click</a>
              
              <div className="dropdown_menu">
                <a className="dropdown_item" href="#!">Action</a>
                <a className="dropdown_item" href="#!">Another action</a>
                <a className="dropdown_item" href="#!">Something else here</a>
                <div className="divider"></div>
                <a className="dropdown_item" href="#!">Separated link</a>
              </div>
            </div>
          </div>
        </div>

        <SyntaxHighlighter language="html">
{`<div class="dropdown">
  <a href="#!" class="button dropdown-trigger">:hover</a>
  
  <div class="dropdown_menu">
    <a class="dropdown_item" href="#!">Action</a>
    <a class="dropdown_item" href="#!">Another action</a>
    <a class="dropdown_item" href="#!">Something else here</a>
    <div class="divider"></div>
    <a class="dropdown_item" href="#!">Separated link</a>
  </div>
</div>`}
        </SyntaxHighlighter>
      </section>

      <section>
        <h2>Çeşit</h2>
        
        <h6 className="mt-4">hoverable</h6>

        <div className="row mb-3">
          <div className="col-12">
            <div className="dropdown is-hoverable">
              <a href="#!" className="button dropdown-trigger">:hover</a>
              
              <div className="dropdown_menu">
                <a className="dropdown_item" href="#!">Action</a>
                <a className="dropdown_item" href="#!">Another action</a>
                <a className="dropdown_item" href="#!">Something else here</a>
                <div className="divider"></div>
                <a className="dropdown_item" href="#!">Separated link</a>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-8">
            <SyntaxHighlighter language="html">
{`<div class="dropdown is-hoverable">
  <a href="#!" class="button dropdown-trigger">:hover</a>

  <div class="dropdown_menu">
    <a class="dropdown_item" href="#!">Action</a>
    <a class="dropdown_item" href="#!">Another action</a>
    <a class="dropdown_item" href="#!">Something else here</a>
    <div class="divider"></div>
    <a class="dropdown_item" href="#!">Separated link</a>
  </div>
</div>`}
            </SyntaxHighlighter>
          </div>
        </div>
      </section>
    </BasePage>
  )
}

export default App