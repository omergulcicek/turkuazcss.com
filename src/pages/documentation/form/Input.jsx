import React from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"

import { BasePage } from "../../../components"

export const obj = {
  title: "Input",
  desc: "Metin giriş alanı ve çeşitleri",
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
      text: "Input",
      link: "/input"
    }
  ],
  pagination: {
    prev: {
      href: "/docs/form",
      text: "Form"
    },
    next: {
      href: "textarea",
      text: "Textarea"
    }
  }
}

const App = () => {
  return (
    <BasePage info={obj}>
      <section>
        <div className="row mb-3">
          <div className="col-12 col-md-6 col-lg-4">
            <input type="text" placeholder="Turkuaz" className="input" />
          </div>
        </div>

        <SyntaxHighlighter language="html">
{`<input type="text" placeholder="Turkuaz" class="input" />`}
        </SyntaxHighlighter>

        <div className="notification is-info mt-5">
          Form elemanlarını <strong>form-field</strong> kapsayıcısı içerisine almayı unutmayın.
        </div>
      </section>
      
      <section>
        <h3>Kombinasyon</h3>

        <p>
          Input elemanını <code>label</code> ve altına küçük bir yazı için <code>small</code> etiketini kullanabilirsin.
        </p>

        <div className="row mb-3">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="form-field">
              <label>Kullanıcı Adı</label>
              <input type="text" placeholder="@omergulcicek" className="input" />
              <small className="input-text">En az 3 karakter</small>
            </div>
          </div>
        </div>

        <SyntaxHighlighter language="html">
{`<div class="form-field">
  <label>Kullanıcı Adı</label>
  <input type="text" placeholder="@omergulcicek" class="input" />
  <small class="input-text">En az 3 karakter</small>
</div>`}
        </SyntaxHighlighter>
      </section>

      <section>
        <h3>Çeşit</h3>

        <h6 className="mt-4">disabled</h6>

        <div className="row mb-3">
          <div className="col-12 col-md-6">
            <div className="form-field">
              <input type="text" placeholder="Lorem ipsum dolor sit amet consectetur, adipisicing elit" className="input" disabled />
            </div>
          </div>
        </div>

        <SyntaxHighlighter language="html">
{`<div class="form-field">
  <input type="text" placeholder="Lorem ipsum dolor sit amet consectetur, adipisicing elit" class="input" disabled />
</div>`}
        </SyntaxHighlighter>

        <h6 className="mt-5">readonly</h6>

        <div className="row mb-3">
          <div className="col-12 col-md-6">
            <div className="form-field">
              <input type="text" value="Lorem ipsum dolor sit amet consectetur, adipisicing elit" className="input" readOnly />
            </div>
          </div>
        </div>

        <SyntaxHighlighter language="html">
{`<div class="form-field">
  <input type="text" value="Lorem ipsum dolor sit amet consectetur, adipisicing elit" class="input" readonly />
</div>`}
        </SyntaxHighlighter>

        <div className="row mb-3 mt-5">
          <div className="col-12 col-md-6">
            <h6>valid</h6>
            <div className="form-field">
              <input type="text" placeholder="Valid input" className="input is-valid" />
              <small className="input-text">E-posta kullanılabilir.</small>
            </div>
          </div>
          
          <div className="col-12 col-md-6">
            <h6>invalid</h6>
            <div className="form-field">
              <input type="text" placeholder="Invalid input" className="input is-invalid" />
              <small className="input-text">E-posta adresi kullanılmaktadır.</small>
            </div>
          </div>
        </div>

        <SyntaxHighlighter language="html">
{`<div class="form-field">
  <input type="text" class="input is-valid" />
  <small class="input-text">E-posta kullanılabilir.</small>
</div>

<div class="form-field">
  <input type="text" class="input is-invalid" />
  <small class="input-text">E-posta adresi kullanılmaktadır.</small>
</div>`}
        </SyntaxHighlighter>

        <h6 className="mt-5">loading</h6>

        <div className="row mb-3">
          <div className="col-12 col-md-6">
            <div className="form-field has-loading">
              <input type="text" placeholder="Loading..." className="input" />
            </div>
          </div>
        </div>

        <SyntaxHighlighter language="html">
{`<div class="form-field has-loading">
  <input type="text" placeholder="Loading..." class="input" />
</div>`}
        </SyntaxHighlighter>

        <h6 className="mt-5">icon</h6>

        <div className="row mb-3">
          <div className="col-12 col-md-6">
            <div className="form-field has-icon">
              <input type="text" className="input" placeholder="Ömer Gülçiçek" />

              <span className="input-icon">
                <svg aria-hidden="true" data-icon="user" role="img" viewBox="0 0 448 512"><path fill="currentColor" d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z" class=""></path></svg>
              </span>
            </div>
          </div>
        </div>

        <SyntaxHighlighter language="html">
{`<div class="form-field has-icon">
  <input type="text" class="input" />

  <span class="input-icon">
    ...
  </span>
</div>`}
        </SyntaxHighlighter>
      </section>
    </BasePage>
  )
}

export default App