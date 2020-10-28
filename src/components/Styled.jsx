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

  nav a {
    border-radius: 4px;
    color: inherit;
    font-size: 15px;
    margin-bottom: 0;
    margin-right: 4px;
    padding: 8px 12px;
    scroll-margin-top: 80px;

    &:hover,
    &:focus,
    &.active {
      background-color: #fafafa;
      text-decoration: none;
    }

    &:first-child svg {
      margin-right: 0
    }
  }
`;


export const Brand = styled.span`
  color: #26a69a;
  cursor: default;
  font-size: 24px;
  font-weight: 600;
  line-height: 1;
  user-select: none;

  span {
    color: #191919;
  }

  a {
    color: inherit;
    font-size: inherit;

    &:hover,
    &:focus {
      background-color: transparent;
      text-decoration: none
    }
  }
`;

export const MainStyled = styled.main`
  flex: 1;
  margin: 40px auto;
  width: 90%;

  & > section:first-of-type .breadcrumb a {
    scroll-margin-top: 160px;
  }
  
  @media (min-width: 576px){
    max-width:540px
  }
  @media (min-width: 768px){
    max-width:720px
  }
  @media (min-width: 992px){
    max-width:960px
  }
  @media (min-width: 1200px){
    max-width:1000px
  }
`;


export const FooterStyled = styled.footer`
  background-color: #f0f7f7;
  border-top: 2px solid rgba(0,0,0,.1);
  background-color: #fff;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  flex-shrink: 0;
  font-size: 13px;
  padding-bottom: 80px;
  padding-top: 80px;

  p {
    color: #818184;
    font-size: inherit;
    line-height: 22px;
    margin-bottom: 0px;

    &:first-of-type {
      margin-top: 24px;
    }

    a {
      color: inherit;

      &:hover,
      &:focus {
        text-decoration: underline;
      }
    }
  }
`;

export const FooterFlex = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;

  div {
    margin-bottom: 64px;
  }

  nav {
    li{
      margin-bottom: 4px;

      a {
        color: #26a69a;

        &:hover,
        &:focus {
          text-decoration: underline;
        }
      }
    }
  }

  @media (min-width: 768px){
    flex-direction: row;
    justify-content: space-between;

    div {
      margin-bottom: 0;
    }

    nav {
      text-align: right;
    }
  }
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

  div {    
    a {
      font-size: 20px;
      line-height: 30px;
      padding: 12px 32px !important;
      scroll-margin-top: 640px;
      vertical-align: top;
    }
  }
`;

export const HomeLibrarySection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 120px;

  article {
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    margin-top: 16px;
    min-width: 240px;
    padding: 24px;
    text-align: center;

    h5 {
      color: #343434;
      font-size: 20px;
      margin: 0 0 8px;
      transition: .3s;
    }

    span {
      color: #b5b5b5;
      transition: .3s;
    }

    svg {
      margin-top: 16px
    }
  }

  a:focus {
    box-shadow: none
  }

  a:hover {
    text-decoration: none;
    
    article {
      background-color: rgba(0,0,0,.025);

      &.sass h5 {
        color: #CD6799;
      }

      &.react h5 {
        color: #61dafb;
      }
      
      &.vue h5 {
        color: #41B883;
      }

      span {
        color: #202124;
      }
    }
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

  &:hover,
  &:focus {
    background-color: #252525;
    color: #fff;
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

    &:hover,
    &:focus {
      background-color: #f7f7f7;
      text-decoration: none;
    }
  }
`;

export const BaseTempDescStyled = styled.h2`
  color: #7a7a7a;
  font-size: 24px;
  font-weight: 100;
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

export const Pagination = styled.section`
  align-item: center;
  display: flex;
  justify-content: space-between;

  a:first-child {
    svg {
      margin-right: 8px
    }
  }

  a:last-child {
    svg {
      margin-left: 8px
    }
  }
`;

export const TurquoiseColor = styled.span`
  color: #03968a
`;

export const Library = styled.section`
  span {
    color: #aaa;
    display: inline-block;
    font-size: 30px;
    line-height: 30px;
    margin: 0 20px;
  }
`;

export const Table = styled.table`
  th {
    text-align: left
  }

  code {
    background-color: #f5f5f5;
    color: #ff3860;
    font-size: .875em;
    font-weight: 400;
    padding: .25em .5em .25em;
    vertical-align: middle;
    white-space: nowrap;
  }

  div {
    border-radius: 2px;
    box-shadow: 0 2px 3px 0 rgba(0,0,0,.1), inset 0 0 0 1px rgba(0,0,0,.1);
    display: inline-block;
    height: 24px;
    margin-right: 8px;
    position: relative;
    top: 4px;
    width: 24px
  }
`;

export const Theme = styled.article`
  margin-bottom: 40px;

  figure {
    height: 242px;
    overflow: hidden;

    img {
      border-radius: 4px 4px 0 0;
      transition: 480ms 160ms;
    }
  }

  div {
    margin-top: 8px;
  }

  h6 {
    color: #191919;
    font-size: 19px;
    font-weight: 300;
    line-height: 27px;
    margin-bottom: 0
  }

  p {
    color: #7a7a7a;
    font-size: 18px;
    font-weight: 300;
    line-height: 27px;
  }

  &:hover,
  &:focus-within {
    cursor: pointer;

    a {
      text-decoration: none;
    }

    img {
      transform: scale(1.05)
    }

    h6 {
      color: #2196f3
    }
  }
`;

export const ThemeDetail = styled.section`
  article {
    margin-bottom: 40px;
    position: relative;

    img {
      border-radius: 4px;
    }

    div {
      align-items: center;
      background-color: rgba(38, 166, 154, 0.8);
      border-radius: 4px;
      cursor: pointer;
      display: flex;
      height: 100%;
      justify-content: center;
      left: 0;
      opacity: 0;
      position: absolute;
      top: 0;
      transition: 240ms 160ms;
      visibility: hidden;
      width: 100%;
    }

    &:hover div,
    &:focus-within div {
      opacity: 1;
      visibility: visible;
    }
  }
  
  ol {
    border-top: 1px solid #e0e0e0;

    li {
      border-bottom: 1px solid #e0e0e0;
      display: flex;
      justify-content: space-between;
      padding: 12px 0;
    }
  }
`;

export const MigrationArticle = styled.article`
  border-bottom: 2px dashed rgba(0,0,0,0.1);
  margin-bottom: 16px;
  padding-bottom: 32px;
  padding-top: 32px;
`;

export const PreviewStyles = styled.section`

  .text-center {
    text-align: center;
  }

  article {
    margin-bottom: 196px;
  }

  .preview-color-style {
    div span {
      border: 1px solid rgba(0 0 0 / 0.1);
      border-radius: 100%;
      cursor: pointer;
      display: inline-block;
      height: 40px;
      position: relative;
      width: 40px;

      &:nth-child(1) {
        background-color: #26a69a;
        transform: translateX(24px);
      }

      &:nth-child(2) {
        background-color: #2196f3;
        transform: translateX(16px);
      }

      &:nth-child(3) {
        background-color: #f44336;
        transform: translateX(5px);
      }

      &:nth-child(4) {
        background-color: #ffca28;
        transform: translateX(0);
      }

      &:nth-child(5) {
        background-color: #ffee58;
        transform: translateX(-8px);
      }

      &:nth-child(6) {
        background-color: #23d160;
        transform: translateX(-16px);
      }
    }
  }
`;

export const FocusStyled = styled.div`
  a {
    border-radius: 2px;
    color: #2228af;
    cursor: pointer;
    display: inline-block;
    font-size: 14px;
    line-height: 20px;
    text-decoration: underline;
    left: 8px;
    position: absolute;
    top: 27px;

    &:not(:focus) {
      clip: rect(1px,1px,1px,1px);
    }
  }
`;

export const ModalExample = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 24px 8px;
  position: relative;

  .modal {
    animation: none;
    margin: 0 0 40px 0;
    left: revert;
    position: relative;
    transform: inherit;
    width: 90%;
    
    @media (min-width: 1024px) {
      width: 47%;
    }
  }
`;