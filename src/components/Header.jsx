import React, { Component } from "react"
import { Link, NavLink } from "react-router-dom"

import { HeaderStyled, HeaderFlex, Brand } from "./Styled"

class Header extends Component {
  render() {
    let nav = links.map(({ link, text }, i) =>
      <NavLink to={link} key={i} dangerouslySetInnerHTML={{ __html: text }} />
    )

    return (
      <HeaderStyled>
        <div className="container">
          <HeaderFlex>
            <Brand>
              <Link to="/">
                <svg role="img" viewBox="0 0 109.000000 162.000000" height="80"><g transform="translate(0.000000,162.000000) scale(0.100000,-0.100000)" stroke="none" fill="#03968a"><path d="M20 1083 c0 -570 2 -588 61 -706 65 -128 168 -231 295 -295 110 -55 156 -62 433 -62 l251 0 0 38 c0 104 -61 202 -153 245 -44 21 -72 26 -180 30 -106 5 -136 10 -180 30 -76 35 -122 79 -159 155 l-33 67 -5 410 -5 410 -27 47 c-54 91 -152 148 -254 148 l-44 0 0 -517z"></path><path d="M490 1048 c-91 -63 -93 -204 -3 -264 69 -46 223 -38 302 16 25 18 58 49 73 70 27 37 58 132 58 177 l0 23 -199 0 c-189 0 -200 -1 -231 -22z"></path></g></svg>

                <span>Turkuaz</span>
              </Link>
            </Brand>

            <nav>
              {nav}
            </nav>
          </HeaderFlex>
        </div>
      </HeaderStyled>
    )
  }
}

export const links = [
  {
    text: '<svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#23d160" d="M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"></path></svg> Dokümantasyon',
    link: "/docs"
  },
  {
    text: '<svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ffca28" d="M167.02 309.34c-40.12 2.58-76.53 17.86-97.19 72.3-2.35 6.21-8 9.98-14.59 9.98-11.11 0-45.46-27.67-55.25-34.35C0 439.62 37.93 512 128 512c75.86 0 128-43.77 128-120.19 0-3.11-.65-6.08-.97-9.13l-88.01-73.34zM457.89 0c-15.16 0-29.37 6.71-40.21 16.45C213.27 199.05 192 203.34 192 257.09c0 13.7 3.25 26.76 8.73 38.7l63.82 53.18c7.21 1.8 14.64 3.03 22.39 3.03 62.11 0 98.11-45.47 211.16-256.46 7.38-14.35 13.9-29.85 13.9-45.99C512 20.64 486 0 457.89 0z"></path></svg> Tema',
    link: "/theme"
  },
  {
    text: '<svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 512 512" fill="#f44336"><path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"></path></svg> Hakkında',
    link: "/about"
  }
]

export default Header