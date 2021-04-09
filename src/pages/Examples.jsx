import React from "react"

import { BasePage } from "./../components"

export const obj = {
  title: "Örnekler",
  desc: "Turkuaz'ın geliştiricileri tarafından oluşturulan <strong>ücretsiz</strong> örnekler",
  breadcrumb: [
    {
      text: "Ana Sayfa",
      link: "/"
    },
    {
      text: "Örnekler",
      link: "/examples"
    }
  ],
  content: [
    {
      text: "Üyelik Formları",
      link: "examples/forms",
      desc: "Oturum açma ve kayıt formları",
      icon: '<svg role="img" viewBox="0 0 448 512" height="40"><path fill="currentColor" d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.65-64-64-64zM224 288c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"></path></svg>'
    },
    {
      text: "Üyelik Formları",
      link: "examples/forms",
      desc: "Oturum açma ve kayıt formları",
      icon: '<svg role="img" viewBox="0 0 448 512" height="40"><path fill="currentColor" d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.65-64-64-64zM128 192c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm192 192c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"></path></svg>'
    },
    {
      text: "Üyelik Formları",
      link: "examples/forms",
      desc: "Oturum açma ve kayıt formları",
      icon: '<svg role="img" viewBox="0 0 448 512" height="40"><path fill="currentColor" d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.65-64-64-64zM128 192c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm96 96c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm96 96c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"></path></svg>'
    }
  ]
}

const App = () => {
  return (
    <>
    <BasePage info={obj} />
    </>
  )
}

export default App