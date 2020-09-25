import React from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"

import { BasePage } from "../../../components"

export const obj = {
  title: "Checkbox",
  desc: "Kullanıcıya çeşitli seçenekleri seçtirin",
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
      text: "Checkbox",
      link: "/checkbox"
    }
  ],
  pagination: {
    prev: {
      href: "select",
      text: "Select"
    },
    next: {
      href: "radio",
      text: "Radio"
    }
  }
}

const App = () => {
  const [checked, setChecked] = React.useState(true)
  const [checked2, setChecked2] = React.useState(true)

  return (
    <BasePage info={obj}>
      <section>
        <div className="row mb-3">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="form-field">
              <p>
                <label>
                  <input type="checkbox" className="checkbox" checked={checked}
        onChange={() => setChecked(!checked)} />
                  <span>Normal</span>
                </label>
              </p>
              <p>
                <label>
                  <input type="checkbox" className="checkbox" checked2={checked2}
        onChange={() => setChecked2(!checked2)} />
                  <span>Seçili</span>
                </label>
              </p>
              <p>
                <label>
                <input type="checkbox" className="checkbox" disabled />
                  <span>Pasif</span>
                </label>
              </p>
              <p>
                <label>
                  <input type="checkbox" className="checkbox" checked disabled />
                  <span>Seçili ve pasif</span>
                </label>
              </p>
            </div>
          </div>
        </div>

        <SyntaxHighlighter language="html">
{`<label>
  <input type="checkbox" class="checkbox" name="type">
  <span>Normal</span>
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