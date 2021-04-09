import React, { Component } from "react"
import { Link } from "react-router-dom"

import { BaseTempTitleStyled, BaseTempDescStyled } from "./Styled"

class BaseTempHeader extends Component {
  getHref = (b, j) => {
    let href = "";
    for (let i = 1; i < j; i++) {
      href += `${b[i].link}`
    }
    return href
  }

  render () {
    const { title, desc, breadcrumb } = this.props
    
    let breadcrumbs = breadcrumb.map(({ text }, i) => 
      <li key={i}>
        <Link
          to={this.getHref(breadcrumb, i+1)}
          id={i === 0 && "content"}
        >{text}</Link>
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
          
          <BaseTempTitleStyled>{ title }</BaseTempTitleStyled>

          <BaseTempDescStyled dangerouslySetInnerHTML={{ __html: desc }} />

          <hr className="my-4" />
        </section>
      </>
    )
  }
}

export default BaseTempHeader