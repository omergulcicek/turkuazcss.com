import React, { Component } from "react"

import { SEO, BasePage } from "./../../components"

class App extends Component {
  render () {
    const { title, desc, breadcrumb, content } = obj

    return (
      <section>
        <SEO title={title} />

        <BasePage
          title={title}
          desc={desc}
          breadcrumb={breadcrumb}
          content={content}
        />
      </section>
    )
  }
}

export default App

export const obj = {
  title: "Genel Bakış",
  desc: "Kurulum, kod yapısı ve <strong>destek</strong> olmanız için çeşitli bilgiler",
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
      text: "Genel Bakış",
      link: "/overview"
    }
  ],
  content: [
    {
      text: "Turkuaz'ın Hikayesi",
      link: "/docs/overview/turkuaz",
      desc: "Bir framework olan Turkuaz'ın neyle ilgili olduğuna genel bir bakış",
      icon: '<svg xmlns="http://www.w3.org/2000/Svg" role="img" viewBox="0 0 109.000000 162.000000" height="40"><g transform="translate(0.000000,162.000000) scale(0.100000,-0.100000)" stroke="none" fill="#03968a"><path d="M20 1083 c0 -570 2 -588 61 -706 65 -128 168 -231 295 -295 110 -55 156 -62 433 -62 l251 0 0 38 c0 104 -61 202 -153 245 -44 21 -72 26 -180 30 -106 5 -136 10 -180 30 -76 35 -122 79 -159 155 l-33 67 -5 410 -5 410 -27 47 c-54 91 -152 148 -254 148 l-44 0 0 -517z"></path><path d="M490 1048 c-91 -63 -93 -204 -3 -264 69 -46 223 -38 302 16 25 18 58 49 73 70 27 37 58 132 58 177 l0 23 -199 0 c-189 0 -200 -1 -231 -22z"></path></g></svg>'
    },
    {
      text: "Kurulum",
      link: "/docs/overview/start",
      desc: "Projenize uygun Turkuaz paketini nasıl kullanacağınıza ait bilgiler",
      icon: '<svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" height="40"><path fill="#ff9800" d="M528 288h-92.1l46.1-46.1c30.1-30.1 8.8-81.9-33.9-81.9h-64V48c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v112h-64c-42.6 0-64.2 51.7-33.9 81.9l46.1 46.1H48c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V336c0-26.5-21.5-48-48-48zm-400-80h112V48h96v160h112L288 368 128 208zm400 256H48V336h140.1l65.9 65.9c18.8 18.8 49.1 18.7 67.9 0l65.9-65.9H528v128zm-88-64c0-13.3 10.7-24 24-24s24 10.7 24 24-10.7 24-24 24-24-10.7-24-24z" class=""></path></svg>'
    },
    {
      text: "Kod Yapısı",
      link: "/docs/overview/syntax",
      desc: "Turkuaz'ın kullandığı sınıflandırma hakkında detaylar",
      icon: '<svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" height="40"><path fill="#e91e63" d="M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"></path></svg>'
    },
    {
      text: "Destek Ol",
      link: "/docs/overview/support",
      desc: "Projeye nasıl destek olabileceğinizi öğrenin",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 640 512" height="40" fill="#4caf50"><path d="M488 192H336v56c0 39.7-32.3 72-72 72s-72-32.3-72-72V126.4l-64.9 39C107.8 176.9 96 197.8 96 220.2v47.3l-80 46.2C.7 322.5-4.6 342.1 4.3 357.4l80 138.6c8.8 15.3 28.4 20.5 43.7 11.7L231.4 448H368c35.3 0 64-28.7 64-64h16c17.7 0 32-14.3 32-32v-64h8c13.3 0 24-10.7 24-24v-48c0-13.3-10.7-24-24-24zm147.7-37.4L555.7 16C546.9.7 527.3-4.5 512 4.3L408.6 64H306.4c-12 0-23.7 3.4-33.9 9.7L239 94.6c-9.4 5.8-15 16.1-15 27.1V248c0 22.1 17.9 40 40 40s40-17.9 40-40v-88h184c30.9 0 56 25.1 56 56v28.5l80-46.2c15.3-8.9 20.5-28.4 11.7-43.7z"></path></svg>'
    },
    {
      text: "Versiyon Değişikliği",
      link: "/docs/overview/migration",
      desc: "Eski versiyonlar ve yeni versiyona geçerken dikkat etmeniz gerekenler",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 384 512" height="40" fill="#1976d2"><path d="M384 144c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 36.4 24.3 67.1 57.5 76.8-.6 16.1-4.2 28.5-11 36.9-15.4 19.2-49.3 22.4-85.2 25.7-28.2 2.6-57.4 5.4-81.3 16.9v-144c32.5-10.2 56-40.5 56-76.3 0-44.2-35.8-80-80-80S0 35.8 0 80c0 35.8 23.5 66.1 56 76.3v199.3C23.5 365.9 0 396.2 0 432c0 44.2 35.8 80 80 80s80-35.8 80-80c0-34-21.2-63.1-51.2-74.6 3.1-5.2 7.8-9.8 14.9-13.4 16.2-8.2 40.4-10.4 66.1-12.8 42.2-3.9 90-8.4 118.2-43.4 14-17.4 21.1-39.8 21.6-67.9 31.6-10.8 54.4-40.7 54.4-75.9zM80 64c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16zm0 384c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zm224-320c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16z"></path></svg>'
    }
  ]
}