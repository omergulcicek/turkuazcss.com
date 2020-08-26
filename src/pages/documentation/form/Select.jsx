import React from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"

import { BasePage } from "../../../components"

export const obj = {
  title: "Select",
  desc: "Tarayıcının varsayılan açılır menüsü yeniden tasarlandı",
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
      text: "Form",
      link: "/form"
    },
    {
      text: "Select",
      link: "/select"
    }
  ],
  pagination: {
    prev: {
      href: "textarea",
      text: "Textarea"
    },
    next: {
      href: "checkbox",
      text: "Checkbox"
    }
  }
}

const App = () => {
  return (
    <BasePage info={obj}>
      <section>
        <div className="row mb-3">
          <div className="col-12 col-md-6 col-lg-4">
            <select className="select">
              <option>Default select</option>
              <option>Option</option>
              <option>Option</option>
              <option>Option</option>
            </select>
          </div>
        </div>

        <SyntaxHighlighter language="html">
{`<select class="select">
  <option>Default select</option>
  <option>Option</option>
  <option>Option</option>
  <option>Option</option>
</select>`}
        </SyntaxHighlighter>

        <div className="notification is-info mt-5">
          Form elemanlarını <strong>form-field</strong> kapsayıcısı içerisine almayı unutmayın.
        </div>
      </section>
      
      <section>
        <h2>Çeşit</h2>

        <h6 className="mt-4">disabled</h6>

        <div className="row mb-3">
          <div className="col-12 col-md-6">
            <div className="form-field">
              <select className="select" disabled>
                <option>Default select</option>
                <option>Option</option>
              </select>
            </div>
          </div>
        </div>

        <SyntaxHighlighter language="html">
{`<select class="select" disabled>
  <option>Default select</option>
  <option>Option</option>
</select>`}
        </SyntaxHighlighter>
      </section>
    </BasePage>
  )
}

export default App