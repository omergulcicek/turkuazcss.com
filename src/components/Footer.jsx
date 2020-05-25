import React from "react"
import { Link } from "react-router-dom"

import { FooterStyled } from "./Styled"

const Footer = () => {
  return (
    <FooterStyled>
      <div className="container">
        <span>
          © {new Date().getFullYear()} Turkuaz
        </span>

        <nav>
          <a href="https://github.com/omergulcicek/turkuaz" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://twitter.com/turkuazcss" target="_blank" rel="noopener noreferrer">Twitter</a>
          <Link to="/love">Sevgi</Link>
          <Link to="/about">Hakkında</Link>
        </nav>
      
        
      </div>
    </FooterStyled>
  )
}

export default Footer