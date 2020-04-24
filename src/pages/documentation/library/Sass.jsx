import React from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"

import { BasePage } from "./../../../components"
import InitialVariables from "./sass/InitialVariables"
import DerivedVariables from "./sass/DerivedVariables"

export const obj = {
  title: "Sass",
  desc: "Sass kullanılarak geliştirilmiş kodlar, değişkenler ve klasör yapısı",
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
      text: "Farklı Platformlar",
      link: "/library"
    },
    {
      text: "Sass",
      link: "/sass"
    }
  ]
}

const App = () => {
  return (
    <>
      <BasePage info={obj}>
        <section>
          <p>
            Turkuaz, SASS kullanılarak geliştirildiği için kolayca özelleştirebilirsin.
          </p>

          <p>
            SASS değişkenlerini ikiye ayırdık; ilki başlangıç değişkenleri, diğeri ise türetilmiş değişkenler.
          </p>

          <p>
            1. <strong>Başlangıç değişkenleri</strong>: Turkuaz'ın kullandığı ana değişkenleri barındırır.

            <div>
              Örneğin: <code>$turquoise: #26a69a</code>, <code>$font-size: 16px</code> vb.
            </div>
          </p>

          <p>
            2. <strong>Türetilmiş değişkenler</strong>: Önceden belirlenmiş başlangıç değişkenlerini esas alırlar.

            <div>
              Örneğin: <code>$primary: $turquoise</code>, <code>$body-size: $font-size</code> vb.
            </div>
          </p>

          <p>
            Turkuaz'ı projene eklemeden önce bu değerleri ihtiyacına göre değiştirmeyi unutma.
          </p>

          <div className="notification is-info">
            Nasıl yapacağın hakkında bilgin yoksa endişelenme, anlatacağız.
          </div>
        </section>
        
        <InitialVariables />

        <DerivedVariables />

        <section>
          <h2>Kullanım</h2>

          <p>
            Aşağıdaki adımları takip ederek Turkuaz'ı özelleştirebilirsin.
          </p>
          
          <ol>
            <li>
              <p>
                1. İlk olarak projenin son halini bilgisayarına klonla
              </p>

              <p>
                Bunun için şu komutu terminalinde çalıştırman gerekecek;
              </p>

              <p>
                <SyntaxHighlighter language="bash">
                  {`git clone git@github.com:omergulcicek/turkuaz.git`}
                </SyntaxHighlighter>
              </p>
            </li>

            <li>
              <p className="mt-4">
                2. Terminalden indirdiğin Turkuaz projesinin klasörüne girip gerekli kurulumların tamamlanması için şu komutu çalıştırman gerekecek;
              </p>

              <p>
                <SyntaxHighlighter language="bash">
                  {`npm install`}
                </SyntaxHighlighter>
              </p>
            </li>

            <li>
              <p className="mt-4">
                3. Artık projeyi ayağa kaldırmaya hazırsın. Terminale <code>gulp</code> yazarak çalıştırabilirsin. 
              </p>
              <p>
                <code>scss/utilities/variables.scss</code> klasörüne girerek SASS değişkenlerine ulaşabilirsin. Herhangi bir dosyayı değiştirdiğinde Gulp yardımıyla Turkuaz projesi ihtiyacınıza göre hazırlanacaktır.
              </p>
              <p>
                Sizin için hazırlanmış olan Turkuaz kodları <code>css/turkuaz.min.css</code> klasörüne yazdırılacaktır.
              </p>
            </li>
          </ol>
        </section>
      </BasePage>
    </>
  )
}

export default App