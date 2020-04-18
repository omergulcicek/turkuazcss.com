import React from "react"

import { BasePage, Settings } from "../../../components"

export const obj = {
  title: "Dropdown",
  desc: "Etkileşimli bir açılır menü",
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
      text: "Bileşenler",
      link: "/components"
    },
    {
      text: "Dropdown",
      link: "/dropdown"
    }
  ],
  pagination: {
    prev: {
      href: "card",
      text: "Card"
    },
    next: {
      href: "footer",
      text: "Footer"
    }
  }
}

const App = () => {
  return (
    <>
    <BasePage info={obj} />
    
    <Settings>
      <aside>
        
        <pre>
          
        <div dangerouslySetInnerHTML={{ __html: `` }} />

        </pre>
      </aside>

      <aside>
      </aside>
    </Settings>
    </>
  )
}

export default App