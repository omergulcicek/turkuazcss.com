import React from "react"

import { BasePage } from "../../../components"
import { MigrationArticle } from "./../../../components/Styled"

export const obj = {
  title: "Versiyon Değişikliği",
  desc: "Eski versiyonlar ve yeni versiyona geçerken dikkat etmeniz gerekenler",
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
      text: "Versiyon Değişikliği",
      link: "/migration"
    }
  ],
  pagination: {
    prev: {
      href: "support",
      text: "Destek Ol"
    },
    next: {
      href: "/docs/form",
      text: "Form"
    }
  }
}

const App = () => {
  return (
    <BasePage info={obj}>
      <section>
        {
        /*
        <MigrationArticle>
          <h2>v1.0.0</h2>

          <ol>
            <li>Turkuaz ilk versiyonu yayınlandı.</li>
          </ol>
        </MigrationArticle>
        */
        }
      </section>
    </BasePage>
  )
}

export default App