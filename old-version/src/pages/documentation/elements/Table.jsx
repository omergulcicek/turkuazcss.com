import React from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"

import { BasePage } from "../../../components"

export const obj = {
  title: "Table",
  desc: "Basit ve farklı seçenekler ile özelleştirilmiş HTML tablo elementi",
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
      text: "Table",
      link: "/table"
    }
  ],
  editlink: "documentation/elements/Table",
  pagination: {
    prev: {
      href: "progress",
      text: "Progress"
    },
    next: {
      href: "tag",
      text: "Tag"
    }
  }
}

const App = () => {
  return (
    <BasePage info={obj}>
      <section>
        <table class="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Ad</th>
              <th>Soyad</th>
              <th>GitHub</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Ömer</td>
              <td>Gülçiçek</td>
              <td>
                <a href="https://github.com/omergulcicek" target="_blank" rel="noopener noreferrer">@omergulcicek</a>
              </td>
            </tr>

            <tr>
              <td>2</td>
              <td>Taner</td>
              <td>Alkan</td>
              <td>
                <a href="https://github.com/tanerakhan" target="_blank" rel="noopener noreferrer">@tanerakhan</a>
              </td>
            </tr>

            <tr>
              <td>3</td>
              <td>Önder</td>
              <td>Bakırtaş</td>
              <td>
                <a href="https://github.com/onderbakirtas" target="_blank" rel="noopener noreferrer">@onderbakirtas</a>
              </td>
            </tr>
          </tbody>
        </table>

        <SyntaxHighlighter language="html">
{`<table class="table">
  <thead>
    <tr>
      <th>#</th>
      <th>Ad</th>
      <th>Soyad</th>
      <th>GitHub</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Ömer</td>
      <td>Gülçiçek</td>
      <td>
        <a href="https://github.com/omergulcicek" target="_blank" rel="noopener noreferrer">@omergulcicek</a>
      </td>
    </tr>
  </tbody>
</table>`}
        </SyntaxHighlighter>
      </section>

      <section>
        <h3>Çeşit</h3>

        <div className="row">
          <div className="col-12 col-md-8">
            <p>
              Tüm hücrelere kenarlık eklemek için <code>is-bordered</code>
            </p>
            
            <SyntaxHighlighter language="html">
{`<table class="table is-bordered"> ... </table>`}
            </SyntaxHighlighter>
          </div>

          <div className="col-12 col-md-auto">
            <table class="table is-bordered mb-5">
              <thead>
                <tr>
                  <th>1</th>
                  <th>2</th>
                  <th>3</th>
                  <th>4</th>
                  <th>5</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>6</td>
                  <td>7</td>
                  <td>8</td>
                  <td>9</td>
                  <td>10</td>
                </tr>

                <tr>
                  <td>11</td>
                  <td>12</td>
                  <td>13</td>
                  <td>14</td>
                  <td>15</td>
                </tr>

                <tr>
                  <td>16</td>
                  <td>17</td>
                  <td>18</td>
                  <td>19</td>
                  <td>20</td>
                </tr>

                <tr>
                  <td>21</td>
                  <td>22</td>
                  <td>23</td>
                  <td>24</td>
                  <td>25</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-md-8">
            <p>
              Satırları açık-koyu renk yapmak için <code>is-striped</code>
            </p>

            <SyntaxHighlighter language="html">
{`<table class="table is-striped"> ... </table>`}
            </SyntaxHighlighter>
          </div>

          <div className="col-12 col-md-auto">
            <table class="table is-striped mb-5">
            <thead>
                <tr>
                  <th>1</th>
                  <th>2</th>
                  <th>3</th>
                  <th>4</th>
                  <th>5</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>6</td>
                  <td>7</td>
                  <td>8</td>
                  <td>9</td>
                  <td>10</td>
                </tr>

                <tr>
                  <td>11</td>
                  <td>12</td>
                  <td>13</td>
                  <td>14</td>
                  <td>15</td>
                </tr>

                <tr>
                  <td>16</td>
                  <td>17</td>
                  <td>18</td>
                  <td>19</td>
                  <td>20</td>
                </tr>

                <tr>
                  <td>21</td>
                  <td>22</td>
                  <td>23</td>
                  <td>24</td>
                  <td>25</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-md-8">
            <p>
              Üzerine gelindiğinde hover efekti için <code>is-hoverable</code>
            </p>

            <SyntaxHighlighter language="html">
{`<table class="table is-hoverable"> ... </table>`}
            </SyntaxHighlighter>
          </div>

          <div className="col-12 col-md-auto">
            <table class="table is-hoverable mb-5">
            <thead>
                <tr>
                  <th>1</th>
                  <th>2</th>
                  <th>3</th>
                  <th>4</th>
                  <th>5</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>6</td>
                  <td>7</td>
                  <td>8</td>
                  <td>9</td>
                  <td>10</td>
                </tr>

                <tr>
                  <td>11</td>
                  <td>12</td>
                  <td>13</td>
                  <td>14</td>
                  <td>15</td>
                </tr>

                <tr>
                  <td>16</td>
                  <td>17</td>
                  <td>18</td>
                  <td>19</td>
                  <td>20</td>
                </tr>

                <tr>
                  <td>21</td>
                  <td>22</td>
                  <td>23</td>
                  <td>24</td>
                  <td>25</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-md-8">
            <p>
              Farklı sınıfları bir arada kullanarak kombin yapabilirsin.
            </p>

            <SyntaxHighlighter language="html">
{`<table class="table is-small is-bordered is-striped is-hoverable"> ... </table>`}
            </SyntaxHighlighter>
          </div>

          <div className="col-12 col-md-auto">
            <table class="table is-small is-bordered is-striped is-hoverable">
            <thead>
                <tr>
                  <th>1</th>
                  <th>2</th>
                  <th>3</th>
                  <th>4</th>
                  <th>5</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>6</td>
                  <td>7</td>
                  <td>8</td>
                  <td>9</td>
                  <td>10</td>
                </tr>

                <tr>
                  <td>11</td>
                  <td>12</td>
                  <td>13</td>
                  <td>14</td>
                  <td>15</td>
                </tr>

                <tr>
                  <td>16</td>
                  <td>17</td>
                  <td>18</td>
                  <td>19</td>
                  <td>20</td>
                </tr>

                <tr>
                  <td>21</td>
                  <td>22</td>
                  <td>23</td>
                  <td>24</td>
                  <td>25</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </BasePage>
  )
}

export default App