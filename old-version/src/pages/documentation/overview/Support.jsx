import React from "react"
import { Link } from "react-router-dom"

import { BasePage } from "../../../components"

export const obj = {
  title: "Destek Ol",
  desc: "Projeye nasıl destek olabileceğinizi öğrenin",
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
      text: "Genel Bakış",
      link: "/overview"
    },
    {
      text: "Destek Ol",
      link: "/support"
    }
  ],
  pagination: {
    prev: {
      href: "preview",
      text: "Önizleme"
    },
    next: {
      href: "migration",
      text: "Versiyon Değişiklikleri"
    }
  }
}

const App = () => {
  return (
    <>
      <BasePage info={obj}>
        <section>
          <p>
            Turkuaz, GitHub üzerinden açık kaynak olarak geliştirilmektedir. Gördüğün eksiklikleri, kod hatalarını <a href="https://github.com/omergulcicek/turkuaz/issues" target="_blank" rel="noopener noreferrer">GitHub issue</a>ları ile bize bildirin.
          </p>

          <p>
            Blogunda bizden bahsedebilirsin. Sosyal medya hesabından <strong>#turkuazcss</strong> etiketini kullanarak twit atabilirsin; Turkuaz ile geliştirdiğin bir site varsa <strong>#madewithturkuaz</strong> etiketini kullanmayı unutma! Geliştirdiğiniz siteler, <Link to="/love">sevgi sayfası</Link>nda listelenecektir.
          </p>

          <p>
            İletişime geçmek istiyorsan mail adresimiz <a href="mailto:iletisim@turkuazcss.com?subject=Destek&amp;cc=iletisim@omergulcicek.com">iletisim@turkuazcss.com</a>.
          </p>
        </section>
      </BasePage>
    </>
  )
}

export default App