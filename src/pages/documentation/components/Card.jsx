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