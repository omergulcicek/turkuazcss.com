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
            <a className="button mb-1">Button</a>
            <a className="button is-primary mb-1">primary</a>
            <a className="button is-secondary mb-1">secondary</a>
            <a className="button is-success mb-1">success</a>
            <a className="button is-warning mb-1">warning</a>
            <a className="button is-danger mb-1">danger</a>
            <a className="button is-info mb-1">info</a>
            <a className="button is-link mb-1">link</a>
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
        <h2>Boyut</h2>

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
        <h2>Çeşit</h2>
        
        <h6 className="mt-5">disabled</h6>

        <div className="row mb-3">
          <div className="col-12">
            <p>
              <a className="button mb-1" disabled>button</a>
              <a className="button is-primary mb-1" disabled>primary</a>
              <a className="button is-secondary mb-1" disabled>secondary</a>
              <a className="button is-success mb-1" disabled>success</a>
              <a className="button is-warning mb-1" disabled>warning</a>
              <a className="button is-danger mb-1" disabled>danger</a>
              <a className="button is-info mb-1" disabled>info</a>
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
            <a className="button is-outline is-primary mb-1">primary</a>
            <a className="button is-outline is-secondary mb-1">secondary</a>
            <a className="button is-outline is-success mb-1">success</a>
            <a className="button is-outline is-warning mb-1">warning</a>
            <a className="button is-outline is-danger mb-1">danger</a>
            <a className="button is-outline is-info mb-1">info</a>
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
            <a className="button is-circle is-small">S</a>
            <a className="button is-circle">N</a>
            <a className="button is-circle is-large">L</a>
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
            <a className="button is-square is-small">S</a>
            <a className="button is-square">N</a>
            <a className="button is-square is-large">L</a>
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
          <div className="col-12 col-md-6">
            <a className="button is-block is-small mb-1">Small</a>
            <a className="button is-block mb-1">Normal</a>
            <a className="button is-block is-large mb-1">Large</a>
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

      <section>
        <h2>Kombinasyon</h2>

        <p>
          Button elementinin içerisinde icon kullanabilirsiniz.
        </p>

        <div className="row mb-3">
          <div className="col-12">
            <a className="button">
              <span>Button</span>
              <span className="ml-2">icon</span>
            </a>
          </div>
        </div>

        {
          // TODO: Butonlara ikon ekle
        }

        <SyntaxHighlighter language="html">
{``}
        </SyntaxHighlighter>
      </section>
    </BasePage>
  )
}

export default App