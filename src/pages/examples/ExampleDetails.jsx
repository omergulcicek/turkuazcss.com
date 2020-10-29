import React from "react"
import InputMask from "react-input-mask"

import { BasePage } from "./../../components"
import { ThemeDetail } from "./../../components/Styled"

export const obj = {
  title: "Üyelik Formları",
  desc: "Oturum açma ve kayıt formları",
  breadcrumb: [
    {
      text: "Ana Sayfa",
      link: "/"
    },
    {
      text: "Örnekler",
      link: "/examples"
    },
    {
      text: "Üyelik Formları",
      link: "/forms"
    }
  ]
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
      <ThemeDetail>
        <div className="row">
          <div className="col-12 col-lg-6">
            <form className="mb-5" style={{backgroundColor: "#fff", borderRadius: "8px", boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 4px", padding: "32px 40px"}}>
              <div className="row">

                <div className="col-12">
                  <div className="form-field">
                    <label>E-Posta Adresi</label>
                    <input type="email" className="input" />
                  </div>
                  
                  <div className="form-field">
                    <label>Parola</label>
                    <input type="password" className="input" />
                  </div>

                  <div className="form-field d-flex justify-between">
                    <label>
                      <input type="checkbox" className="checkbox" id="remember-me" name="remember-me" />
                      <span>Beni hatırla</span>
                    </label>

                    <a href="javascript:;">Şifremi unuttum</a>
                  </div>
                  
                  <button type="submit" href="javascript:;" className="button is-primary is-block">
                    Giriş Yap
                  </button>

                  <div class="divider my-4" data-content="yada"></div>

                  <div class="d-flex justify-between">
                    <a className="button is-block" style={{color: "#3b5998"}}>
                      Facebook
                    </a>

                    <a className="button is-block" style={{color: "#1da1f2"}}>
                      Twitter
                    </a>

                    <a className="button is-block" style={{color: "#333"}}>
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </form>
          </div>

          <div className="col-12 col-lg-6">
            <form className="mb-5" style={{backgroundColor: "#fff", borderRadius: "8px", boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 4px", padding: "32px 40px"}}>
              <div className="row">

                <div className="col-6">
                  <div className="form-field">
                    <label>Ad</label>
                    <input type="text" placeholder="Ömer" className="input" />
                  </div>
                </div>

                <div className="col-6">
                  <div className="form-field">
                    <label>Soyad</label>
                    <input type="text" placeholder="Gülçiçek" className="input" />
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-field">
                    <label>Kullanıcı Adı</label>
                    <input type="text" placeholder="omergulcicek" className="input is-valid" />
                    <small className="input-text">Kullanıcı adı kullanılabilir.</small>
                  </div>
                  
                  <div className="form-field">
                    <label>E-Posta Adresi</label>
                    <input type="mail" className="input" placeholder="iletisim@omergulcicek.com" />
                  </div>

                  <div className="form-field">
                    <label>Telefon Numarası</label>
                    <InputMask mask="(599) 999 99 99" type="tel" placeholder="(5xx) xxx xx xx" className="input" />
                  </div>

                  <div className="form-field d-flex justify-between">
                    <label>
                      <input type="checkbox" className="checkbox" name="type" />
                      <span><a href="javascript:;" data-href="uyelik-sozlesmesi">Üyelik sözleşmesi</a>ni ve <a href="javascript:;" data-href="aydinlatma-metni">aydınlatma metni</a>ni okuyup kabul ettiğinizi onaylıyorsunuz.</span>
                    </label>
                  </div>
                  <div className="d-flex justify-end mt-2">
                    <button type="submit" href="javascript:;" className="button is-primary">
                      Giriş Yap
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </ThemeDetail>
    </BasePage>
  )
}

export default App