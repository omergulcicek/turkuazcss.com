import React from "react"

import { BasePage, Settings } from "../../../components"

export const obj = {
  title: "Tooltip",
  desc: "Üzerine gelindiğinde görünebilen farklı konumlardaki kısa yazılar",
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
      text: "Tooltip",
      link: "/tooltip"
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