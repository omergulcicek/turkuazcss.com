import React from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"

import { BasePage } from "../../../components"

export const obj = {
  title: "Button",
  desc: "Farklı boyut, çeşit ve renklerde tasarlanmış harika butonlar ile tanışın",
  breadcrumb: [
    {
      text: "Ana Sayfa",
      link: "/"
    },
    {
      text: "Dokümantasyon",
      link: "/docs"
    },
    {
      text: "Elementler",
      link: "/elements"
    },
    {
      text: "Button",
      link: "/button"
    }
  ],
  editlink: "documentation/elements/Button",
  pagination: {
    prev: {
      href: "box",
      text: "Box"
    },
    next: {
      href: "delete",
      text: "Delete"
    }
  }
}

const App = () => {
  return (
    <BasePage info={obj}>
      <section>
        <div className="row mb-3">
          <div className="col-12">
            <a className="button mr-1 mb-1">Button</a>
            <a className="button is-primary mr-1 mb-1">primary</a>
            <a className="button is-secondary mr-1 mb-1">secondary</a>
            <a className="button is-success mr-1 mb-1">success</a>
            <a className="button is-warning mr-1 mb-1">warning</a>
            <a className="button is-danger mr-1 mb-1">danger</a>
            <a className="button is-info mr-1 mb-1">info</a>
            <a className="button is-link mr-1 mb-1">link</a>
          </div>
        </div>

        <SyntaxHighlighter language="html">
{`<a class="button">Button</a>
<a class="button is-primary">primary</a>
<a class="button is-secondary">secondary</a>
<a class="button is-success">success</a>
<a class="button is-warning">warning</a>
<a class="button is-danger">danger</a>
<a class="button is-info">info</a>
<a class="button is-link">link</a>`}
        </SyntaxHighlighter>

        <div className="notification is-info mt-5">
          <strong>a, button</strong> yada <strong>input[type=button]</strong> hepsi aynı çıktıyı verir.
        </div>
      </section>

      <section>
        <h3>Boyut</h3>

        <p>
          Button elementi 3 farklı boyuta sahiptir.
        </p>

        <div className="row mb-3">
          <div className="col-12 col-md-6 col-lg-4">
            <a className="button is-small mr-1">Small</a>
            <a className="button mr-1">Normal</a>
            <a className="button is-large">Large</a>
          </div>
        </div>

        <SyntaxHighlighter language="html">
{`<a class="button is-small">Small</a>
<a class="button">Normal</a>
<a class="button is-large">Large</a>`}
        </SyntaxHighlighter>
      </section>

      <section>
        <h3>Çeşit</h3>
        
        <h6 className="mt-4">disabled</h6>

        <div className="row mb-3">
          <div className="col-12">
            <p>
              <a className="button mr-1 mb-1" disabled>button</a>
              <a className="button is-primary mr-1 mb-1" disabled>primary</a>
              <a className="button is-secondary mr-1 mb-1" disabled>secondary</a>
              <a className="button is-success mr-1 mb-1" disabled>success</a>
              <a className="button is-warning mr-1 mb-1" disabled>warning</a>
              <a className="button is-danger mr-1 mb-1" disabled>danger</a>
              <a className="button is-info mr-1 mb-1" disabled>info</a>
            </p>
          </div>

          <div className="col-12 col-md-8">
            <SyntaxHighlighter language="html">
{`<a class="button" disabled>disabled</a>`}
            </SyntaxHighlighter>
          </div>
        </div>

        <h6 className="mt-5">outline</h6>

        <div className="row mb-3">
          <div className="col-12">
            <a className="button is-outline is-primary mr-1 mb-1">primary</a>
            <a className="button is-outline is-secondary mr-1 mb-1">secondary</a>
            <a className="button is-outline is-success mr-1 mb-1">success</a>
            <a className="button is-outline is-warning mr-1 mb-1">warning</a>
            <a className="button is-outline is-danger mr-1 mb-1">danger</a>
            <a className="button is-outline is-info mr-1 mb-1">info</a>
          </div>

          <div className="col-12 col-md-8">
            <SyntaxHighlighter language="html">
{`<a class="button is-outline is-primary">primary</a>
<a class="button is-outline is-secondary">secondary</a>
<a class="button is-outline is-success">success</a>
<a class="button is-outline is-warning">warning</a>
<a class="button is-outline is-danger">danger</a>
<a class="button is-outline is-info">info</a>`}
            </SyntaxHighlighter>
          </div>
        </div>

        <h6 className="mt-5">circle</h6>

        <div className="row mb-3">
          <div className="col-12">
            <a className="button is-circle is-small mr-1">S</a>
            <a className="button is-circle mr-1">N</a>
            <a className="button is-circle is-large mr-1">L</a>
          </div>

          <div className="col-12 col-md-8">
            <SyntaxHighlighter language="html">
{`<a class="button is-circle is-small">S</a>
<a class="button is-circle">N</a>
<a class="button is-circle is-large">L</a>`}
            </SyntaxHighlighter>
          </div>
        </div>

        <h6 className="mt-5">square</h6>

        <div className="row mb-3">
          <div className="col-12">
            <a className="button is-square is-small mr-1">S</a>
            <a className="button is-square mr-1">N</a>
            <a className="button is-square is-large mr-1">L</a>
          </div>

          <div className="col-12 col-md-8">
            <SyntaxHighlighter language="html">
{`<a class="button is-square is-small">S</a>
<a class="button is-square">N</a>
<a class="button is-square is-large">L</a>`}
            </SyntaxHighlighter>
          </div>
        </div>

        <h6 className="mt-5">block</h6>

        <div className="row mb-3">
          <div className="col-12 col-md-8">
            <a className="button is-block is-small mr-1 mb-1">Small</a>
            <a className="button is-block mr-1 mb-1">Normal</a>
            <a className="button is-block is-large mr-1 mb-1">Large</a>
          </div>

          <div className="col-12 col-md-8">
            <SyntaxHighlighter language="html">
{`<a class="button is-block is-small">S</a>
<a class="button is-block">N</a>
<a class="button is-block is-large">L</a>`}
            </SyntaxHighlighter>
          </div>
        </div>
      </section>
    </BasePage>
  )
}

export default App