import React from "react"
import { Link } from "react-router-dom"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"

import { BasePage } from "../../../components"

export const obj = {
  title: "Notification",
  desc: "Kullanıcılarınızı bir şey hakkında uyarmak için bildirim blokları",
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
      text: "Notification",
      link: "/notification"
    }
  ],
  editlink: "documentation/elements/Notification",
  pagination: {
    prev: {
      href: "image",
      text: "Image"
    },
    next: {
      href: "progress",
      text: "Progress"
    }
  }
}

const App = () => {
  return (
    <BasePage info={obj}>
      <section>
        <div className="row mb-3">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="notification">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              <span className="delete"></span>
            </div>
          </div>
        </div>

        <SyntaxHighlighter language="html">
{`<div class="notification">
  Lorem ipsum dolor sit amet consectetur adipisicing elit.
</div>
`}
        </SyntaxHighlighter>
      </section>

      <section>
        <h3>Renk</h3>

        <p>
          Notification elementi 6 farklı renge sahiptir.
        </p>


        <div className="row mb-3">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="notification">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <div className="notification is-primary">
              <strong>is-primary</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <div className="notification is-success">
              <strong>is-success</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="notification is-danger">
              <strong>is-danger</strong>  Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <div className="notification is-warning">
              <strong>is-warning</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <div className="notification is-info">
              <strong>is-info</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
          </div>
        </div>

<SyntaxHighlighter language="html">
{`<div class="notification"></div>

<div class="notification is-primary"></div>

<div class="notification is-success"></div>

<div class="notification is-danger"></div>

<div class="notification is-warning"></div>

<div class="notification is-info"></div>
`}
</SyntaxHighlighter>
      </section>
    </BasePage>
  )
}

export default App