import React from "react"

import { BasePage, Settings } from "../../../components"

export const obj = {
  title: "Button",
  desc: "Farklı boyut, çeşit ve renklerde tasarlanmış harika butonlar ile tanışın",
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
      text: "Elementler",
      link: "/elements"
    },
    {
      text: "Button",
      link: "/button"
    }
  ]
}

export const details = {
  color: [
    {
      attr: "",
      value: ""
    },
    {
      colorHex: "#26a69a",
      value: "is-primary",
    },
    {
      colorHex: "#f5f5f5",
      value: "is-secondary"
    },
    {
      colorHex: "#23d160",
      value: "is-success"
    },
    {
      colorHex: "#ffca28",
      value: "is-warning"
    },
    {
      colorHex: "#f44336",
      value: "is-danger"
    },
    {
      colorHex: "#2196f3",
      value: "is-info"
    },
    {
      colorHex: "transparent",
      value: "is-link"
    }
  ],
  size: [
    {
      attr: "small",
      value: "is-small"
    },
    {
      attr: "",
      value: ""
    },
    {
      attr: "large",
      value: "is-large"
    }
  ],
  style: [
    {
      attr: "",
      value: ""
    },
    {
      attr: "circle",
      value: "is-circle"
    },
    {
      attr: "square",
      value: "is-square"
    },
    {
      attr: "block",
      value: "is-block"
    }
  ],
}

const App = () => {
  return (
    <>
    <BasePage content={obj} />
    
    <Settings>
      <aside>
        
        <pre>
          
        <div dangerouslySetInnerHTML={{ __html: `` }} />

        </pre>
      </aside>

      <aside>
      </aside>
    </Settings>
    </>
  )
}

export default App

/*
import React, { Component } from "react"

import { SEO, BasePageHeader, Settings } from "../../../components"

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      colorValue: "",
      sizeValue: "",
      styleValue: "",
      disabled: false,
      outline: false,
      text: "Button"
    }

    this.changeColor = this.changeColor.bind(this)
    this.changeSize = this.changeSize.bind(this)
    this.changeStyle = this.changeStyle.bind(this)
    this.changeDisabled = this.changeDisabled.bind(this)
    this.changeOutline = this.changeOutline.bind(this)
    this.changeText = this.changeText.bind(this)
  }

  changeColor(value) {
    value !== "" ? this.setState({ colorValue: ` ${value}` }) :  this.setState({ colorValue: "" })
  }

  changeSize(value) {
    value !== "" ? this.setState({ sizeValue: ` ${value}` }) :  this.setState({ sizeValue: "" })
  }

  changeStyle(value) {
    value !== "" ? this.setState({ styleValue: ` ${value}` }) :  this.setState({ styleValue: "" })
  }

  changeDisabled() {
    this.setState({
      disabled: !this.state.disabled
    })
  }

  changeOutline() {
    this.setState({
      outline: !this.state.outline
    })
  }

  changeText(e) {
    this.setState({text: e.target.value});
  }

  render () {
    const { title, desc, breadcrumb } = obj
    const { color, size, style } = details
    const { colorValue, sizeValue, styleValue, disabled, outline, text } = this.state

    let colors = color.map(({ colorHex, value }, i) =>
      <label key={i} onClick={this.changeColor.bind(this, value)}>
        <input type="radio" class="radio color-input" name="colorChange" />
        <span style={{backgroundColor: colorHex, border: "1px solid rgba(0,0,0,.1)"}}></span>
      </label>
    )

    let sizes = size.map(({ attr, value }, i) => 
      <a href="#!" className={`button is-circle ${value}`} key={i} onClick={this.changeSize.bind(this, value)}>
        {attr && attr[0].toUpperCase()}
      </a>
    )

    let styles = style.map(({ attr, value }, i) => 
      <a href="#!" className={`button is-small ${value}`} key={i} onClick={this.changeStyle.bind(this, value)}>&nbsp;{attr && attr[0].toUpperCase()}</a>
    )

    return (
      <section>
        <SEO title={title} />

        <BasePageHeader
          title={title}
          desc={desc}
          breadcrumb={breadcrumb}
        />

        <Settings>
          <aside>
            <a className={`button ${colorValue} ${sizeValue} ${styleValue} ${outline? " is-outline" : ""}`} disabled={disabled}>{text}</a>

            <pre>
              
            <div dangerouslySetInnerHTML={{ __html: `&lt;a class="button${colorValue}${sizeValue}${styleValue}${outline? " is-outline" : ""}"${disabled ? " disabled" : ""}>${text}&lt;/a>` }} />

            </pre>
          </aside>

          <aside>
            <table className="table">
              <tbody>
                <tr>
                  <th>Buton yazısı</th>
                  <td>
                    <input className="input" value={text} onChange={this.changeText} />  
                  </td>
                </tr>

                <tr>
                  <th>Renk</th>
                  <td>{ colors }</td>
                </tr>

                <tr>
                  <th>Boyut</th>
                  <td>
                    <div style={{display: "flex", alignItems: "center"}}>
                      { sizes }
                    </div>
                  </td>
                </tr>
                
                <tr>
                  <th>Stil</th>
                  <td>
                    { styles }
                  </td>
                </tr>

                <tr>
                  <th>Outline</th>
                  <td>
                  <a href="#!" className="button is-small" onClick={this.changeOutline}>
                    Outline
                  </a>
                  </td>
                </tr>

                <tr>
                  <th>Disabled</th>
                  <td>
                  <a href="#!" className="button is-small" onClick={this.changeDisabled}>
                    Disable
                  </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </aside>
        </Settings>

      </section>
    )
  }
}

export default App
*/
