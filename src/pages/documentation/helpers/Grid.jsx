import React from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { ThemeConsumer } from "styled-components"

import { BasePage } from "../../../components"
import { GridExample, MutedText } from "../../../components/Styled"

export const obj = {
  title: "Grid",
  desc: "Container, row ve kolon ile responsive düzeninizi oluşturun",
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
      text: "Yardımcı Kodlar",
      link: "/helpers"
    },
    {
      text: "Grid",
      link: "/grid"
    }
  ],
  editlink: "documentation/helpers/Grid",
  pagination: {
    prev: {
      href: "/docs/helpers",
      text: "Yardımcı Kodlar"
    },
    next: {
      href: "flex",
      text: "Flex"
    }
  }
}

const App = () => {
  return (
    <>
      <BasePage info={obj}>
        <section>
          <h3>Container</h3>

          <p>
            <code>.container</code> kapsayıcısı içeriği sarar ve ortalar. Varsayılan container mobil çözünürlüğün üstünde ortalamaya başlarken, ihtiyaca bağlı olarak diğer çözünürlüklerin üstünde ortalayabilirsiniz.
          </p>

          <table className="table is-bordered is-striped text-center">
            <thead>
              <tr>
                <th></th>
                <th className="text-center">
                  <strong>Mobil</strong><br/>
                  <small>&lt;576px</small>
                </th>
                <th className="text-center">
                <strong>Tablet</strong><br/>
                  <small>≥576px</small>
                </th>
                <th className="text-center">
                <strong>Yatay Tablet</strong><br/>
                  <small>≥768px</small>
                </th>
                <th className="text-center">
                <strong>Laptop</strong><br/>
                  <small>≥992px</small>
                </th>
                <th className="text-center">
                <strong>Geniş Ekran</strong><br/>
                  <small>≥1200px</small>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-left"><code>.container</code></td>
                <td><MutedText>100%</MutedText></td>
                <td>540px</td>
                <td>720px</td>
                <td>960px</td>
                <td>1140px</td>
              </tr>
              <tr>
                <td className="text-left"><code>.container-sm</code></td>
                <td><MutedText>100%</MutedText></td>
                <td>540px</td>
                <td>720px</td>
                <td>960px</td>
                <td>1140px</td>
              </tr>
              <tr>
                <td className="text-left"><code>.container-md</code></td>
                <td><MutedText>100%</MutedText></td>
                <td><MutedText>100%</MutedText></td>
                <td>720px</td>
                <td>960px</td>
                <td>1140px</td>
              </tr>
              <tr>
                <td className="text-left"><code>.container-lg</code></td>
                <td><MutedText>100%</MutedText></td>
                <td><MutedText>100%</MutedText></td>
                <td><MutedText>100%</MutedText></td>
                <td>960px</td>
                <td>1140px</td>
              </tr>
              <tr>
                <td className="text-left"><code>.container-xl</code></td>
                <td><MutedText>100%</MutedText></td>
                <td><MutedText>100%</MutedText></td>
                <td><MutedText>100%</MutedText></td>
                <td><MutedText>100%</MutedText></td>
                <td>1140px</td>
              </tr>
              <tr>
                <td className="text-left"><code>.container-fluid</code></td>
                <td><MutedText>100%</MutedText></td>
                <td><MutedText>100%</MutedText></td>
                <td><MutedText>100%</MutedText></td>
                <td><MutedText>100%</MutedText></td>
                <td><MutedText>100%</MutedText></td>
              </tr>
            </tbody>
          </table>

<SyntaxHighlighter language="html">
{`<div class="container">
  <!-- İçerik buraya -->
</div>

<div class="container-sm">
  <!-- İçerik buraya -->
</div>

<div class="container-md">
  <!-- İçerik buraya -->
</div>

<div class="container-lg">
  <!-- İçerik buraya -->
</div>

<div class="container-xl">
  <!-- İçerik buraya -->
</div>`}
</SyntaxHighlighter>

            <p className="pt-4 mb-1">
              Sayfanın tamamına yayılan bir container isterseniz <code>.container-fluid</code> kullanabilirsiniz.
            </p>

<SyntaxHighlighter language="html">
{`<div class="container-fluid">
  <!-- İçerik buraya -->
</div>`}
</SyntaxHighlighter>
        </section>

        <section>
          <h3>Row</h3>

          <p>
            <code>.row</code> kapsayıcısı içerisindeki <code>.col</code> classlarını sarar ve kapsayıcı dışına taşılmaması için <code>-15px</code> margin-left/right verir; Bunu istemiyorsanız row'un yanına <code>.no-gutters</code> sınıfı ekleyin.
          </p>

<SyntaxHighlighter language="html">
{`<div class="row">
  <!-- Kolonlar buraya -->
</div>

<div class="row no-gutters">
  <!-- Kolonlar buraya -->
</div>`}
</SyntaxHighlighter>
        </section>

        <section>
          <h3>Column</h3>

          <table className="table is-bordered is-striped">
            <thead>
              <tr>
                <th></th>
                <th className="text-center">
                  <strong>Mobil</strong><br/>
                  <small>&lt;576px</small>
                </th>
                <th className="text-center">
                <strong>Tablet</strong><br/>
                  <small>≥576px</small>
                </th>
                <th className="text-center">
                <strong>Yatay Tablet</strong><br/>
                  <small>≥768px</small>
                </th>
                <th className="text-center">
                <strong>Laptop</strong><br/>
                  <small>≥992px</small>
                </th>
                <th className="text-center">
                <strong>Geniş Ekran</strong><br/>
                  <small>≥1200px</small>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Container'ın max genişliği</th>
                <td>100%</td>
                <td>540px</td>
                <td>720px</td>
                <td>960px</td>
                <td>1140px</td>
              </tr>
              <tr>
                <th scope="row">Class kullanımı</th>
                <td><code>.col-</code></td>
                <td><code>.col-sm-</code></td>
                <td><code>.col-md-</code></td>
                <td><code>.col-lg-</code></td>
                <td><code>.col-xl-</code></td>
              </tr>
              <tr>
                <th scope="row">Sütun sayısı</th>
                <td colspan="5">12</td>
              </tr>
              <tr>
                <th scope="row">Kolon arası boşluk</th>
                <td colspan="5">30px (Kolonun iki yanından 15px)</td>
              </tr>
            </tbody>
          </table>

          <GridExample>
            <div className="container-fluid">
              <div className="row">
                <div className="col">
                  col
                </div>
                <div className="col">
                  col
                </div>
                <div className="col">
                  col
                </div>
              </div>
            </div>
          </GridExample>

<SyntaxHighlighter language="html">
{`<div class="container-fluid">
  <div class="row">
    <div class="col">
      ...
    </div>
    <div class="col">
      ...
    </div>
    <div class="col">
      ...
    </div>
  </div>
</div>`}
</SyntaxHighlighter>

          <GridExample>
            <div className="container-fluid mt-5">
              <div className="row">
                <div className="col-6">
                  col-6
                </div>
                <div className="col-4">
                  col-4
                </div>
                <div className="col-2">
                  col-2
                </div>
              </div>
            </div>
          </GridExample>

<SyntaxHighlighter language="html">
{`<div class="container-fluid">
  <div class="row">
    <div class="col-6">
      ...
    </div>
    <div class="col-4">
      ...
    </div>
    <div class="col-2">
      ...
    </div>
  </div>
</div>`}
</SyntaxHighlighter>

          <GridExample>
            <div className="container-fluid mt-5">
              <div className="row">
                <div className="col-12 col-md-8 col-lg-4">col-12 col-md-8 col-lg-4</div>
                <div className="col-12 col-md-4">col-12 col-md-4</div>
                <div className="col-6 col-md-6 col-lg-4">col-6 col-md-6 col-lg-4</div>
                <div className="col-6 col-md-6">col-6 col-md-6</div>
                <div className="col-12 col-lg-4">col-12 col-lg-5</div>
                <div className="col-12 col-lg-2">col-12 col-lg-2</div>
              </div>
            </div>
          </GridExample>

<SyntaxHighlighter language="html">
{`<div class="container">
  <div class="row">
    <div class="col-12 col-md-8 col-lg-4">col-12 col-md-8 col-lg-4</div>
    <div class="col-12 col-md-4">col-12 col-md-4</div>
    <div class="col-6 col-md-6 col-lg-4">col-6 col-md-6 col-lg-4</div>
    <div class="col-6 col-md-6">col-6 col-md-6</div>
    <div class="col-12 col-lg-4">col-12 col-lg-5</div>
    <div class="col-12 col-lg-2">col-12 col-lg-2</div>
  </div>
</div>`}
</SyntaxHighlighter>
        </section>
      </BasePage>
    </>
  )
}

export default App