import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import { Layout } from "./components"
import {
  Home, Documentation, Theme, About,
  Elements,
  Overview, Turkuaz, Start, Syntax, Support, Migration, Preview,
  Library, CSS, Sass, ReactJS, VueJS,
  Form, Input, Textarea, Select, Checkbox, Radio, SwitchCheck,
  Components, Button, Breadcrumb, Delete, Divider, Dropdown, Tag, Footer, Card, Box, List, Navbar, Modal, Pagination, Progress, Image, Badge, Table, Tooltip, Notification, Media, Overlay, Title,
  Brand, Team
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

          {/* Dokümantasyon  */}
          <Route exact path="/docs">
            <Documentation />
          </Route>

          {/* Dokümantasyon - Genel Bakış */}
          <Route exact path="/docs/overview">
            <Overview />
          </Route>

          <Route path="/docs/overview/start">
            <Start />
          </Route>

          <Route path="/docs/overview/preview">
            <Preview />
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

          {/* Dokümantasyon - Farklı Platformlar */}
          <Route exact path="/docs/library">
            <Library />
          </Route>

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

          {/* Dokümantasyon - Form */}
          <Route exact path="/docs/form">
            <Form />
          </Route>

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

          {/* Dokümantasyon - Elementler */}
          <Route exact path="/docs/elements">
            <Elements />
          </Route>

          <Route path="/docs/elements/badge">
            <Badge />
          </Route>

          <Route path="/docs/elements/box">
            <Box />
          </Route>

          <Route path="/docs/elements/button">
            <Button />
          </Route>

          <Route path="/docs/elements/delete">
            <Delete />
          </Route>

          <Route path="/docs/elements/divider">
            <Divider />
          </Route>

          <Route path="/docs/elements/image">
            <Image />
          </Route>

          <Route path="/docs/elements/notification">
            <Notification />
          </Route>

          <Route path="/docs/elements/overlay">
            <Overlay />
          </Route>

          <Route path="/docs/elements/progress">
            <Progress />
          </Route>

          <Route path="/docs/elements/table">
            <Table />
          </Route>

          <Route path="/docs/elements/tag">
            <Tag />
          </Route>
        
          <Route path="/docs/elements/title">
            <Title />
          </Route>

          <Route path="/docs/elements/tooltip">
            <Tooltip />
          </Route>

          {/* Dokümantasyon - Bileşenler */}
          <Route exact path="/docs/components">
            <Components />
          </Route>

          <Route path="/docs/components/breadcrumb">
            <Breadcrumb />
          </Route>
          
          <Route path="/docs/components/card">
            <Card />
          </Route>
          
          <Route path="/docs/components/dropdown">
            <Dropdown />
          </Route>
          
          <Route path="/docs/components/footer">
            <Footer />
          </Route>
          
          <Route path="/docs/components/list">
            <List />
          </Route>
          
          <Route path="/docs/components/media">
            <Media />
          </Route>
          
          <Route path="/docs/components/modal">
            <Modal />
          </Route>

          <Route path="/docs/components/navbar">
            <Navbar />
          </Route>
          
          <Route path="/docs/components/pagination">
            <Pagination />
          </Route>

          {/* Tema */}
          <Route exact path="/theme">
            <Theme />
          </Route>

          {/* Hakkında */}
          <Route exact path="/about">
            <About />
          </Route>

          <Route path="/about/turkuaz">
            <Turkuaz />
          </Route>

          <Route path="/about/team">
            <Team />
          </Route>

          <Route path="/about/brand">
            <Brand />
          </Route>

        </Switch>
      </Layout>
    </Router>
  )
}

export default App;
