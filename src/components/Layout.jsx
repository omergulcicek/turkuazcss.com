import React from "react"
import Header from "./Header"
import Footer from "./Footer"

import { MainStyled } from "./Styled"

const Layout = ({content}) => {
  return (
    <>
      <Header />

      <MainStyled>
        {content}
      </MainStyled>
      
      <Footer />
    </>
  )
}

export default Layout