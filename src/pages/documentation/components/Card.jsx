import React from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"

import { BasePage } from "../../../components"

export const obj = {
  title: "Kart",
  desc: "Her yönüyle esnek ve özelleştirilebilir kart bileşenleri",
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
      text: "Kart",
      link: "/card"
    }
  ],
  editlink: "https://github.com/omergulcicek/turkuazcss.com/blob/master/src/pages/documentation/components/Card.jsx",
  pagination: {
    prev: {
      href: "breadcrumb",
      text: "Breadcrumb"
    },
    next: {
      href: "dropdown",
      text: "Dropdown"
    }
  }
}

const App = () => {
  return (
    <BasePage info={obj}>
      <section>
        <div className="row mb-3">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card">
              <figure className="card_image">
                <img src="https://via.placeholder.com/640x480" alt="Placeholder image" />
              </figure>
      
              <div className="card_content">
                <h5 className="card_title">Card title</h5>
    
                <p>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
    
                <a href="#" className="button is-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>

        <SyntaxHighlighter language="html">
{`<div class="card">
  <figure class="card_image">
    <img src="https://via.placeholder.com/640x480" alt="Placeholder image" />
  </figure>

  <div class="card_content">
    <h5>Card title</h5>

    <p>
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </p>

    <a href="#" class="button is-primary">Go somewhere</a>
  </div>
</div>`}
        </SyntaxHighlighter>
      </section>

      <section>
        <h2>Boyut</h2>

        <p>
          Card elementi 3 farklı boyuta sahiptir.
        </p>

        <div className="row mb-3">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card is-small">
              <figure className="card_image">
                <img src="https://via.placeholder.com/640x480" alt="Placeholder image" />
              </figure>
      
              <div className="card_content">
                <h5 className="card_title">Card title</h5>
    
                <p>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
    
                <a href="#" className="button is-primary">Go somewhere</a>
              </div>
            </div>          
          </div>
          
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card">
              <figure className="card_image">
                <img src="https://via.placeholder.com/640x480" alt="Placeholder image" />
              </figure>
      
              <div className="card_content">
                <h5 className="card_title">Card title</h5>
    
                <p>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
    
                <a href="#" className="button is-primary">Go somewhere</a>
              </div>
            </div>          
          </div>
          
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card is-large">
              <figure className="card_image">
                <img src="https://via.placeholder.com/640x480" alt="Placeholder image" />
              </figure>
      
              <div className="card_content">
                <h5 className="card_title">Card title</h5>
    
                <p>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
    
                <a href="#" className="button is-primary">Go somewhere</a>
              </div>
            </div>          
          </div>
        </div>

        <SyntaxHighlighter language="html">
{`<div class="card is-small"></div>

<div class="card"></div>

<div class="card is-large"></div>`}
        </SyntaxHighlighter>
      </section>
    </BasePage>
  )
}

export default App