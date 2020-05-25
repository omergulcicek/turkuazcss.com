import React from "react"
import { Link } from "react-router-dom"

import { BasePage } from "./../components"
import { Theme } from "./../components/Styled"

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
    }
  ]
}

const App = () => {
  return (
    <>
    <BasePage info={obj} />
    <section>
      <div className="row">
        <div className="col-12 col-md-6">
          <Theme>
            <Link to="theme/login-page">
              <figure>
                <img src="https://picsum.photos/800/400" alt="" loading="lazy" />
              </figure>

              <div>
                <h6>Tema Başlığı</h6>

                <p>
                  Kategori • 25 Nisan 2020
                </p>
              </div>
            </Link>
          </Theme>
        </div>
      </div>
    </section>
    </>
  )
}

export default App