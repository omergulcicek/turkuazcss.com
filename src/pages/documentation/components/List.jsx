import React from "react"

import { BasePage, Settings } from "../../../components"

export const obj = {
  title: "Liste",
  desc: "Sade görüntüsü ile linkleri listelemenin kolay yolu",
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
      text: "Liste",
      link: "/list"
    }
  ],
  pagination: {
    prev: {
      href: "footer",
      text: "Footer"
    },
    next: {
      href: "media",
      text: "Media"
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