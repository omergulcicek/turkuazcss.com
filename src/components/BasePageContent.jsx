import React, { Component } from "react"
import { Link } from "react-router-dom"

import { BaseTempStyled, ItemId, ItemTitle, ItemDesc } from "./Styled"

class BaseTempContent extends Component {
  render () {
    const { content } = this.props

    let contents = content && content.map(({ icon, link, text, desc }, i) =>
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
        { contents }
      </BaseTempStyled>
    )
  }
}

export default BaseTempContent