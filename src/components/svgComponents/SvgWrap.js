import { StyledSvgWrap } from "./Styled"

export default function SvgWrap({color, children}) {
  return (
    <StyledSvgWrap style={{backgroundColor: color}}>
    {children}
    </StyledSvgWrap>
  )
}