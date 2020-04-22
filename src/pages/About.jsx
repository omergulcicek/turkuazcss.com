import React from "react"
import { Link } from "react-router-dom"

import { BasePage } from "./../components"
import { Turquoise } from "./../components/Styled"

export const obj = {
  title: "Hakkında",
  desc: "Kurucu, marka, projenin nasıl ve neden başladığı hakkında daha fazla bilgi edinin",
  breadcrumb: [
    {
      text: "Ana Sayfa",
      link: "/"
    },
    {
      text: "Hakkında",
      link: "/about"
    }
  ],
  content: [
    {
      text: "Turkuaz'ın Hikayesi",
      link: "/about/turkuaz",
      desc: "Bir framework olan Turkuaz'ın neyle ilgili olduğuna genel bir bakış",
      icon: '<svg xmlns="http://www.w3.org/2000/Svg" role="img" viewBox="0 0 109.000000 162.000000" height="40"><g transform="translate(0.000000,162.000000) scale(0.100000,-0.100000)" stroke="none" fill="#03968a"><path d="M20 1083 c0 -570 2 -588 61 -706 65 -128 168 -231 295 -295 110 -55 156 -62 433 -62 l251 0 0 38 c0 104 -61 202 -153 245 -44 21 -72 26 -180 30 -106 5 -136 10 -180 30 -76 35 -122 79 -159 155 l-33 67 -5 410 -5 410 -27 47 c-54 91 -152 148 -254 148 l-44 0 0 -517z"></path><path d="M490 1048 c-91 -63 -93 -204 -3 -264 69 -46 223 -38 302 16 25 18 58 49 73 70 27 37 58 132 58 177 l0 23 -199 0 c-189 0 -200 -1 -231 -22z"></path></g></svg>'
    },
    {
      text: "Marka Yönergesi",
      link: "/about/brand",
      desc: "",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" height="40"><path fill="#ADB5BD" d="M623.2 192c-51.8 3.5-125.7 54.7-163.1 71.5-29.1 13.1-54.2 24.4-76.1 24.4-22.6 0-26-16.2-21.3-51.9 1.1-8 11.7-79.2-42.7-76.1-25.1 1.5-64.3 24.8-169.5 126L192 182.2c30.4-75.9-53.2-151.5-129.7-102.8L7.4 116.3C0 121-2.2 130.9 2.5 138.4l17.2 27c4.7 7.5 14.6 9.7 22.1 4.9l58-38.9c18.4-11.7 40.7 7.2 32.7 27.1L34.3 404.1C27.5 421 37 448 64 448c8.3 0 16.5-3.2 22.6-9.4 42.2-42.2 154.7-150.7 211.2-195.8-2.2 28.5-2.1 58.9 20.6 83.8 15.3 16.8 37.3 25.3 65.5 25.3 35.6 0 68-14.6 102.3-30 33-14.8 99-62.6 138.4-65.8 8.5-.7 15.2-7.3 15.2-15.8v-32.1c.2-9.1-7.5-16.8-16.6-16.2z" class=""></path></svg>'
    }
  ]
}

const App = () => {
  return (
    <BasePage info={obj}>
      <section>
        <p>
          Turkuaz, web sitesi oluşturmak için geliştirilen bir CSS kütüphanesidir. Nisan 2016'da <a href="https://github.com/omergulcicek" target="_blank" rel="noopener noreferrer">@omergulcicek</a> tarafından <a href="https://github.com/omergulcicek/turkuaz" target="_blank" rel="noopener noreferrer">GitHub</a>'ta açık kaynak olarak geliştirilmeye başlanmıştır. İsmini Türk rengi olarakta bilinen <strong><Turquoise>Turkuaz</Turquoise></strong> renginden alır.
        </p>
        <p>
          Kolayca özelleştirilebilen şık bileşenlerinin yanı sıra, Türkçe dokümantasyonu sayesinde hızlıca geliştirmeye odaklanabileceksiniz. Yüzlerce kod örneği ve her zaman ücretsiz kalacak <Link to="/theme">tema</Link> seçenekleri bulunmaktadır.
        </p>
        <p>
          Turkuaz, yalnızca CSS içerir. CSS kütüphanesi olmasının yanı sıra React ve Vue desteği vardır. Tüm bu projeler GitHub'ta açık kaynak olarak geliştirilmekte olup, destek olmak isteyen tüm yazılımcıların katkısına açıktır (<em><Link to="/docs/overview/support">detaylı bilgi</Link></em>).
        </p>
        <p>
          Projenin başlangıç fikri, hangi kararlar alınarak yol haritasının değiştiği ve gelecek adımları ile ilgili detaylı bilgi için <Link to="/about/turkuaz">Turkuaz'ın Hikayesi</Link>ni okuyabilirsiniz.
        </p>
      </section>
    </BasePage>
  )
}

export default App