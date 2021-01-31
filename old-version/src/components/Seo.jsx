import React from "react"
import Helmet from "react-helmet"

const SEO = ({ title }) => {
  return (
    <Helmet
      title={title}
      titleTemplate={`%s · Turkuaz v1.0`}
    />
  )
}

export default SEO