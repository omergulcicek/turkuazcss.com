import React from "react"

import LayoutTemp from "./Layout"
import SEOTemp from "./Seo"
import BasePageTemp from "./BasePage"
import SettingsTemp from "./Settings"

export function Layout({ children }) {
  return (
    <LayoutTemp content={children} />
  )
}

export function SEO({ title }) {
  return (
    <SEOTemp title={title} />
  )
}

export function BasePage({ title, desc, breadcrumb, content }) {
  return (
    <BasePageTemp
      title={title}
      desc={desc}
      breadcrumb={breadcrumb}
      content={content}
    />
  )
}

export function Settings({ children }) {
  return (
    <SettingsTemp
      content={children}
    />
  )
}