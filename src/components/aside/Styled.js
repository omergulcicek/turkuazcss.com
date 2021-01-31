import styled from "styled-components"

export const StyledAside = styled.aside`
  border-right: 1px solid rgba(0,0,0,0.1);
  grid-area: aside;
  position: relative;
  width: 100%;

  section {
    height: calc(100vh - 80px);
    padding: 40px 24px;
    overflow: hidden auto;
  }

  strong {
    font-size: 14px;
    font-weight: 500;
    display: block;
    margin: 24px 8px 8px;
  }

  a {
    color: #6b7280;
    cursor: pointer;
    display: block;
    font-size: 14px;
    padding: 8px;

    &:hover,
    &.active {
      color: #111827;
      text-decoration: none;
    }
  }
`;

export const StyledGradient = styled.span`
  background-image: linear-gradient(rgb(255, 255, 255), rgba(255, 255, 255, 0));
  height: 48px;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
`;