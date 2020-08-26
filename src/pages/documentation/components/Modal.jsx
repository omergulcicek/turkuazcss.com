import React from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"

import { BasePage } from "../../../components"

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

            <dialog className="modal" data-target="modal1">
              <div className="modal_content">
                <div className="modal_icon">
                  <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="#e02424">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="modal_title">Hesabı Sil</h3>
                  <p>
                    Hesabınızı devre dışı bırakmak istediğinizden emin misiniz? Tüm verileriniz <strong>kalıcı olarak</strong> silinecektir. Bu eylem geri alınamaz.
                  </p>
                </div>
              </div>
              <footer className="modal_footer">
                <a className="button is-outline" id="closeModal">İptal</a>
                <a className="button is-danger" id="closeModal">Kalıcı olarak sil</a>
              </footer>
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

<dialog class="modal" data-target="modal1">
  <div class="modal_content">
    <div class="modal_icon">
      <svg class="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="#e02424">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
      </svg>
    </div>
    <div>
      <h3 class="modal_title">Hesabı Sil</h3>
      <p>
        Hesabınızı devre dışı bırakmak istediğinizden emin misiniz? Tüm verileriniz <strong>kalıcı olarak</strong> silinecektir. Bu eylem geri alınamaz.
      </p>
    </div>
  </div>
  <footer class="modal_footer">
    <a class="button is-outline" id="closeModal">İptal</a>
    <a class="button is-danger" id="closeModal">Kalıcı olarak sil</a>
  </footer>
</dialog>`}
        </SyntaxHighlighter>
      </section>
    </BasePage>
  )
}

export default App