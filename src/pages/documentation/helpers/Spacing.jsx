import React from "react"
import { Link } from "react-router-dom"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"

import { BasePage } from "../../../components"

export const obj = {
  title: "Spacing",
  desc: "Hızlıca margin ve padding boşluklarını ekleyin",
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
      text: "Spacing",
      link: "/spacing"
    }
  ],
  editlink: "documentation/helpers/Spacing",
  pagination: {
    prev: {
      href: "embed",
      text: "Embed"
    },
    next: {
      href: "text",
      text: "Text"
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