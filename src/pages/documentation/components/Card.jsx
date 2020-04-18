import React from "react"

import { BasePage, Settings } from "../../../components"

export const obj = {
  title: "Kart",
  desc: "Her yönüyle esnek ve özelleştirilebilir kart bileşenleri",
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
      text: "Kart",
      link: "/card"
    }
  ],
  pagination: {
    prev: {
      href: "breadcrumb",
      text: "Breadcrumb"
    },
    next: {
      href: "dropdown",
      text: "Dropdown"
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