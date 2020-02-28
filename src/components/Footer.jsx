import React from "react"

import { FooterStyled } from "./Styled"

const Footer = () => {
  return (
    <FooterStyled>
      <div className="container">
      
        <span>
          © {new Date().getFullYear()} | Turkuaz
        </span>
        
      </div>
    </FooterStyled>
  )
}

export default Footer