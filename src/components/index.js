import HeaderComp   from "./header/Header"
import MainComp     from "./main/Main"
import AsideComp    from "./aside/Aside"
import FooterComp   from "./footer/Footer"

export const Header = ()       => <HeaderComp />
export const Main   = (props)  => <MainComp {...props} />
export const Aside  = ()       => <AsideComp />
export const Footer = ()       => <FooterComp />