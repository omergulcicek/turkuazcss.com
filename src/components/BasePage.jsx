import React, { Component } from "react"
import { Link } from "react-router-dom"

import { BaseTempStyled, BaseTempDescStyled, ItemId, ItemTitle, ItemDesc } from "./Styled"

class BaseTemp extends Component {
  getHref = (b, j) => {
    let href = "";
    for (let i = 1; i < j; i++) {
      href += `${b[i].link}`
    }
    return href;
  }

  render () {
    const { title, desc, breadcrumb, content } = this.props

    let breadcrumbs = breadcrumb.map(({ text }, i) => 
      <li key={i}>
        <Link to={this.getHref(breadcrumb, i+1)}>{text}</Link>
      </li>
    )

    let contents = content && content.map(({ icon, color, link, text, desc }, i) =>
      <Link to={link} key={i}>
        <ItemId dangerouslySetInnerHTML={{ __html: icon }} />

        <ItemTitle>
          { text }
        </ItemTitle>

        <ItemDesc dangerouslySetInnerHTML={{ __html: desc }} />
      </Link>
    )

    return (
      <BaseTempStyled>
        <header>
          <nav className="breadcrumb mb-5">
            <ul>
              { breadcrumbs }
            </ul>
          </nav>
          
          <h1>{ title }</h1>

          <BaseTempDescStyled dangerouslySetInnerHTML={{ __html: desc }} />

          <hr className="my-5" />
        </header>

        <main>
          { contents }
        </main>

        <footer>
          
        </footer>
      </BaseTempStyled>
    )
  }
}

export default BaseTemp