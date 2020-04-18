import React from "react"

import { BasePage, Settings } from "../../../components"

export const obj = {
  title: "Media",
  desc: "",
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
      text: "Media",
      link: "/media"
    }
  ],
  pagination: {
    prev: {
      href: "list",
      text: "List"
    },
    next: {
      href: "modal",
      text: "Modal"
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