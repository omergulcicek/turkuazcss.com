import React, { Component } from "react"
import { Link } from "react-router-dom"

import { SEO, BasePageHeader, BasePageContent } from "../components"
import { Pagination } from "./Styled"

class BasePage extends Component {  
  render () {
    const { title, desc, breadcrumb, content, pagination, children } = this.props

    return (
      <>
        <SEO title={title} />

        <BasePageHeader
          title={title}
          desc={desc}
          breadcrumb={breadcrumb}
        />

        { children }

        {
          content && 
          <BasePageContent content={content} />
        }

        {
          pagination &&
          
          <Pagination>
            <Link to={pagination.prev.href} className="button is-link is-small">
              <svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512" height="16"><path fill="currentColor" d="M192 127.338v257.324c0 17.818-21.543 26.741-34.142 14.142L29.196 270.142c-7.81-7.81-7.81-20.474 0-28.284l128.662-128.662c12.599-12.6 34.142-3.676 34.142 14.142z"></path></svg>
              {pagination.prev.text}
            </Link>
            
            {
              pagination.next &&
            
              <Link to={pagination.next.href} className="button is-link is-small">
                {pagination.next.text}
                <svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512" height="16"><path fill="currentColor" d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"></path></svg>
              </Link>
            }
          </Pagination>
        }
      </>
    )
  }
}

export default BasePage