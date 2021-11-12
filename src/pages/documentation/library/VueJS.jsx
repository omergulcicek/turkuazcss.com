import React from "react"

import { BasePage } from "./../../../components"
import { Library } from "./../../../components/Styled"

export const obj = {
  title: "Vue",
  desc: "Vue projelerinizde kullanabilmeniz için geliştirilmiş Turkuaz bileşenleri",
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
      text: "Farklı Platformlar",
      link: "/library"
    },
    {
      text: "Vue",
      link: "/vue"
    }
  ]
}

const App = () => {
  return (
    <>
      <BasePage info={obj}>
        <Library>
          <svg xmlns="http://www.w3.org/2000/Svg" role="img" viewBox="0 0 109.000000 162.000000" height="152"><g transform="translate(0.000000,162.000000) scale(0.100000,-0.100000)" stroke="none" fill="#03968a"><path d="M20 1083 c0 -570 2 -588 61 -706 65 -128 168 -231 295 -295 110 -55 156 -62 433 -62 l251 0 0 38 c0 104 -61 202 -153 245 -44 21 -72 26 -180 30 -106 5 -136 10 -180 30 -76 35 -122 79 -159 155 l-33 67 -5 410 -5 410 -27 47 c-54 91 -152 148 -254 148 l-44 0 0 -517z"></path><path d="M490 1048 c-91 -63 -93 -204 -3 -264 69 -46 223 -38 302 16 25 18 58 49 73 70 27 37 58 132 58 177 l0 23 -199 0 c-189 0 -200 -1 -231 -22z"></path></g></svg>

          <span>+</span>

          <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 2500 2165.1" viewBox="0 0 2500 2165.1" height="128"><path d="m1538.7 0-288.7 500-288.7-500h-961.3l1250 2165.1 1250-2165.1z" fill="#4dba87"/><path d="m1538.7 0-288.7 500-288.7-500h-461.3l750 1299 750-1299z" fill="#435466"/></svg>
        </Library>

        <section>
          <p>
            Turkuaz, en güncel JavaScript kütüphaneleri ile yaptığınız projelere tam uyumlu çalışır.
          </p>

          <p>
            Vue ile geliştirmekte olduğun projeye <strong>vue-turkuaz</strong> paketini dahil ederek, Turkuaz'ın harika bileşenlerini kullanmaya başlayabilirsin. Detaylı doküman için;
          </p>

          <p className="title is-size-4" style={{color: "#f44336"}}>
            Hazır değil.
          </p>

          <p className="mt-2">
            <a className="button" target="_blank" rel="noopener noreferrer" disabled>
              vue.turkuazcss.com
            </a>
          </p>
        </section>
      </BasePage>
    </>
  )
}

export default App