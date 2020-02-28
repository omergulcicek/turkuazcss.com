import React, { Component } from "react"
import { NavLink } from "react-router-dom"

import { HeaderStyled } from "./Styled"

class Header extends Component {
  render () {
    let nav = links.map(({link, text}, i) =>
      <NavLink to={link} exact key={i} dangerouslySetInnerHTML={{__html: text}} />
    )

    return (
      <HeaderStyled>
        <div className="container">
          
          <nav>
            {nav}
          </nav>
          
        </div>
      </HeaderStyled>
    )
  }
}

export const links = [
  {
    text: '<svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#03968a" d="M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"></path></svg> Dokümantasyon',
    link: "/docs"
  },
  {
    text: '<svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#f14668" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg> Tema',
    link: "/theme"
  },
  {
    text: '<svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 512 512" fill="#4e342e"><path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"></path></svg> Hakkında',
    link: "/about"
  }
]

export default Header