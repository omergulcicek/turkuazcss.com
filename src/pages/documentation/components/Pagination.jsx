import React from "react"

import { BasePage, Settings } from "../../../components"

export const obj = {
  title: "Pagination",
  desc: "Responsive ve esnek tasarlanmış farklı çeşitlerde ki sayfalandırma bileşeni",
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
      text: "Pagination",
      link: "/pagination"
    }
  ],
  pagination: {
    prev: {
      href: "navbar",
      text: "Navbar"
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