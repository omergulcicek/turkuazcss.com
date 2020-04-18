import React, { Component } from "react"
import { Link } from "react-router-dom"

import { BaseTempDescStyled } from "./Styled"

class BaseTempHeader extends Component {
  getHref = (b, j) => {
    let href = "";
    for (let i = 1; i < j; i++) {
      href += `${b[i].link}`
    }
    return href;
  }

  render () {
    const { title, desc, breadcrumb } = this.props

    let breadcrumbs = breadcrumb.map(({ text }, i) => 
      <li key={i}>
        <Link to={this.getHref(breadcrumb, i+1)}>{text}</Link>
      </li>
    )

    return (
      <>
        <section>
          <nav className="breadcrumb mb-5">
            <ul>
              { breadcrumbs }
            </ul>
          </nav>
          
          <h1>{ title }</h1>

          <BaseTempDescStyled dangerouslySetInnerHTML={{ __html: desc }} />

          <hr className="my-5" />
        </section>
      </>
    )
  }
}

export default BaseTempHeader