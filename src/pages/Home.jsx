import React from "react"

import { SEO } from "./../components"

const App = () => {
  return (
    <section>
      <SEO title="Ana Sayfa" />

      <h1>Ana Sayfa</h1>

      <p>
        Sayfaları <code>src/pages</code> içerisinden değiştirebilirsiniz.
      </p>
      <p>
        İlk olarak <code>src/pages/index.jsx</code> dosyasına yeni sayfayı ekleyerek, oluşturduğunuz bu bileşeni geliştirin.
      </p>
    </section>
  )
}

export default App