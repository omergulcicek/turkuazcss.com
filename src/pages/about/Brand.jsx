import React from "react"

import { BasePage } from "../../components"
import { TurquoiseColor } from "../../components/Styled"

export const obj = {
  title: "Marka Yönergesi",
  desc: "Turkuaz logosu, markanın doğru kullanımı, kullanılan renkler ve çeşitli bilgiler",
  breadcrumb: [
    {
      text: "Ana Sayfa",
      link: "/"
    },
    {
      text: "Hakkında",
      link: "/about"
    },
    {
      text: "Marka Yönergesi",
      link: "/brand"
    }
  ]
}

const App = () => {
  return (
    <>
      <BasePage info={obj}>
        <section>
          <h2>Logo</h2>

          <div className="row">
            <div className="col-12 col-md-8">
              <p>
                Turkuaz <a href="https://www.dafont.com/danube.font"  target="_blank" rel="noopener noreferrer">Danube yazı tipi</a>nin küçük ve kalın <strong>t</strong> harfini logo olarak kullanır.
              </p>
              <p>
                Baskı için <a href="!#"  target="_blank" rel="noopener noreferrer">.EPS</a>, yayıncılık ve web için <a href="!#"  target="_blank" rel="noopener noreferrer">.SVG </a> yada <a href="!#"  target="_blank" rel="noopener noreferrer">.PNG</a> formatında indirilebilirsin.
              </p>
              <template>
                //TODO: Logonun farklı çözünürlük ve formatlarda hazırlanması için destek alınacak.
              </template>
            </div>

            <div className="col-12 col-md-4">
              <p>
                <svg role="img" viewBox="0 0 109.000000 162.000000" height="128"><g transform="translate(0.000000,162.000000) scale(0.100000,-0.100000)" stroke="none" fill="#03968a"><path d="M20 1083 c0 -570 2 -588 61 -706 65 -128 168 -231 295 -295 110 -55 156 -62 433 -62 l251 0 0 38 c0 104 -61 202 -153 245 -44 21 -72 26 -180 30 -106 5 -136 10 -180 30 -76 35 -122 79 -159 155 l-33 67 -5 410 -5 410 -27 47 c-54 91 -152 148 -254 148 l-44 0 0 -517z"></path><path d="M490 1048 c-91 -63 -93 -204 -3 -264 69 -46 223 -38 302 16 25 18 58 49 73 70 27 37 58 132 58 177 l0 23 -199 0 c-189 0 -200 -1 -231 -22z"></path></g></svg>
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2>İsim</h2>

          <p>
            Projenin <strong>Turkuaz</strong> adıyla fakat sosyal medya etiketlerinde farkedilebilmesi için <strong>#turkuazcss</strong> olarak adlandırılmasını tercih ediyoruz.
          </p>
        </section>

        <section>
          <h2>Renk</h2>

          <p>
            Turkuaz, <TurquoiseColor>#03968a</TurquoiseColor> renk tonunu kullanır.
          </p>
        </section>
      </BasePage>
    </>
  )
}

export default App