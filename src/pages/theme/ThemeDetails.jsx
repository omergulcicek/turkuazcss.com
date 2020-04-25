import React from "react"
import articleTimeAgo from "article-time-ago"

import { BasePage } from "./../../components"
import { ThemeDetail } from "./../../components/Styled"

export const obj = {
  title: "Tema",
  desc: "Turkuaz'ın geliştiricileri tarafından oluşturulan <strong>ücretsiz</strong> temalar",
  breadcrumb: [
    {
      text: "Ana Sayfa",
      link: "/"
    },
    {
      text: "Tema",
      link: "/theme"
    },
    {
      text: "Tema Adı",
      link: "/tema-adi"
    }
  ]
}

const App = () => {
  return (
    <BasePage info={obj}>
      <ThemeDetail>
        <div className="row">
          <div className="col-12 col-lg-8">
            <article>
              <figure>
                <img src="https://picsum.photos/1200/600" alt="Tema Başlığı"/>
              </figure>

              <a href="!#">
                <div>
                  <span className="button">Siteyi Aç</span>
                </div>
              </a>
            </article>
          </div>

          <div className="col-12 col-lg-4">
            <ol>
              <li>
                <span>Turkuaz</span>
                <span>v1.0.0</span>
              </li>

              <li>
                <span>Yayılandı</span>
                <span className="tooltip" data-content="15 Ağustos 2019">
                  {articleTimeAgo.date("2019.08.15")}
                </span>
              </li>

              <li>
                <span>Versiyon</span>
                <span>1.0.3</span>
              </li>

              <li>
                <span>Geliştirici</span>
                <a href="https://omergulcicek.com/" target="_blank" rel="noopener noreferrer">Ömer Gülçiçek</a>
              </li>

              <li>
                <a href="" className="button is-small is-info">
                  Siteyi Aç
                </a>
                <a href="" className="button is-small is-primary is-outline">
                  Ücretsiz İndir
                </a>
              </li>
            </ol>
          </div>
        </div>
      </ThemeDetail>
    </BasePage>
  )
}

export default App