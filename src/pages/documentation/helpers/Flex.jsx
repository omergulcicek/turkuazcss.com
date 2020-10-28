import React from "react"
import { Link } from "react-router-dom"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"

import { BasePage } from "../../../components"

export const obj = {
  title: "Flex",
  desc: "Grid kolonlarını, bileşenleri ve daha fazlasının düzenini, hizalanmasını yönetin",
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
      text: "Flex",
      link: "/flex"
    }
  ],
  editlink: "documentation/helpers/Flex",
  pagination: {
    prev: {
      href: "/docs/helpers",
      text: "Yardımcı Kodlar"
    },
    next: {
      href: "border",
      text: "Border"
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