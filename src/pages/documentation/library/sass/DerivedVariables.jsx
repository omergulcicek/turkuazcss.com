import React from "react"

import { Table } from "./../../../../components/Styled"

const DerivedVariables = () => {
  return (
    <>
      <section>
        <h3>Türetilmiş Değişkenler</h3>

        <Table className="table is-bordered">
          <tbody>
            <tr>
              <th>Değişken adı</th>
              <th>Tür</th>
              <th>Varsayılan değer</th>
              <th>Hesaplanan değer</th>
            </tr>

            <tr>
              <td>
                <code>$text</code>
              </td>
              <td>
                <code>color</code>
              </td>
              <td>
                <code>$black</code>
              </td>
              <td>
                <div style={{"background-color": "#191919"}}></div>
                <code>#191919</code>
              </td>
            </tr>

            <tr>
              <td>
                <code>$link</code>
              </td>
              <td>
                <code>color</code>
              </td>
              <td>
                <code>$blue</code>
              </td>
              <td>
                <div style={{"background-color": "#2196f3"}}></div>
                <code>#2196f3</code>
              </td>
            </tr>

            <tr>
              <td>
                <code>$mark</code>
              </td>
              <td>
                <code>color</code>
              </td>
              <td>
                <code>$yellow</code>
              </td>
              <td>
                <div style={{"background-color": "#ffee58"}}></div>
                <code>#ffee58</code>
              </td>
            </tr>

            <tr>
              <td>
                <code>$primary</code>
              </td>
              <td>
                <code>color</code>
              </td>
              <td>
                <code>$turquoise</code>
              </td>
              <td>
                <div style={{"background-color": "#26a69a"}}></div>
                <code>#26a69a</code>
              </td>
            </tr>

            <tr>
              <td>
                <code>$secondary</code>
              </td>
              <td>
                <code>color</code>
              </td>
              <td>
                <code>$grey-lighter</code>
              </td>
              <td>
                <div style={{"background-color": "#f5f5f5"}}></div>
                <code>#f5f5f5</code>
              </td>
            </tr>
            
            <tr>
              <td>
                <code>$success</code>
              </td>
              <td>
                <code>color</code>
              </td>
              <td>
                <code>$green</code>
              </td>
              <td>
                <div style={{"background-color": "#23d160"}}></div>
                <code>#23d160</code>
              </td>
            </tr>
            
            <tr>
              <td>
                <code>$warning</code>
              </td>
              <td>
                <code>color</code>
              </td>
              <td>
                <code>$orange</code>
              </td>
              <td>
                <div style={{"background-color": "#ffca28"}}></div>
                <code>#ffca28</code>
              </td>
            </tr>

            <tr>
              <td>
                <code>$danger</code>
              </td>
              <td>
                <code>color</code>
              </td>
              <td>
                <code>$red</code>
              </td>
              <td>
                <div style={{"background-color": "#f44336"}}></div>
                <code>#f44336</code>
              </td>
            </tr>

            <tr>
              <td>
                <code>$info</code>
              </td>
              <td>
                <code>color</code>
              </td>
              <td>
                <code>$blue</code>
              </td>
              <td>
                <div style={{"background-color": "#2196f3"}}></div>
                <code>#2196f3</code>
              </td>
            </tr>

            <tr>
              <td>
                <code>$body-background-color</code>
              </td>
              <td>
                <code>color</code>
              </td>
              <td>
                <code>$white</code>
              </td>
              <td>
                <div style={{"background-color": "#fff"}}></div>
                <code>#fff</code>
              </td>
            </tr>

            <tr>
              <td>
                <code>$body-text-color</code>
                <template>
                  //TODO : body-color'ı body-text-color olarak değiştir
                </template>
              </td>
              <td>
                <code>color</code>
              </td>
              <td>
                <code>$text</code>
              </td>
              <td>
                <div style={{"background-color": "#191919"}}></div>
                <code>#191919</code>
              </td>
            </tr>

            <tr>
              <td>
                <code>$body-family</code>
              </td>
              <td>
                <code>font-family</code>
              </td>
              <td>
                <code>$font-family</code>
              </td>
              <td>
                <code>-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Open Sans"</code>
              </td>
            </tr>

            <tr>
              <td>
                <code>$body-size</code>
              </td>
              <td>
                <code>size</code>
              </td>
              <td>
                <code>$font-size</code>
              </td>
              <td>
                <code>16px</code>
              </td>
            </tr>

            <tr>
              <td>
                <code>$border-color</code>
                <template>
                  //TODO : border'ı border-color olarak ek değişkenle tanımla
                </template>
              </td>
              <td>
                <code>color</code>
              </td>
              <td>
                <code>$grey-light</code>
              </td>
              <td>
                <div style={{"background-color": "#dbdbdd"}}></div>
                <code>#dbdbdd</code>
              </td>
            </tr>
          </tbody>
        </Table>
      </section>
    </>
  )
}

export default DerivedVariables