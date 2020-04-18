import React from "react"

import { BasePage, Settings } from "../../../components"

export const obj = {
  title: "Footer",
  desc: "Herhangi bir şey içerebilen basit tasarlanmış footer örnekleri",
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
      text: "Footer",
      link: "/footer"
    }
  ],
  pagination: {
    prev: {
      href: "dropdown",
      text: "Dropdown"
    },
    next: {
      href: "list",
      text: "List"
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