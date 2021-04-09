import React from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"

import { BasePage } from "../../../components"

export const obj = {
  title: "Switch",
  desc: "Sadece iki seçeneği bulunan özelleştirilmiş bir checkbox",
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
      text: "Switch",
      link: "/switch"
    }
  ],
  pagination: {
    prev: {
      href: "radio",
      text: "Radio"
    },
    next: {
      href: "/docs/elements",
      text: "Elementler"
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
              <input type="checkbox" className="switch" id="switch" />
              <label for="switch"></label>
            </div>
          </div>
        </div>

        <SyntaxHighlighter language="html">
{`<div class="form-field">
  <input type="checkbox" class="switch" id="switch" />
  <label for="switch"></label>
</div>`}
        </SyntaxHighlighter>

        <div className="notification is-info mt-5">
          Form elemanlarını <strong>form-field</strong> kapsayıcısı içerisine almayı unutmayın.
        </div>
      </section>
    </BasePage>
  )
}

export default App