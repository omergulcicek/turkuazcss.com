import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import Focus from "./Focus"

import { MainStyled } from "./Styled"

const Layout = ({content}) => {
  return (
    <>
      <Focus />

      <Header />

      <MainStyled>
        {content}
      </MainStyled>
      
      <Footer />
    </>
  )
}

export default Layout