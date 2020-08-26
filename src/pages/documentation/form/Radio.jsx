import React from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"

import { BasePage } from "../../../components"

export const obj = {
  title: "Radio",
  desc: "Kullanıcıya seçeneklerden yalnızca birini seçtirin",
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
      text: "Radio",
      link: "/radio"
    }
  ],
  pagination: {
    prev: {
      href: "checkbox",
      text: "Checkbox"
    },
    next: {
      href: "switch",
      text: "Switch"
    }
  }
}

const App = () => {
  return (
    <BasePage info={obj}>
      <section>
        <div className="row mb-3">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="form-field">
              <p>
                <label>
                  <input type="radio" className="radio" name="color" />
                  <span>Siyah</span>
                </label>
              </p>
              <p>
                <label>
                  <input type="radio" className="radio" name="color" checked />
                  <span>Beyaz</span>
                </label>
              </p>
              <p>
                <label>
                <input type="radio" className="radio" disabled />
                  <span>Pasif</span>
                </label>
              </p>
              <p>
                <label>
                  <input type="radio" className="radio" checked disabled />
                  <span>Seçili ve pasif</span>
                </label>
              </p>
            </div>
          </div>
        </div>

        <SyntaxHighlighter language="html">
{`<label>
    <input type="radio" name="radio" class="radio">
    <span>Radio Button</span>
  </label>`}
        </SyntaxHighlighter>

        <div className="notification is-info mt-5">
          Form elemanlarını <strong>form-field</strong> kapsayıcısı içerisine almayı unutmayın.
        </div>
      </section>
    </BasePage>
  )
}

export default App