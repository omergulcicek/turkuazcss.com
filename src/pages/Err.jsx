import React from "react"
import { Link } from "react-router-dom"

import { BasePage } from "./../components"

export const obj = {
  title: "Hata - 404",
  desc: "Böyle bir sayfa bulunmamakta :(",
  breadcrumb: [
    {
      text: "Ana Sayfa",
      link: "/"
    },
    {
      text: "404",
      link: "/404"
    }
  ]
}

const App = () => {
  return (
    <>
      <BasePage info={obj}>
        <section>
          <p>
            <Link to="/" className="button is-primary">Ana sayfaya dön</Link>
          </p>

          <p>
            Hangi sayfayı aramıştın?  
          </p>

          <p>
            <Link to="/docs" className="button is-primary is-outline">Dokümantasyon</Link>

            <Link to="/docs/form" className="button is-link">Form</Link>

            <Link to="/docs/elements" className="button is-link">Elementler</Link>

            <Link to="/docs/components" className="button is-link">Bileşenler</Link>
          </p>

          <p>
            Turkuaz'ı farklı platformlarda da kullanabileceğini biliyor muydun?
          </p>

          <p>
            <Link to="/docs/library/sass" className="button is-primary is-outline">Sass</Link>

            <Link to="/docs/library/react" className="button is-primary is-outline">React</Link>

            <Link to="/docs/library/vue" className="button is-primary is-outline">Vue</Link>
          </p>

          <p>
            <a href="https://github.com/omergulcicek/turkuaz"target="_blank" rel="noopener noreferrer">Projeyi star'layarak destek olabilirsin!</a>
          </p>

          <p>
            <Link to="/docs/overview/support">Projeye nasıl destek olabileceğinizi öğrenin</Link>
          </p>
        </section>
      </BasePage>
    </>
  )
}

export default App