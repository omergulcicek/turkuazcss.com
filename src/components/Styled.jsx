import styled from "styled-components"

export const HeaderStyled = styled.header`
  box-shadow: 0 2px 0 0 #f5f5f5;
  padding-bottom: 24px;
  padding-top: 24px;
`;

export const HeaderFlex = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;

  a {
    color: inherit;
    border-radius: 4px;
    margin-bottom: 0;
    margin-right: 4px;
    padding: 8px 12px;

    &:hover,
    &.active {
      background-color: #fafafa;
      text-decoration: none;
    }

    &:first-child svg {
      margin-right: 0
    }
  }
`;

export const MainStyled = styled.main`
  flex: 1;
  margin: 40px auto;
  width: 80%;

  @media (min-width: 1024px) {
    max-width: 1000px;
  }
`;

export const FooterStyled = styled.footer`
  background-color: #f0f7f7;
  border-top: 2px solid rgba(0,0,0,.1);;
  flex-direction: column-reverse;
  justify-content: space-between;
  padding-bottom: 24px;
  padding-top: 24px;
`;

export const HomeSection = styled.section`
  text-align: center;

  h1 {
    font-size: 80px;
    line-height: 1;
    color: #0a0a0a;
    font-weight: 400;
    margin-bottom: 40px;
    margin-top: 15%;
    
    @media (min-width: 1024px) {
      font-size: 138px;
    }
  }

  p {
    font-size: 20px;
    line-height: 27px;
    color: #808291;
    margin-bottom: 30px;
  }

  a {
    vertical-align: top;
  }
`;

export const GithubButton = styled.a`
  background-color: #323131;
  color: #fff;
  font-size: 14px !important;
  font-weight: 600;
  margin-left: 16px;
  letter-spacing: 1px;

  svg {
    margin-right: 8px
  }

  span {
    color: #ff9800
  }
`;

export const BaseTempStyled = styled.section`
  a {
    border-radius: 8px;
    color: inherit;
    display: inline-block;
    max-width: 410px;
    padding: 24px 24px 24px 88px;
    position: relative;
    text-decoration: none;
    transition: .15s ease;
    width: 50%;
    vertical-align: top;

    &:hover {
      background-color: #f7f7f7;
      text-decoration: none;
    }
  }
`;

export const BaseTempDescStyled = styled.p`
  color: #7a7a7a;
  font-size: 24px;
`;

export const ItemId = styled.span`
  font-size: 24px;
  left: 24px;
  position: absolute;
  top: 16px;
`;

export const ItemTitle = styled.h2`
  font-size: 20px;
`;

export const ItemDesc = styled.p`
  color: #777;
  font-size: 18px;
`;

export const SettingsStyled = styled.div`
  display: flex;
  
  aside {
    display: inline-block;
    width: 50%;

    &:last-of-type {
      .table {
        font-size: 14px;

        th {
          font-weight: normal;
          text-align: left;
        }
      }
    }
  }
`;
