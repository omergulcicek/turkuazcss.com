import React from "react"
import { Link } from "react-router-dom"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"

import { BasePage } from "../../../components"
import { FlexExample, FlexExample2, FlexExample3 } from "../../../components/Styled"

export const obj = {
  title: "Flex",
  desc: "Grid kolonlarını, bileşenleri ve daha fazlasının düzenini, hizalanmasını yönetin",
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
      text: "Flex",
      link: "/flex"
    }
  ],
  editlink: "documentation/helpers/Flex",
  pagination: {
    prev: {
      href: "/docs/helpers",
      text: "Yardımcı Kodlar"
    },
    next: {
      href: "border",
      text: "Border"
    }
  }
}

const App = () => {
  return (
    <>
      <BasePage info={obj}>
        <section>
          <h3>Justify Content</h3>

          <p>
            Yatayda içeriğinizi konumlandırmak için <code>is-justify-{`{x}`}</code> yardımcı sınıflarını kullanın.
          </p>

          <FlexExample>
            <div className="is-flex is-justify-start mb-3">
              <span>is-justify-start</span>
              <span>is-justify-start</span>
              <span>is-justify-start</span>
            </div>

            <div className="is-flex is-justify-end mb-3">
              <span>is-justify-end</span>
              <span>is-justify-end</span>
              <span>is-justify-end</span>
            </div>

            <div className="is-flex is-justify-center mb-3">
              <span>is-justify-center</span>
              <span>is-justify-center</span>
              <span>is-justify-center</span>
            </div>

            <div className="is-flex is-justify-between mb-3">
              <span>is-justify-between</span>
              <span>is-justify-between</span>
              <span>is-justify-between</span>
            </div>

            <div className="is-flex is-justify-around mb-3">
              <span>is-justify-around</span>
              <span>is-justify-around</span>
              <span>is-justify-around</span>
            </div>

            <div className="is-flex is-justify-evenly mb-3">
              <span>is-justify-evenly</span>
              <span>is-justify-evenly</span>
              <span>is-justify-evenly</span>
            </div>
          </FlexExample>

          <SyntaxHighlighter language="html">
{`<div class="is-flex is-justify-start">...</div>
<div class="is-flex is-justify-end">...</div>
<div class="is-flex is-justify-center">...</div>
<div class="is-flex is-justify-between">...</div>
<div class="is-flex is-justify-around">...</div>
<div class="is-flex is-justify-evenly">...</div>`}
          </SyntaxHighlighter>

          <div className="notification is-info mt-3">
            Flex yardımcı sınıflarını kullanabilmeniz için kapsayıcı elementin flex olması gerekiyor (<Link to="display">Bknz: detaylı bilgi</Link>).
          </div>

          <p>
            Farklı çözünürlüklerde farklı flex yardımcı sınıflarına ihtiyaçlarınız varsa yardımcı sınıfın sonuna çözünürlük uzantısını yazmanız yeterlidir.
          </p>

          <p className="mb-1">
            <code className="mr-1">is-justify-start</code>
            <code className="mr-1">is-justify-end</code>
            <code className="mr-1">is-justify-center</code>
            <code className="mr-1">is-justify-between</code>
            <code className="mr-1">is-justify-around</code>
            <code className="mr-1">is-justify-evenly</code>
          </p>
          
          <p className="mb-1">
            <code className="mr-1">is-justify-start-sm</code>
            <code className="mr-1">is-justify-end-sm</code>
            <code className="mr-1">is-justify-center-sm</code>
            <code className="mr-1">is-justify-between-sm</code>
            <code className="mr-1">is-justify-around-sm</code>
            <code className="mr-1">is-justify-evenly-sm</code>
          </p>

          <p className="mb-1">
            <code className="mr-1">is-justify-start-md</code>
            <code className="mr-1">is-justify-center-md</code>
            <code className="mr-1">is-justify-end-md</code>
            <code className="mr-1">is-justify-between-md</code>
            <code className="mr-1">is-justify-around-md</code>
            <code className="mr-1">is-justify-evenly-md</code>
          </p>

          <p className="mb-1">
            <code className="mr-1">is-justify-start-lg</code>
            <code className="mr-1">is-justify-end-lg</code>
            <code className="mr-1">is-justify-center-lg</code>
            <code className="mr-1">is-justify-around-lg</code>
            <code className="mr-1">is-justify-between-lg</code>
            <code className="mr-1">is-justify-evenly-lg</code>
          </p>

          <p className="mb-0">
            <code className="mr-1">is-justify-start-xl</code>
            <code className="mr-1">is-justify-end-xl</code>
            <code className="mr-1">is-justify-center-xl</code>
            <code className="mr-1">is-justify-between-xl</code>
            <code className="mr-1">is-justify-around-xl</code>
            <code className="mr-1">is-justify-evenly-xl</code>
          </p>
        </section>

        <section>
          <h3>Align items</h3>

          <p>
            Dikeyde içeriğinizi konumlandırmak için <code>is-align-{`{x}`}</code> yardımcı sınıflarını kullanın.
          </p>

          <FlexExample2>
            <div className="is-flex is-align-start mb-3">
              <span>is-align-start</span>
              <span>is-align-start</span>
              <span>is-align-start</span>
            </div>

            <div className="is-flex is-align-end mb-3">
              <span>is-align-end</span>
              <span>is-align-end</span>
              <span>is-align-end</span>
            </div>

            <div className="is-flex is-align-center mb-3">
              <span>is-align-center</span>
              <span>is-align-center</span>
              <span>is-align-center</span>
            </div>

            <div className="is-flex is-align-baseline mb-3">
              <span> is-align-baseline</span>
              <span> is-align-baseline</span>
              <span> is-align-baseline</span>
            </div>

            <div className="is-flex is-align-stretch mb-3">
              <span>is-align-stretch</span>
              <span>is-align-stretch</span>
              <span>is-align-stretch</span>
            </div>
          </FlexExample2>

          <SyntaxHighlighter language="html">
{`<div class="is-flex is-align-start">...</div>
<div class="is-flex is-align-end">...</div>
<div class="is-flex is-align-center">...</div>
<div class="is-flex is-align-baseline">...</div>
<div class="is-flex is-align-stretch">...</div>`}
          </SyntaxHighlighter>

          <div className="notification is-info mt-3">
            Flex yardımcı sınıflarını kullanabilmeniz için kapsayıcı elementin flex olması gerekiyor (<Link to="display">Bknz: detaylı bilgi</Link>).
          </div>

          <p>
            Farklı çözünürlüklerde farklı flex yardımcı sınıflarına ihtiyaçlarınız varsa yardımcı sınıfın sonuna çözünürlük uzantısını yazmanız yeterlidir.
          </p>

          <p className="mb-1">
            <code className="mr-1">is-align-start</code>
            <code className="mr-1">is-align-end</code>
            <code className="mr-1">is-align-center</code>
            <code className="mr-1">is-align-baseline</code>
            <code className="mr-1">is-align-stretch</code>
          </p>

          <p className="mb-1">
            <code className="mr-1">is-align-start-sm</code>
            <code className="mr-1">is-align-end-sm</code>
            <code className="mr-1">is-align-center-sm</code>
            <code className="mr-1">is-align-baseline-sm</code>
            <code className="mr-1">is-align-stretch-sm</code>
          </p>

          <p className="mb-1">
            <code className="mr-1">is-align-start-md</code>
            <code className="mr-1">is-align-end-md</code>
            <code className="mr-1">is-align-center-md</code>
            <code className="mr-1">is-align-baseline-md</code>
            <code className="mr-1">is-align-stretch-md</code>
          </p>
          
          <p className="mb-1">
            <code className="mr-1">is-align-start-lg</code>
            <code className="mr-1">is-align-end-lg</code>
            <code className="mr-1">is-align-center-lg</code>
            <code className="mr-1">is-align-baseline-lg</code>
            <code className="mr-1">is-align-stretch-lg</code>
          </p>
          
          <p className="mb-0">
            <code className="mr-1">is-align-start-xl</code>
            <code className="mr-1">is-align-end-xl</code>
            <code className="mr-1">is-align-center-xl</code>
            <code className="mr-1">is-align-baseline-xl</code>
            <code className="mr-1">is-align-stretch-xl</code>
          </p>
        </section>
      
        <section>
          <h3>Align self</h3>

          <p>
            Dikeyde sadece belli bir içeriğinizi konumlandırmak için <code>is-align-self-{`{x}`}</code> yardımcı sınıflarını kullanın.
          </p>

          <FlexExample2>
            <div className="is-flex mb-3">
              <span>Flex item</span>
              <span className="is-align-self-start">is-align-self-start</span>
              <span>Flex item</span>
            </div>

            <div className="is-flex mb-3">
              <span>Flex item</span>
              <span className="is-align-self-end">is-align-self-end</span>
              <span>Flex item</span>
            </div>

            <div className="is-flex  mb-3">
              <span>Flex item</span>
              <span className="is-align-self-center">is-align-self-center</span>
              <span>Flex item</span>
            </div>

            <div className="is-flex mb-3">
              <span>Flex item</span>
              <span className="is-align-self-baseline">is-align-self-baseline</span>
              <span>Flex item</span>
            </div>

            <div className="is-flex is-align-end mb-3">
              <span>Flex item</span>
              <span className="is-align-self-stretch">is-align-self-stretch</span>
              <span>Flex item</span>
            </div>
          </FlexExample2>

          <SyntaxHighlighter language="html">
{`<div class="is-flex is-align-self-start">...</div>
<div class="is-flex is-align-self-end">...</div>
<div class="is-flex is-align-self-center">...</div>
<div class="is-flex is-align-self-baseline">...</div>
<div class="is-flex is-align-self-stretch">...</div>`}
          </SyntaxHighlighter>

          <div className="notification is-info mt-3">
            Flex yardımcı sınıflarını kullanabilmeniz için kapsayıcı elementin flex olması gerekiyor (<Link to="display">Bknz: detaylı bilgi</Link>).
          </div>

          <p>
            Farklı çözünürlüklerde farklı flex yardımcı sınıflarına ihtiyaçlarınız varsa yardımcı sınıfın sonuna çözünürlük uzantısını yazmanız yeterlidir.
          </p>

          <p className="mb-1">
            <code className="mr-1">is-align-self-start</code>
            <code className="mr-1">is-align-self-end</code>
            <code className="mr-1">is-align-self-center</code>
            <code className="mr-1">is-align-self-baseline</code>
            <code className="mr-1">is-align-self-stretch</code>
          </p>

          <p className="mb-1">
            <code className="mr-1">is-align-self-start-sm</code>
            <code className="mr-1">is-align-self-end-sm</code>
            <code className="mr-1">is-align-self-center-sm</code>
            <code className="mr-1">is-align-self-baseline-sm</code>
            <code className="mr-1">is-align-self-stretch-sm</code>
          </p>

          <p className="mb-1">
            <code className="mr-1">is-align-self-start-md</code>
            <code className="mr-1">is-align-self-end-md</code>
            <code className="mr-1">is-align-self-center-md</code>
            <code className="mr-1">is-align-self-baseline-md</code>
            <code className="mr-1">is-align-self-stretch-md</code>
          </p>
          
          <p className="mb-1">
            <code className="mr-1">is-align-self-start-lg</code>
            <code className="mr-1">is-align-self-end-lg</code>
            <code className="mr-1">is-align-self-center-lg</code>
            <code className="mr-1">is-align-self-baseline-lg</code>
            <code className="mr-1">is-align-self-stretch-lg</code>
          </p>
          
          <p className="mb-1">
            <code className="mr-1">is-align-self-start-xl</code>
            <code className="mr-1">is-align-self-end-xl</code>
            <code className="mr-1">is-align-self-center-xl</code>
            <code className="mr-1">is-align-self-baseline-xl</code>
            <code className="mr-1">is-align-self-stretch-xl</code>
          </p>
        </section>

        <section>
          <h3>Wrap</h3>

          <p>
            İçeriğin nasıl sarıldığını değiştirin. <code>is-flex-wrap</code> içeriği sararken, <code>is-flex-nowrap</code> ise serbest bırakır.
          </p>

          <FlexExample3>
            <div className="is-flex is-flex-nowrap mb-3">
              <span>is-flex-nowrap</span>
              <span>is-flex-nowrap</span>
              <span>is-flex-nowrap</span>
              <span>is-flex-nowrap</span>
              <span>is-flex-nowrap</span>
            </div>

            <div className="is-flex is-flex-wrap mb-3">
              <span>is-flex-wrap</span>
              <span>is-flex-wrap</span>
              <span>is-flex-wrap</span>
              <span>is-flex-wrap</span>
              <span>is-flex-wrap</span>
            </div>
          </FlexExample3>

          <SyntaxHighlighter language="html">
{`<div class="is-flex is-flex-nowrap">...</div>
<div class="is-flex is-flex-wrap">...</div>`}
          </SyntaxHighlighter>

          <div className="notification is-info mt-3">
            Flex yardımcı sınıflarını kullanabilmeniz için kapsayıcı elementin flex olması gerekiyor (<Link to="display">Bknz: detaylı bilgi</Link>).
          </div>
        </section>
      </BasePage>
    </>
  )
}

export default App