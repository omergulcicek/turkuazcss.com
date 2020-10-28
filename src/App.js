import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import { Layout } from "./components"
import {
  Home,

  Documentation,

  Overview, Start, Preview, Syntax, Support, Migration, 

  Form, Input, Textarea, Select, Checkbox, Radio, SwitchCheck,

  Elements, Box, Button, Delete, Divider, Image, Notification, Progress, Table, Tag, Title, Tooltip,

  Components, Breadcrumb, Card, Dropdown, Footer, List, Media, Modal, Pagination,

  Library, CSS, Sass, ReactJS, VueJS,
  
  Love,

  Themes, ThemeDetails,

  Examples, ExampleDetails,

  About, Turkuaz, Brand
  
} from "./pages"

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>

          {/* Ana Sayfa */}
          <Route exact path="/" component={Home} />

          {/* Dokümantasyon  */}
          <Route exact path="/docs" component={Documentation} />

          {/* Dokümantasyon - Genel Bakış */}
          <Route exact path="/docs/overview" component={Overview} />

          <Route path="/docs/overview/start" component={Start} />

          <Route path="/docs/overview/preview" component={Preview} />

          <Route path="/docs/overview/syntax" component={Syntax} />

          <Route path="/docs/overview/support" component={Support} />

          <Route path="/docs/overview/migration" component={Migration} />

          {/* Dokümantasyon - Farklı Platformlar */}
          <Route exact path="/docs/library" component={Library} />

          <Route path="/docs/library/css" component={CSS} />

          <Route path="/docs/library/sass" component={Sass} />

          <Route path="/docs/library/react" component={ReactJS} />

          <Route path="/docs/library/vue" component={VueJS} />

          {/* Dokümantasyon - Form */}
          <Route exact path="/docs/form" component={Form} />

          <Route path="/docs/form/input" component={Input} />
          
          <Route path="/docs/form/textarea" component={Textarea} />
          
          <Route path="/docs/form/select" component={Select} />
          
          <Route path="/docs/form/checkbox" component={Checkbox} />
          
          <Route path="/docs/form/radio" component={Radio} />
          
          <Route path="/docs/form/switch" component={SwitchCheck} />

          {/* Dokümantasyon - Elementler */}
          <Route exact path="/docs/elements" component={Elements} />

          <Route path="/docs/elements/box" component={Box} />

          <Route path="/docs/elements/button" component={Button} />

          <Route path="/docs/elements/delete" component={Delete} />

          <Route path="/docs/elements/divider" component={Divider} />

          <Route path="/docs/elements/image" component={Image} />

          <Route path="/docs/elements/notification" component={Notification} />

          <Route path="/docs/elements/progress" component={Progress} />

          <Route path="/docs/elements/table" component={Table} />

          <Route path="/docs/elements/tag" component={Tag} />
        
          <Route path="/docs/elements/title" component={Title} />

          <Route path="/docs/elements/tooltip" component={Tooltip} />

          {/* Dokümantasyon - Bileşenler */}
          <Route exact path="/docs/components" component={Components} />

          <Route path="/docs/components/breadcrumb" component={Breadcrumb} />
          
          <Route path="/docs/components/card" component={Card} />
          
          <Route path="/docs/components/dropdown" component={Dropdown} />
          
          <Route path="/docs/components/footer" component={Footer} />
          
          <Route path="/docs/components/list" component={List} />
          
          <Route path="/docs/components/media" component={Media} />
          
          <Route path="/docs/components/modal" component={Modal} />
          
          <Route path="/docs/components/pagination" component={Pagination} />

          {/* Sevgi */}
          <Route exact path="/love" component={Love} />

          {/* Tema */}
          <Route exact path="/themes" component={Themes} />

          <Route path="/themes/:themeId" component={ThemeDetails} />
          
          {/* Örnekler */}
          <Route exact path="/examples" component={Examples} />
          
          <Route exact path="/examples/:exampleId" component={ExampleDetails} />

          {/* Hakkında */}
          <Route exact path="/about" component={About} />

          <Route path="/about/turkuaz" component={Turkuaz} />

          <Route path="/about/brand" component={Brand} />

        </Switch>
      </Layout>
    </Router>
  )
}

export default App;
