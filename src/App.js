import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import { Layout } from "./components"
import {
  Home, Documentation, Theme, About,
  Overview, Turkuaz, Start, Syntax, Support, Migration,
  Library, CSS, Sass, ReactJS, VueJS,
  Form, Input, Textarea, Select, Checkbox, Radio, SwitchCheck,
  Components, Button, Breadcrumb, Delete, Divider, Dropdown, Tag, Footer, Card, Box, List, Navbar, Modal, Pagination, Progress, Image, Badge, Table, Tooltip, Notification
} from "./pages"

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>

          {/* Ana Sayfa */}
          <Route exact path="/">
            <Home />
          </Route>

          {/* Dokümantasyon - Genel Bakış */}
          <Route path="/docs/overview/turkuaz">
            <Turkuaz />
          </Route>

          <Route path="/docs/overview/start">
            <Start />
          </Route>

          <Route path="/docs/overview/syntax">
            <Syntax />
          </Route>

          <Route path="/docs/overview/support">
            <Support />
          </Route>

          <Route path="/docs/overview/migration">
            <Migration />
          </Route>

          <Route path="/docs/overview">
            <Overview />
          </Route>

          {/* Dokümantasyon - Farklı Platformlar */}
          <Route path="/docs/library/css">
            <CSS />
          </Route>

          <Route path="/docs/library/sass">
            <Sass />
          </Route>

          <Route path="/docs/library/react">
            <ReactJS />
          </Route>

          <Route path="/docs/library/vue">
            <VueJS />
          </Route>

          <Route path="/docs/library">
            <Library />
          </Route>

          {/* Dokümantasyon - Form */}
          <Route path="/docs/form/input">
            <Input />
          </Route>
          
          <Route path="/docs/form/textarea">
            <Textarea />
          </Route>
          
          <Route path="/docs/form/select">
            <Select />
          </Route>
          
          <Route path="/docs/form/checkbox">
            <Checkbox />
          </Route>
          
          <Route path="/docs/form/radio">
            <Radio />
          </Route>
          
          <Route path="/docs/form/switch">
            <SwitchCheck />
          </Route>

          <Route path="/docs/form">
            <Form />
          </Route>

          {/* Dokümantasyon - Bileşenler */}
          <Route path="/docs/components/breadcrumb">
            <Breadcrumb />
          </Route>
          
          <Route path="/docs/components/button">
            <Button />
          </Route>
          
          <Route path="/docs/components/delete">
            <Delete />
          </Route>
          
          <Route path="/docs/components/divider">
            <Divider />
          </Route>
          
          <Route path="/docs/components/dropdown">
            <Dropdown />
          </Route>

          <Route path="/docs/components/tag">
            <Tag />
          </Route>

          <Route path="/docs/components/footer">
            <Footer />
          </Route>
          
          <Route path="/docs/components/card">
            <Card />
          </Route>
          
          <Route path="/docs/components/box">
            <Box />
          </Route>
          
          <Route path="/docs/components/list">
            <List />
          </Route>
          
          <Route path="/docs/components/navbar">
            <Navbar />
          </Route>
          
          <Route path="/docs/components/modal">
            <Modal />
          </Route>
          
          <Route path="/docs/components/pagination">
            <Pagination />
          </Route>
          
          <Route path="/docs/components/progress">
            <Progress />
          </Route>
          
          <Route path="/docs/components/image">
            <Image />
          </Route>
          
          <Route path="/docs/components/badge">
            <Badge />
          </Route>
          
          <Route path="/docs/components/table">
            <Table />
          </Route>
          
          <Route path="/docs/components/tooltip">
            <Tooltip />
          </Route>

          <Route path="/docs/components/notification">
            <Notification />
          </Route>

          <Route path="/docs/components">
            <Components />
          </Route>

          <Route path="/docs">
            <Documentation />
          </Route>

          {/* Tema */}
          <Route path="/theme">
            <Theme />
          </Route>

          {/* Hakkında */}
          <Route path="/about">
            <About />
          </Route>

        </Switch>
      </Layout>
    </Router>
  )
}

export default App;
