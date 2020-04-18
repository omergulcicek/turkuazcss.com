import React from "react"

import { BasePage, Settings } from "../../../components"

export const obj = {
  title: "Divider",
  desc: "Tasarımınızı bölümlere ayırmak için dikey veya yatay bir ayırıcı",
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
      text: "Divider",
      link: "/divider"
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