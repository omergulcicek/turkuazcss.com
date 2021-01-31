import React from "react"
import { Link } from "react-router-dom"

import { Brand } from "./Styled"

function App() {
  return (
    <>
      <Brand><Link to="/">turkuaz <span>v1.0.0</span></Link></Brand>
    </>
  );
}

export default App