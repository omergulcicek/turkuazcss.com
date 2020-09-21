import React from "react"
import { Link } from "react-router-dom"
import Brand from "./Brand"

import { FooterStyled, FooterFlex } from "./Styled"

const Footer = () => {
  return (
    <FooterStyled>
      <div className="container">
        <FooterFlex>
          <div>
            <Brand>turkuaz<span>css</span></Brand>

            <p>
              <a href="https://omergulcicek.com" target="_blank" rel="noopener noreferrer">Ömer Gülçiçek</a>, { new Date().getFullYear() }
            </p>

            <p>
              MIT lisansı ile lisanslanmıştır.
            </p>

            <p>
              Proje açık kaynak ve kodları <a href="https://github.com/omergulcicek/turkuaz" target="_blank" rel="noopener noreferrer">GitHub</a>'tadır.
            </p>
          </div>
        </FooterFlex>
      </div>
    </FooterStyled>
  )
}

export default Footer