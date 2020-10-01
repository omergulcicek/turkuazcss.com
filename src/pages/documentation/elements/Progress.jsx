import React from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"

import { BasePage } from "../../../components"

export const obj = {
  title: "Progress Bar",
  desc: "Sade ve şık ilerleme çubukları",
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
      text: "Progress Bar",
      link: "/progress"
    }
  ],
  editlink: "https://github.com/omergulcicek/turkuazcss.com/blob/master/src/pages/documentation/elements/Progress.jsx",
  pagination: {
    prev: {
      href: "notification",
      text: "Notification"
    },
    next: {
      href: "table",
      text: "Table"
    }
  }
}

const App = () => {
  return (
    <BasePage info={obj}>
      <section>
        <div className="row mb-3">
          <div className="col-12 col-md-6 col-lg-4">
            <progress class="progress" value="15" max="100"></progress>
          </div>
        </div>

        <SyntaxHighlighter language="html">
{`<progress class="progress" value="15" max="100"></progress>`}
        </SyntaxHighlighter>
      </section>

      <section>
        <h2>Boyut</h2>

        <p>
          Progress elementi 3 farklı boyuta sahiptir.
        </p>

        <div className="row mb-3">
          <div className="col-12 col-md-6 col-lg-4">
            <progress class="progress is-small mb-1" value="15" max="100"></progress>
            <progress class="progress mb-1" value="30" max="100"></progress>
            <progress class="progress is-large" value="45" max="100"></progress>
          </div>
        </div>

        <SyntaxHighlighter language="html">
{`<progress class="progress is-small" value="15" max="100"></progress>

<progress class="progress" value="30" max="100"></progress>

<progress class="progress is-large" value="45" max="100"></progress>`}
        </SyntaxHighlighter>
      </section>

      <section>
        <h2>Renk</h2>

        <p>
          Progress elementi 5 farklı renge sahiptir.
        </p>

        <div className="row mb-3">
          <div className="col-12 col-md-6 col-lg-4">
            <progress class="progress mb-1" value="15" max="100"></progress>
            <progress class="progress is-success mb-1" value="30" max="100"></progress>
            <progress class="progress is-danger mb-1" value="45" max="100"></progress>
            <progress class="progress is-warning mb-1" value="60" max="100"></progress>
            <progress class="progress is-info mb-1" value="75" max="100"></progress>
          </div>
        </div>

        <SyntaxHighlighter language="html">
{`<progress class="progress" value="15" max="100"></progress>

<progress class="progress is-success" value="30" max="100"></progress>

<progress class="progress is-danger" value="45" max="100"></progress>

<progress class="progress is-warning" value="60" max="100"></progress>

<progress class="progress is-info" value="75" max="100"></progress>`}
        </SyntaxHighlighter>
      </section>
    </BasePage>
  )
}

export default App