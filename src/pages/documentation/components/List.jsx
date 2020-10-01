import React from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"

import { BasePage } from "../../../components"

export const obj = {
  title: "Liste",
  desc: "Sade görüntüsü ile linkleri listelemenin kolay yolu",
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
      text: "Liste",
      link: "/list"
    }
  ],
  editlink: "https://github.com/omergulcicek/turkuazcss.com/blob/master/src/pages/documentation/components/List.jsx",
  pagination: {
    prev: {
      href: "dropdown",
      text: "Dropdown"
    },
    next: {
      href: "media",
      text: "Media"
    }
  }
}

const App = () => {
  return (
    <BasePage info={obj}>
      <section>
        <p>
          Bir elemanı daha belirgin göstermek için <code>is-active</code> sınıfını, pasif elemanlar için <code>disabled</code> özelliğini kullanabilirsiniz.
        </p>

        <div className="row mb-3">
          <div className="col-12 col-md-6 col-lg-4">
            <ul className="list">
              <li className="list_item">Cras justo odio</li>
              <li className="list_item">Dapibus ac facilisis in</li>
            </ul>
          </div>
            
          <div className="col-12 col-md-6 col-lg-4">
            <div className="list">
              <a href="#!" className="list_item">Cras justo odio</a>
              <a href="#!" className="list_item is-active">Dapibus ac facilisis in</a>
              <a href="#!" className="list_item" tabindex="-1" disabled>Porta ac consectetur ac</a>
            </div>
          </div>
        </div>

        <SyntaxHighlighter language="html">
{`<ul class="list">
  <li class="list_item">Cras justo odio</li>
  <li class="list_item">Dapibus ac facilisis in</li>
</ul>

<div class="list">
  <a href="#!" class="list_item">Cras justo odio</a>
  <a href="#!" class="list_item is-active">Dapibus ac facilisis in</a>
  <a href="#!" class="list_item" tabindex="-1" disabled>Porta ac consectetur ac</a>
</div>`}
        </SyntaxHighlighter>

        <div class="notification is-info mt-5">
          Etiketleri <strong>ul &gt; li</strong> yada <strong>div &gt; a</strong> şeklinde oluşturabilirsiniz. Link kullandığınızda <strong>:hover</strong> desteği gelecektir.
        </div>
      </section>
    </BasePage>
  )
}

export default App