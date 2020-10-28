import React from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"

import { BasePage } from "../../../components"
import { ModalExample } from "../../../components/Styled"

export const obj = {
  title: "Modal",
  desc: "Sitenize kullanıcı bildirimleri veya tamamen özel içerik için iletişim kutuları",
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
      text: "Modal",
      link: "/modal"
    }
  ],
  editlink: "documentation/components/Modal",
  pagination: {
    prev: {
      href: "media",
      text: "Media"
    },
    next: {
      href: "pagination",
      text: "Pagination"
    }
  }
}

export const modelOpen = (e) => {
  const overlay = document.createElement("div")
  overlay.classList.add("overlay")

  const modalHref = e.target.getAttribute("data-href")
  const modalTarget = document.querySelectorAll(`[data-target=${modalHref}]`)[0]

  modalTarget.setAttribute("open", true)
  document.body.append(overlay)

  overlay.addEventListener("click", (e) => {
    modalTarget.removeAttribute("open")
    e.target.remove()
  })
}

const App = () => {
  return (
    <BasePage info={obj}>
      <section>
        <div className="row mb-3">
          <div className="col-12">
            <a className="button" data-href="modal1" onClick={e => modelOpen(e)}>Modal aç</a>

            <dialog className="modal is-danger" data-target="modal1">
              <div className="modal_content">
                <div className="modal_icon">
                  <svg role="img" viewBox="0 0 352 512"><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>
                </div>
                <div>
                  <h3 className="modal_title">Hesabı Sil</h3>
                  <p>
                    Hesabınızı devre dışı bırakmak istediğinizden emin misiniz? Tüm verileriniz <strong>kalıcı olarak</strong> silinecektir. Bu eylem geri alınamaz.
                  </p>
                </div>
              </div>
              <div className="modal_footer">
                <a className="button is-outline">İptal</a>
                <a className="button is-danger">Üyeliğimi kalıcı olarak sil</a>
              </div>
            </dialog>
          </div>
          
          <div className="col-12 col-md-6 mt-4">
            <div className="notification is-info">
              Turkuaz, herhangi bir JavaScript kodu <strong>içermez.</strong>
            </div>
          </div>
        </div>

        <SyntaxHighlighter language="html">
{`<a class="button" data-href="modal1">Modal aç</a>

<dialog class="modal is-danger" data-target="modal1" open>
  <div class="modal_content">
    <div class="modal_icon">
      <svg role="img" viewBox="0 0 352 512"><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>
    </div>
    <div>
      <h3 class="modal_title">Hesabı Sil</h3>
      <p>
        Hesabınızı devre dışı bırakmak istediğinizden emin misiniz? Tüm verileriniz <strong>kalıcı olarak</strong> silinecektir. Bu eylem geri alınamaz.
      </p>
    </div>
  </div>
  <div class="modal_footer">
    <a class="button is-outline">İptal</a>
    <a class="button is-danger">Üyeliğimi kalıcı olarak sil</a>
  </div>
</dialog>`}
        </SyntaxHighlighter>
      </section>
      
      <section>
        <h3>Renk</h3>
        
        <p>
          Modal elementi 5 farklı renge sahiptir.
        </p>
          
        <div className="notification is-info">
          Modal'a eklenen class'lar yalnızca ikonun ve ikon yuvarlağının arka plan rengini değiştirir; butonlara müdahale etmez.
        </div>

        <div className="row mb-3">
          <div className="col-12">
            <ModalExample>

              <dialog className="modal" data-target="modal1" open>
                <div className="modal_content">
                  <div className="modal_icon">
                    <svg role="img" viewBox="0 0 109.000000 162.000000"><g transform="translate(0.000000,162.000000) scale(0.100000,-0.100000)" stroke="none" fill="currentColor"><path d="M20 1083 c0 -570 2 -588 61 -706 65 -128 168 -231 295 -295 110 -55 156 -62 433 -62 l251 0 0 38 c0 104 -61 202 -153 245 -44 21 -72 26 -180 30 -106 5 -136 10 -180 30 -76 35 -122 79 -159 155 l-33 67 -5 410 -5 410 -27 47 c-54 91 -152 148 -254 148 l-44 0 0 -517z"></path><path d="M490 1048 c-91 -63 -93 -204 -3 -264 69 -46 223 -38 302 16 25 18 58 49 73 70 27 37 58 132 58 177 l0 23 -199 0 c-189 0 -200 -1 -231 -22z"></path></g></svg>
                  </div>
                  <div>
                    <h3 className="modal_title">Turkuaz v1.0.0 (varsayılan)</h3>
                    <p>
                      Turkuaz versiyon 1.0.0 sürümü yayınlandı! Hemen kullanmaya başlayabilirsiniz. Karşılaştığınız hataları lütfen <a href="javascript:;">bize bildirin</a>.
                    </p>
                  </div>
                </div>
                <div className="modal_footer">
                  <a className="button">Kapat</a>
                  <a className="button is-primary">Hemen dene!</a>
                </div>
              </dialog>
              
              <dialog className="modal is-success" data-target="modal1" open>
                <div className="modal_content">
                  <div className="modal_icon">
                    <svg role="img" viewBox="0 0 512 512"><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>
                  </div>
                  <div>
                    <h3 className="modal_title">Üyeliğiniz Oluşturuldu (is-success)</h3>
                    <p>
                    Üyeliğiniz başarıyla oluşturuldu. Aramıza katıldığınız için teşekkür ederiz!
                    </p>
                  </div>
                </div>
                <div className="modal_footer">
                  <a className="button is-success">Siteye geç</a>
                </div>
              </dialog>
              
              <dialog className="modal is-warning" data-target="modal1" open>
                <div className="modal_content">
                  <div className="modal_icon">
                  <svg role="img" viewBox="0 0 192 512"><path fill="currentColor" d="M176 432c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80zM25.26 25.199l13.6 272C39.499 309.972 50.041 320 62.83 320h66.34c12.789 0 23.331-10.028 23.97-22.801l13.6-272C167.425 11.49 156.496 0 142.77 0H49.23C35.504 0 24.575 11.49 25.26 25.199z"></path></svg>
                  </div>
                  <div>
                    <h3 className="modal_title">Uyarı (is-warning)</h3>
                    <p>
                    Son 30 gündür mobil uygulamamıza hiç girmediniz. Bazı özellikleri kullanamayabilirsiniz.
                    </p>
                  </div>
                </div>
                <div className="modal_footer">
                  <a className="button is-warning">Tamam</a>
                </div>
              </dialog>
              
              <dialog className="modal is-danger" data-target="modal1" open>
                <div className="modal_content">
                  <div className="modal_icon">
                    <svg role="img" viewBox="0 0 352 512"><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>
                  </div>
                  <div>
                    <h3 className="modal_title">Hesabı Sil (is-danger)</h3>
                    <p>
                    Hesabınızı devre dışı bırakmak istediğinizden emin misiniz? Tüm verileriniz <strong>kalıcı olarak</strong> silinecektir. Bu eylem geri alınamaz.
                    </p>
                  </div>
                </div>
                <div className="modal_footer">
                  <a className="button">İptal</a>
                  <a className="button is-danger">Üyeliğimi kalıcı olarak sil</a>
                </div>
              </dialog>
              
              <dialog className="modal is-info" data-target="modal1" open>
                <div className="modal_content">
                  <div className="modal_icon">
                    <svg role="img" viewBox="0 0 192 512"><path fill="currentColor" d="M20 424.229h20V279.771H20c-11.046 0-20-8.954-20-20V212c0-11.046 8.954-20 20-20h112c11.046 0 20 8.954 20 20v212.229h20c11.046 0 20 8.954 20 20V492c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20v-47.771c0-11.046 8.954-20 20-20zM96 0C56.235 0 24 32.235 24 72s32.235 72 72 72 72-32.235 72-72S135.764 0 96 0z"></path></svg>
                  </div>
                  <div>
                    <h3 className="modal_title">Duyuru (is-info)</h3>
                    <p>
                    Sitemiz yeni yıl itibariyle tasarım değişikliğine uğrayacaktır. Eski temayı kullanmak isteyenler profil ayarlarından değiştirebilir.
                    </p>
                  </div>
                </div>
                <div className="modal_footer">
                  <a className="button">Eski temada kal</a>
                  <a className="button is-info">Yeni temaya geç</a>
                </div>
              </dialog>
            </ModalExample>
          </div>

          <div className="col-12 col-md-8">
            <SyntaxHighlighter language="html">
{`<dialog class="modal" data-target=""></dialog>
<dialog class="modal is-success" data-target=""></dialog>
<dialog class="modal is-warning" data-target=""></dialog>
<dialog class="modal is-danger" data-target=""></dialog>
<dialog class="modal is-info" data-target=""></dialog>`}
            </SyntaxHighlighter>
          </div>
        </div>
      </section>
    </BasePage>
  )
}

export default App