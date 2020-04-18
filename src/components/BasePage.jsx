import React, { Component } from "react"

import { SEO, BasePageHeader, BasePageContent } from "../components"

class BasePage extends Component {  
  render () {
    const { title, desc, breadcrumb, content } = this.props.content
    
    return (
      <>
        <SEO title={title} />

        <BasePageHeader
          title={title}
          desc={desc}
          breadcrumb={breadcrumb}
        />

        {
          content && 
          <BasePageContent content={content} />
        }
      </>
    )
  }
}

export default BasePage