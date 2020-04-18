import React from "react"

import LayoutTemp from "./Layout"
import SEOTemp from "./Seo"
import BasePageTemp from "./BasePage"
import BasePageHeaderTemp from "./BasePageHeader"
import BasePageContentTemp from "./BasePageContent"
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

export function BasePage({ info }) {
  const { title, desc, breadcrumb, content, pagination } = info
  return (
    <>
      <BasePageTemp
        title={title}
        desc={desc}
        breadcrumb={breadcrumb}
        content={content}
        pagination={pagination}
      />
    </>
  )
}

export function BasePageHeader({ title, desc, breadcrumb }) {
  return (
    <BasePageHeaderTemp
      title={title}
      desc={desc}
      breadcrumb={breadcrumb}
    />
  )
}

export function BasePageContent({ content }) {
  return (
    <BasePageContentTemp content={content} />
  )
}

export function Settings({ children }) {
  return (
    <SettingsTemp content={children} />
  )
}