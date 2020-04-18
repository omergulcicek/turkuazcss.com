import React from "react"

import { BasePage, Settings } from "../../../components"

export const obj = {
  title: "Breadcrumb",
  desc: "Navigasyon deneyiminizi geliştirmek için basit bir sayfa konumu bileşeni",
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
      text: "Breadcrumb",
      link: "/breadcrumb"
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