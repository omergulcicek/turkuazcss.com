import React from "react"
import { Link } from "react-router-dom"

import { BasePage } from "../../../components"
import { PreviewStyles } from "./../../../components/Styled"

export const obj = {
  title: "Önizleme",
  desc: "Tüm Turkuaz öğelerine tek sayfada göz atın",
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
      text: "Önizleme",
      link: "/preview"
    }
  ],
  pagination: {
    prev: {
      href: "start",
      text: "Kurulum"
    },
    next: {
      href: "support",
      text: "Destek Ol"
    }
  }
}

const App = () => {
  const [checked, setChecked] = React.useState(true)
  const [checked2, setChecked2] = React.useState(false)

  return (
    <BasePage info={obj}>
      <PreviewStyles>
        <div className="row">
          <div className="col-12 col-md-6">
            <article className="text-center">
              <h5 className="title is-size-3">Inter</h5>
              <h6 className="title is-size-6">Yazı Stili</h6>
            </article>
          </div>
          
          <div className="col-12 col-md-6">
            <article className="preview-color-style text-center">
              <div className="mb-3"><span className="tooltip" data-content="Turkuaz - #26a69a"></span><span className="tooltip" data-content="Mavi - #2196f3"></span><span className="tooltip" data-content="Kırmızı - #f44336"></span><span className="tooltip" data-content="Turuncu - #ffca28"></span><span className="tooltip" data-content="Sarı - #ffee58"></span><span className="tooltip" data-content="Yeşil - #23d160"></span></div>

              <h6 className="title is-size-6">Renkler</h6>
            </article>
          </div>

          <div className="col-12 col-md-6">
            <article>
              <div className="form-field">
                <label>Kullanıcı Adı</label>
                <input type="text" placeholder="@omergulcicek" className="input" />
              </div>
              <div className="form-field">
                <label>E-Mail Adresi</label>
                <input type="email" value="iletisim@omergulcicek.com" className="input is-valid" />
                <small className="input-text">E-posta kullanılabilir.</small>
              </div>
            </article>
          </div>

          <div className="col-12 col-md-6">
            <article>
              <div className="form-field mt-4">
                <label className="mr-4">
                  <input type="checkbox" className="checkbox" name="type" checked={checked}
        onChange={() => setChecked(!checked)} />
                  <span>Checkbox 1</span>
                </label>

                <label>
                  <input type="checkbox" className="checkbox" name="type" checked={checked2}
        onChange={() => setChecked2(!checked2)} />
                  <span>Checkbox 2</span>
                </label>
              </div>

              <div className="form-field">
                <label className="mr-4">
                  <input type="radio" name="radio" className="radio" name="type" />
                  <span>Radio Button 1</span>
                </label>

                <label>
                  <input type="radio" name="radio" className="radio" name="type" />
                  <span>Radio Button 2</span>
                </label>
              </div>

              <div className="form-field">
                <select className="select">
                  <option disabled selected>Seçim yapınız</option>
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </select>
              </div>

              <p>
                <Link to="/docs/form">Form elemanlarını inceleyin</Link>
              </p>
            </article>
          </div>

          <div className="col-12">
            <article className="text-center">
              <p>
                <a className="button mr-1 mb-1">Button</a>
                <a className="button is-primary mr-1 mb-1">primary</a>
                <a className="button is-secondary mr-1 mb-1">secondary</a>
                <a className="button is-success mr-1 mb-1">success</a>
                <a className="button is-warning mr-1 mb-1">warning</a>
                <a className="button is-danger mr-1 mb-1">danger</a>
                <a className="button is-info mr-1 mb-1">info</a>
                <a className="button is-link">link</a>
              </p>

              <p>
                <a className="button is-outline mr-1 mb-1">Button</a>
                <a className="button is-outline is-primary mr-1 mb-1">primary</a>
                <a className="button is-outline is-secondary mr-1 mb-1">secondary</a>
                <a className="button is-outline is-success mr-1 mb-1">success</a>
                <a className="button is-outline is-warning mr-1 mb-1">warning</a>
                <a className="button is-outline is-danger mr-1 mb-1">danger</a>
                <a className="button is-outline is-info mr-1 mb-1">info</a>
                <a className="button is-outline is-link">link</a>
              </p>

              <p>
                <a className="button mr-1 mb-1" disabled>Button</a>
                <a className="button is-primary mr-1 mb-1" disabled>primary</a>
                <a className="button is-secondary mr-1 mb-1" disabled>secondary</a>
                <a className="button is-success mr-1 mb-1" disabled>success</a>
                <a className="button is-warning mr-1 mb-1" disabled>warning</a>
                <a className="button is-danger mr-1 mb-1" disabled>danger</a>
                <a className="button is-info mr-1 mb-1" disabled>info</a>
                <a className="button is-link" disabled>link</a>
              </p>

              <p>
                <a className="button is-small mr-1 mb-1">Small</a>
                <a className="button mr-1 mb-1">Normal</a>
                <a className="button is-large">Large</a>
              </p>

              <p>
                <Link to="/docs/elements/button">Butonları inceleyin</Link>
              </p>
            </article>
          </div>

          <div className="col-12 col-md-6">
            <article>
              <div className="notification is-success mb-3">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum accusantium facere officiis. Deleniti officiis dolorem fuga.
              </div>

              <p>
                <span className="delete"></span>

                <span className="tag mx-2">Tag</span>

                <span className="tooltip is-bottom" data-content="Turkuaz">Tooltip</span>
              </p>
              
              <p>
                <Link to="/docs/elements">Elementleri inceleyin</Link>
              </p>
            </article>
          </div>

          <div className="col-12 col-md-6">
            <article>
              <nav className="breadcrumb">
                <ul>
                  <li><a href="javascript:;">Home</a></li>
                  <li><a href="javascript:;">Frameworks</a></li>
                  <li>Turkuaz</li>
                </ul>
              </nav>

              <nav className="pagination mb-3">
                <a href="javascript:;">«</a>
                <a href="javascript:;" className="is-current">1</a>
                <a href="javascript:;">2</a>
                <a href="javascript:;" tabindex="-1" disabled>3</a>
                <a href="javascript:;">»</a>
              </nav>

              <div>
                <div class="dropdown is-hoverable">
                  <a href="javascript:;" class="button dropdown-trigger">:hover</a>

                  <div className="dropdown_content">
                    <div class="dropdown_items">
                      <a class="dropdown_item" href="javascript:;">Action</a>
                      <a class="dropdown_item" href="javascript:;">Another action</a>
                      <a class="dropdown_item" href="javascript:;">Something else here</a>
                      <div class="divider"></div>
                      <a class="dropdown_item" href="javascript:;">Separated link</a>
                    </div>
                  </div>
                </div>
              </div>

              <p className="mt-3">
                <Link to="/docs/components">Bileşenleri inceleyin</Link>
              </p>
            </article>
          </div>

          <div className="col-12">
            <article>
              <div className="row">
                <div className="col-12 col-md-4">
                  <div className="card is-small">
                    <figure className="card_image">
                      <img src="https://via.placeholder.com/640x480" alt="Placeholder image" loading="lazy" />
                    </figure>

                    <div className="card_content">
                      <h5>Card title</h5>

                      <p>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                      </p>

                      <a href="#" className="button is-primary">Go somewhere</a>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-md-4">
                  <div className="card">
                    <figure className="card_image">
                      <img src="https://via.placeholder.com/640x480" alt="Placeholder image" loading="lazy" />
                    </figure>

                    <div className="card_content">
                      <h5>Card title</h5>

                      <p>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                      </p>

                      <a href="#" className="button is-primary">Go somewhere</a>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-md-4">
                  <div className="card is-large">
                    <figure className="card_image">
                      <img src="https://via.placeholder.com/640x480" alt="Placeholder image" loading="lazy" />
                    </figure>

                    <div className="card_content">
                      <h5>Card title</h5>

                      <p>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                      </p>

                      <a href="#" className="button is-primary">Go somewhere</a>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-center">
                <Link to="/docs/components/card">Kartları inceleyin</Link>
              </p>
            </article>
          </div>
          

        </div>
      </PreviewStyles>
    </BasePage>
  )
}

export default App