import React from "react"
import { Link } from "react-router-dom"

import { Brand } from "./Styled"

function App() {
  return (
    <>
      <Brand><Link to="/">turkuaz<span>css</span></Link></Brand>
    </>
  );
}

export default App