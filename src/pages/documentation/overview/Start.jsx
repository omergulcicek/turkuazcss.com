import React from "react"
import { Link } from "react-router-dom"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"

import { BasePage } from "../../../components"

export const obj = {
  title: "Kurulum",
  desc: "Projenize uygun Turkuaz paketini nasıl kullanacağınıza ait bilgiler",
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
      text: "Genel Bakış",
      link: "/overview"
    },
    {
      text: "Kurulum",
      link: "/start"
    }
  ],
  pagination: {
    prev: {
      href: "/docs/overview",
      text: "Genel Bakış"
    },
    next: {
      href: "preview",
      text: "Önizleme"
    }
  }
}

const App = () => {
  return (
    <>
      <BasePage info={obj}>
        <section>
          <h3>CSS</h3>

          <p>
            CSS dosyasımızı diğer tüm stil dosyalarından önce <code>{`<head>`}</code>'e ekleyin.
          </p>

          <p>
            <SyntaxHighlighter language="html">
            {`<link rel="stylesheet" href="css/turkuaz.min.css">`}
          </SyntaxHighlighter>
          </p>

          <p>
            <a href="" className="button is-primary">İndir (v1.0.0)</a>
            <a href="https://github.com/omergulcicek/turkuaz/releases" target="_blank" rel="noopener noreferrer" className="button is-secondary">Eski sürümler</a>
          </p>
        </section>
        
        <section>
          <h3>Başlangıç Şablonu</h3>

          <p>
            HTML5 standartlarına göre hazırlanmış kodları kullanarak sayfanı hızlıca geliştirmeye başlayabilirsin.
          </p>

          <p>
            <SyntaxHighlighter language="html">
            {
`<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <title>Turkuaz</title>
  <link rel="stylesheet" href="css/turkuaz.min.css">
</head>
<body>
  <section>
    <h1>Merhaba Dünya</h1>
    <p>
      Merhaba, bu benim <strong>Turkuaz</strong> ile ilk sitem!
    </p>
  </section>
</body>
</html>`
            }
            </SyntaxHighlighter>
          </p>

          <p>
            <a href="" className="button is-primary is-outline">Başlangıç şablonunu indir</a>
          </p>
        </section>
        
        <section>
          <h3>CDN</h3>

          <p>
            <SyntaxHighlighter>
              {`https://cdnjs.cloudflare.com/ajax/libs/turkuaz/1.0.0/turkuaz.min.css`}
            </SyntaxHighlighter>
          </p>
        </section>
        
        <section>
          <h3>npm</h3>

          <p>
            Turkuaz'ı, <a href="https://www.npmjs.com/package/turkuaz" target="_blank" rel="noopener noreferrer">npm paketi</a> ile yükleyebilirsin.
          </p>

          <SyntaxHighlighter language="bash">
            {`npm install turkuaz`}
          </SyntaxHighlighter>
        </section>

        <section>
          <h3>yarn</h3>

          <p>
            Turkuaz'ı, <a href="https://yarnpkg.com/tr/package/turkuaz" target="_blank" rel="noopener noreferrer">yarn paketi</a> ile yükleyebilirsin.
          </p>

          <p>
            <SyntaxHighlighter language="bash">
              {`yarn add turkuaz`}
            </SyntaxHighlighter>
          </p>
        </section>

        <section>
          <h3>React</h3>

          <p>
            React projende Turkuaz'ı kullanmak istiyorsan <strong>react-turkuaz</strong> paketini kullanabilirsin. 
          </p>
          <p>
            Ayrıntılı bilgi için <Link to="/docs/library/react">React</Link> sayfasını inceleyin.
          </p>
        </section>

        <section>
          <h3>Vue</h3>

          <p>
            Vue projende Turkuaz'ı kullanmak istiyorsan <strong>vue-turkuaz</strong> paketini kullanabilirsin. 
          </p>
          <p>
            Ayrıntılı bilgi için <Link to="/docs/library/vue">Vue</Link> sayfasını inceleyin.
          </p>
        </section>
      </BasePage>
    </>
  )
}

export default App