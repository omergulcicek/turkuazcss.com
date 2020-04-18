import React from "react"

import { BasePage, Settings } from "../../../components"

export const obj = {
  title: "Navbar",
  desc: "Resim, link, buton ve dropdown destekleyebilen duyarlı menü",
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
      text: "Navbar",
      link: "/navbar"
    }
  ],
  pagination: {
    prev: {
      href: "modal",
      text: "Modal"
    },
    next: {
      href: "pagination",
      text: "Pagination"
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