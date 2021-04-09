import React from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"

import { BasePage } from "../../../components"

export const obj = {
  title: "Media",
  desc: "Görsel ve yanında açıklama içeren kapsayıcılar",
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
      text: "Media",
      link: "/media"
    }
  ],
  editlink: "documentation/components/Media",
  pagination: {
    prev: {
      href: "dropdown",
      text: "Dropdown"
    },
    next: {
      href: "modal",
      text: "Modal"
    }
  }
}

const App = () => {
  return (
    <BasePage info={obj}>
      <section>
        <div className="row mb-3">
          <div className="col-12 col-md-8">
            <div class="media">
            <figure class="image is-64">
              <img src="https://via.placeholder.com/64" alt="" />
            </figure>

            <div className="media_content">
              <strong>Başlık</strong>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero id dolorum quod sapiente, qui dolores inventore officia ex illum voluptatem sint.
              </p>
            </div>
          </div>
          </div>
        </div>

        <SyntaxHighlighter language="html">
{`<div class="media">
  <figure class="image is-64">
    <img src="https://via.placeholder.com/64" alt="" />
  </figure>

  <div class="media_content">
    <strong>Başlık</strong>
    
    <p>
      Yorum alanı
    </p>
  </div>
</div>`}
        </SyntaxHighlighter>
      </section>
    </BasePage>
  )
}

export default App