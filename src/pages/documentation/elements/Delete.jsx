import React from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"

import { BasePage } from "../../../components"

export const obj = {
  title: "Delete",
  desc: "Her yerde kullanabileceğin çarpı işareti",
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
      text: "Delete",
      link: "/delete"
    }
  ],
  pagination: {
    prev: {
      href: "button",
      text: "Button"
    },
    next: {
      href: "divider",
      text: "Divider"
    }
  }
}

const App = () => {
  return (
    <BasePage info={obj}>
      <section>
        <p>
          Delete, farklı yerlerde kullanabileceğiniz bağımsız bir elementtir. Kendi başına basit bir daire içerisinde çarpı işareti barındırır.
        </p>

        <div className="row mb-3">
          <div className="col-12 col-md-6 col-lg-4">
            <span className="delete"></span>
          </div>
        </div>

        <SyntaxHighlighter language="html">
          {`<span class="delete"></span>`}
        </SyntaxHighlighter>
      </section>

      <section>
        <h2>Boyut</h2>

        <p>
          Delete elementi 3 farklı boyuta sahiptir.
        </p>

        <div className="row mb-3">
          <div className="col-12 col-md-6 col-lg-4">
            <span className="delete is-small mr-1"></span>
            <span className="delete mr-1"></span>
            <span className="delete is-large"></span>
            
          </div>
        </div>

        <SyntaxHighlighter language="html">
{`<span class="delete is-small"></span>
<span class="delete"></span>
<span class="delete is-large"></span>`}
        </SyntaxHighlighter>
      </section>

      <section>
        <h2>Kombinasyon</h2>

        <p>
          Delete elementini ihtiyacınız olan herhangi bir yere ekleyebilirsiniz.
        </p>

        <div className="row mb-3">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="tag">
              <span>
                Tag
              </span>
              <a className="delete"></a>
            </div>

            <div className="notification is-info">
              <a className="delete"></a>
              <span>
                Delete elementi, notification elementi içerisinde otomatik olarak sağ üst köşeye yerleşecektir.
              </span>
            </div>
          </div>
        </div>

        <SyntaxHighlighter language="html">
{`<div class="tag">
  <span>Tag</span>
  <a class="delete"></a>
</div>

<div class="notification is-info">
  <p>
    Delete elementi, notification elementi içerisinde otomatik olarak sağ üst köşeye yerleşecektir.
  </p>
  <a class="delete"></a>
</div>`}
        </SyntaxHighlighter>
      </section>
    </BasePage>
  )
}

export default App