import React from "react"
import { Link } from "react-router-dom"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"

import { BasePage } from "../../../components"

export const obj = {
  title: "Border",
  desc: "Bir elementin sınırlarına kenarlık ekleyin yada kaldırın",
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
      text: "Border",
      link: "/border"
    }
  ],
  editlink: "documentation/helpers/Border",
  pagination: {
    prev: {
      href: "flex",
      text: "Flex"
    },
    next: {
      href: "display",
      text: "Display"
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