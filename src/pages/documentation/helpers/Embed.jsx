import React from "react"
import { Link } from "react-router-dom"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"

import { BasePage } from "../../../components"

export const obj = {
  title: "Embed",
  desc: "Herhangi bir cihazda ölçeklenen video yerleştirmeleri",
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
      text: "Embed",
      link: "/embed"
    }
  ],
  editlink: "documentation/helpers/Embed",
  pagination: {
    prev: {
      href: "display",
      text: "Display"
    },
    next: {
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