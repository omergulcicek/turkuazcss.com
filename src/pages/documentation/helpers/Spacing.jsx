import React from "react"

import { BasePage } from "../../../components"
import { SpacingExample } from "../../../components/Styled"

export const obj = {
  title: "Spacing",
  desc: "Hızlıca margin ve padding boşluklarını ekleyin",
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
      text: "Spacing",
      link: "/spacing"
    }
  ],
  editlink: "documentation/helpers/Spacing",
  pagination: {
    prev: {
      href: "embed",
      text: "Embed"
    },
    next: {
      href: "text",
      text: "Text"
    }
  }
}

const App = () => {
  return (
    <>
      <BasePage info={obj}>
        <section>

        <p className="mb-1">
            Margin yada padding yapmak için öncelikle ön ek kullanılır;
          </p>

          <ul>
            <li><code>m</code>: <code>margin</code> için</li>

            <li><code>p</code>: <code>padding</code> için</li>
          </ul>

          <p className="mb-1">
            Ardından yön belirtilir;
          </p>

          <ul>
            <li><code>t</code>: top (üst) için</li>
            <li><code>b</code>: bottom (alt) için</li>
            <li><code>r</code>: right (sağ) için</li>
            <li><code>l</code>: left (sol) için</li>
            <li><code>x</code>: sağ ve sol için</li>
            <li><code>y</code>: üst ve alt için</li>
          </ul>

          <p className="mb-1">
            Son olarak mesafe ayarlanır;
          </p>

          <ul>
            <li><code>-0</code>: 0px</li>
            <li><code>-1</code>: 4px</li>
            <li><code>-2</code>: 8px</li>
            <li><code>-3</code>: 16px</li>
            <li><code>-4</code>: 24px</li>
            <li><code>-5</code>: 48px</li>
          </ul>

          <h4 className="mt-5">Örnek Kullanım</h4>
          
          <SpacingExample>
            <div>
              <div className="border mr-0">mr-0</div>
              <div className="border">0px</div>
            </div>
            <div>
              <div className="border mr-1">mr-1</div>
              <div className="border">4px</div>
            </div>
            <div>
              <div className="border mr-2">mr-2</div>
              <div className="border">8px</div>
            </div>
            <div>
              <div className="border mr-3">mr-3</div>
              <div className="border">16px</div>
            </div>
            <div>
              <div className="border mr-4">mr-4</div>
              <div className="border">24px</div>
            </div>
            <div>
              <div className="border mr-5">mr-5</div>
              <div className="border">48px</div>
            </div>
          </SpacingExample>
        </section>
      </BasePage>
    </>
  )
}

export default App