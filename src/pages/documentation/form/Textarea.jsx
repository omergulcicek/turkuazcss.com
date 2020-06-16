import React from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"

import { BasePage } from "../../../components"

export const obj = {
  title: "Textarea",
  desc: "Çok satırlı metin giriş alanı ve çeşitleri",
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
      text: "Textarea",
      link: "/textarea"
    }
  ],
  pagination: {
    prev: {
      href: "input",
      text: "Input"
    },
    next: {
      href: "select",
      text: "Select"
    }
  }
}

const App = () => {
  return (
    <BasePage info={obj}>
      <section>
        <p>
          <code>&lt;textarea&gt;</code> etiketine <code>textarea</code> bir form girişi oluşturabilirsin.
        </p>

        <div className="row mb-3">
          <div className="col-12 col-md-6 col-lg-4">
            <textarea className="textarea"></textarea>
          </div>
        </div>

        <SyntaxHighlighter language="html">
{`<textarea class="textarea"></textarea>`}
        </SyntaxHighlighter>

        <div className="notification is-info mt-5">
          Form elemanlarını <strong>form-field</strong> kapsayıcısı içerisine almayı unutmayın.
        </div>
      </section>
      
      <section>
        <h2>Çeşit</h2>

        <h6>disabled</h6>

        <div className="row mb-3">
          <div className="col-12 col-md-6">
            <div className="form-field">
              <textarea className="textarea" disabled>disabled textarea</textarea>
            </div>
          </div>
        </div>

        <SyntaxHighlighter language="html">
{`<div class="form-field">
  <textarea class="textarea" disabled>disabled textarea</textarea>
</div>`}
        </SyntaxHighlighter>

        <h6 className="mt-5">readonly</h6>

        <div className="row mb-3">
          <div className="col-12 col-md-6">
            <div className="form-field">
              <textarea className="textarea" readOnly>readonly textarea</textarea>
            </div>
          </div>
        </div>

        <SyntaxHighlighter language="html">
{`<div class="form-field">
  <textarea class="textarea" readonly>readonly textarea</textarea>
</div>`}
        </SyntaxHighlighter>
      </section>
    </BasePage>
  )
}

export default App