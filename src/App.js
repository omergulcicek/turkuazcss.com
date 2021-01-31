import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import { Header, Main, Aside } from "./components"

function App() {
  return (
    <Router>
      <Header />

      <Aside />

      <Main>
        <Switch>
          <Route path="/docs">
            Doküman
          </Route>
          <Route path="/">
            Ana sayfa
          </Route>
        </Switch>
      </Main>
    </Router>
  )
}

export default App