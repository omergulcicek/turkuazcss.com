import React from "react"
import { Link } from "react-router-dom"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"

import { BasePage } from "../../../components"

export const obj = {
  title: "Display",
  desc: "Bir elemanın görüntü değerini değiştirin",
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
      text: "Display",
      link: "/display"
    }
  ],
  editlink: "documentation/helpers/Display",
  pagination: {
    prev: {
      href: "border",
      text: "Border"
    },
    next: {
      href: "embed",
      text: "Embed"
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