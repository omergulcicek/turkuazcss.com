import React from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"

import { BasePage } from "../../../components"

export const obj = {
  title: "Image",
  desc: "Duyarlı resimler için bir kapsayıcı",
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
      text: "Image",
      link: "/image"
    }
  ],
  editlink: "documentation/elements/Image",
  pagination: {
    prev: {
      href: "divider",
      text: "Divider"
    },
    next: {
      href: "notification",
      text: "Notification"
    }
  }
}

const App = () => {
  return (
    <BasePage info={obj}>
      <section>
        <p>
          Sayfadaki görsellerin yüklenmesi birkaç saniye sürebileceğinden, görüntünün yüklenmesiyle birlikte sayfada oynamaların olmaması için resim kapsayıcılarını kullanın.
        </p>

        <div className="row mb-3">
          <div className="col-auto">
            <figure class="image is-128">
              <img src="https://via.placeholder.com/128" alt="logo" loading="lazy" />
            </figure>
          </div>
        </div>

        <SyntaxHighlighter language="html">
{`<figure class="image is-128">
  <img src="https://via.placeholder.com/128" alt="logo" loading="lazy" />
</figure>
`}
        </SyntaxHighlighter>
      </section>

      <section>
        <h3>Boyut</h3>

        <p>
          7 farklı boyutta resim kapsayıcısı vardır.
        </p>

        <div className="row">
          <div className="col-12 col-md-8 col-lg-6">
            <table className="table is-bordered">
              <tr>
                <td>
                  <code>image is-16</code>
                </td>
                <td>
                  <figure class="image is-16">
                    <img src="https://via.placeholder.com/16" alt="logo" loading="lazy" />
                  </figure>
                </td>
                <td>
                  16x16
                </td>
              </tr>

              <tr>
                <td>
                  <code>image is-24</code>
                </td>
                <td>
                  <figure class="image is-24">
                    <img src="https://via.placeholder.com/24" alt="logo" loading="lazy" />
                  </figure>
                </td>
                <td>
                  24x24
                </td>
              </tr>
              
              <tr>
                <td>
                  <code>image is-32</code>
                </td>
                <td>
                  <figure class="image is-32">
                    <img src="https://via.placeholder.com/32" alt="logo" loading="lazy" />
                  </figure>
                </td>
                <td>
                  32x32
                </td>
              </tr>
              
              <tr>
                <td>
                  <code>image is-48</code>
                </td>
                <td>
                  <figure class="image is-48">
                    <img src="https://via.placeholder.com/48" alt="logo" loading="lazy" />
                  </figure>
                </td>
                <td>
                  48x48
                </td>
              </tr>
              
              <tr>
                <td>
                  <code>image is-64</code>
                </td>
                <td>
                  <figure class="image is-64">
                    <img src="https://via.placeholder.com/64" alt="logo" loading="lazy" />
                  </figure>
                </td>
                <td>
                  64x64
                </td>
              </tr>
              
              <tr>
                <td>
                  <code>image is-96</code>
                </td>
                <td>
                  <figure class="image is-96">
                    <img src="https://via.placeholder.com/96" alt="logo" loading="lazy" />
                  </figure>
                </td>
                <td>
                  96x96
                </td>
              </tr>
              
              <tr>
                <td>
                  <code>image is-128</code>
                </td>
                <td>
                  <figure class="image is-128">
                    <img src="https://via.placeholder.com/128" alt="logo" loading="lazy" />
                  </figure>
                </td>
                <td>
                  128x128
                </td>
              </tr>
            </table>
          </div>
        </div>
      </section>

      <section>
        <h3>Yuvarlak Resim</h3>

        <p>
          Image etiketini yuvarlak yapmak için <code>is-rounded</code> sınıfını eklemek yeterlidir.
        </p>

        <div className="row mb-3">
          <div className="col-auto">
            <figure class="image is-rounded is-128">
              <img src="https://via.placeholder.com/128" alt="logo" loading="lazy" />
            </figure>
          </div>
        </div>

        <SyntaxHighlighter language="html">
{`<figure class="image is-rounded">
  <img src="https://via.placeholder.com/128" alt="logo" loading="lazy" />
</figure>
`}
        </SyntaxHighlighter>
      </section>
    </BasePage>
  )
}

export default App