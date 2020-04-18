import React from "react"

import { BasePage, Settings } from "../../../components"

export const obj = {
  title: "Badge",
  desc: "Minik uyarılar için geliştirilmiş rozetler",
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
      text: "Elementler",
      link: "/elements"
    },
    {
      text: "Badge",
      link: "/badge"
    }
  ]
}

const App = () => {
  return (
    <>
    <BasePage content={obj} />
    
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