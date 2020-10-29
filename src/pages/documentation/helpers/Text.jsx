import React from "react"
import { Link } from "react-router-dom"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"

import { BasePage } from "../../../components"

export const obj = {
  title: "Text",
  desc: "Hizalama, kalınlık, kesik yazı ayarları",
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
      text: "Yardımcı Kodlar",
      link: "/helpers"
    },
    {
      text: "Text",
      link: "/text"
    }
  ],
  editlink: "documentation/helpers/Text",
  pagination: {
    prev: {
      href: "spacing",
      text: "Spacing"
    }
  }
}

const App = () => {
  return (
    <>
      <BasePage info={obj}>
        <section>
          <p className="text-left">
            <code>text-left</code> Bu yazı sola hizalıdır.
          </p>
          <p className="text-right">
            <code>text-right</code> Bu yazı sağa hizalıdır.
          </p>
          <p className="text-center">
            <code>text-center</code> Bu yazı ortaya hizalıdır.
          </p>
          <p className="text-justified">
            <code>text-justified</code> Bu yazı sağa ve sola tam olarak yaslanır, kelimelerin arasındaki boşluk artar. Bu yazı sağa ve sola tam olarak yaslanır, kelimelerin arasındaki boşluk artar. Bu yazı sağa ve sola tam olarak yaslanır, kelimelerin arasındaki boşluk artar. Bu yazı sağa ve sola tam olarak yaslanır, kelimelerin arasındaki boşluk artar.Bu yazı sağa ve sola tam olarak yaslanır, kelimelerin arasındaki boşluk artar.
          </p>
          <p className="text-truncate">
            <code>text-truncate</code> Bu yazı kapsayıcısına sığmazsa sonuna üç nokta eklenecektir. Bu yazı kapsayıcısına sığmazsa sonuna üç nokta eklenecektir. Bu yazı kapsayıcısına sığmazsa sonuna üç nokta eklenecektir. Bu yazı kapsayıcısına sığmazsa sonuna üç nokta eklenecektir.
          </p>
          <p className="text-lowercase">
            <code>text-lowercase</code> Bu yazının harfleri küçültülür.
          </p>
          <p className="text-uppercase">
            <code>text-uppercase</code> Bu yazının harfleri büyültülür.
          </p>
          <p className="text-capitalize">
            <code>text-capitalize</code> Bu yazının her kelimenin baş harfleri büyültülür.
          </p>
          <p className="line-clamp-2">
            <code>line-clamp-2</code> Bu paragraf 2 satırdan sonra taşmayacak ve sonuna ... eklenecektir. Bu paragraf 2 satırdan sonra taşmayacak ve sonuna ... eklenecektir. Bu paragraf 2 satırdan sonra taşmayacak ve sonuna ... eklenecektir.Bu paragraf 2 satırdan sonra taşmayacak ve sonuna ... eklenecektir.
          </p>

<SyntaxHighlighter language="html">
{`<div class="text-left">...</div>
<div class="text-right">...</div>
<div class="text-center">...</div>
<div class="text-justified">...</div>
<div class="text-truncate">...</div>
<div class="text-lowercase">...</div>
<div class="text-uppercase">...</div>
<div class="text-line-clamp-0">...</div>
<div class="text-line-clamp-1">...</div>
<div class="text-line-clamp-2">...</div>
<div class="text-line-clamp-3">...</div>`}
</SyntaxHighlighter>

          <p className="mt-4">
            Çözünürlüğe göre değişken text yazdımcı sınıfları için, sınıf adının sonuna <code>-sm</code>, <code>-md</code>, <code>-lg</code> yada <code>-xl</code> ekleyebilirsiniz. Sadece <code>text-left</code>,  <code>text-right</code>,  <code>text-center</code> ve <code>text-line-clamp</code> sınıfları için geçerlidir.
          </p>

          <p>
            Örneğin; <code>text-center-lg</code>, <code>line-clamp-2-md</code>, <code>text-left-sm</code>.
          </p>
        </section>
      </BasePage>
    </>
  )
}

export default App