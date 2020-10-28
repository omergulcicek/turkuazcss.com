import React from "react"
import { Link } from "react-router-dom"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"

import { BasePage } from "../../../components"

export const obj = {
  title: "Text",
  desc: "Hizalama, kalınlık, kesik yazı ayarları",
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
      text: "Text",
      link: "/text"
    }
  ],
  editlink: "documentation/helpers/Text",
  pagination: {
    prev: {
      href: "spacing",
      text: "Spacing"
    }
  }
}

const App = () => {
  return (
    <>
      <BasePage info={obj}>
        <section>
          
        </section>
      </BasePage>
    </>
  )
}

export default App