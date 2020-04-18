import React from "react"

import { BasePage, Settings } from "../../../components"

export const obj = {
  title: "Delete",
  desc: "Her yerde kullanabileceğin çarpı işareti",
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
      text: "Delete",
      link: "/delete"
    }
  ]
}

export const details = {
  tag: [
    {
      attr: "span",
      value: "span"
    },
    {
      attr: "a",
      value: "a",
    },
    {
      attr: "div",
      value: "div"
    }
  ],
  size: [
    {
      attr: "small",
      value: "is-small"
    },
    {
      attr: "",
      value: ""
    },
    {
      attr: "large",
      value: "is-large"
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