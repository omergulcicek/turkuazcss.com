import React from "react"

import { BasePage } from "./../../components"

export const obj = {
  title: "Bileşenler",
  desc: "Şık ve <strong>özelleştirilebilir</strong> bileşenlerini inceleyin",
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
      text: "Bileşenler",
      link: "/components"
    }
  ],
  content: [
    {
      text: "Breadcrumb",
      link: "/docs/components/breadcrumb",
      desc: "Navigasyon deneyiminizi geliştirmek için basit bir sayfa konumu bileşeni",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 384 512" height="40" fill="#038075"><path d="M298.028 214.267L285.793 96H328c13.255 0 24-10.745 24-24V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v48c0 13.255 10.745 24 24 24h42.207L85.972 214.267C37.465 236.82 0 277.261 0 328c0 13.255 10.745 24 24 24h136v104.007c0 1.242.289 2.467.845 3.578l24 48c2.941 5.882 11.364 5.893 14.311 0l24-48a8.008 8.008 0 0 0 .845-3.578V352h136c13.255 0 24-10.745 24-24-.001-51.183-37.983-91.42-85.973-113.733z"></path></svg>'
    },
    {
      text: "Card",
      link: "/docs/components/card",
      desc: "Her yönüyle esnek ve özelleştirilebilir kart bileşenleri",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 576 512" height="40" fill="#512da8"><path d="M528 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-352 96c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zm112 236.8c0 10.6-10 19.2-22.4 19.2H86.4C74 384 64 375.4 64 364.8v-19.2c0-31.8 30.1-57.6 67.2-57.6h5c12.3 5.1 25.7 8 39.8 8s27.6-2.9 39.8-8h5c37.1 0 67.2 25.8 67.2 57.6v19.2zM512 312c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-64c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-64c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16z"></path></svg>'
    },
    {
      text: "Dropdown",
      link: "/docs/components/dropdown",
      desc: "Etkileşimli bir açılır menü",
      icon: '<svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" height="40"><path fill="#03a9f4" d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"></path></svg>'
    },
    {
      text: "Footer",
      link: "/docs/components/footer",
      desc: "Herhangi bir şey içerebilen basit tasarlanmış footer örnekleri",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 640 512" height="40" fill="#fbc02d"><path d="M192 160h32V32h-32c-35.35 0-64 28.65-64 64s28.65 64 64 64zM0 416c0 35.35 28.65 64 64 64h32V352H64c-35.35 0-64 28.65-64 64zm337.46-128c-34.91 0-76.16 13.12-104.73 32-24.79 16.38-44.52 32-104.73 32v128l57.53 15.97c26.21 7.28 53.01 13.12 80.31 15.05 32.69 2.31 65.6.67 97.58-6.2C472.9 481.3 512 429.22 512 384c0-64-84.18-96-174.54-96zM491.42 7.19C459.44.32 426.53-1.33 393.84.99c-27.3 1.93-54.1 7.77-80.31 15.04L256 32v128c60.2 0 79.94 15.62 104.73 32 28.57 18.88 69.82 32 104.73 32C555.82 224 640 192 640 128c0-45.22-39.1-97.3-148.58-120.81z"></path></svg>'
    },
    {
      text: "List",
      link: "/docs/components/list",
      desc: "Sade görüntüsü ile linkleri listelemenin kolay yolu",
      icon: '<svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="40"><path fill="#f44336" d="M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm-6 400H54a6 6 0 0 1-6-6V86a6 6 0 0 1 6-6h404a6 6 0 0 1 6 6v340a6 6 0 0 1-6 6zm-42-92v24c0 6.627-5.373 12-12 12H204c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h200c6.627 0 12 5.373 12 12zm0-96v24c0 6.627-5.373 12-12 12H204c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h200c6.627 0 12 5.373 12 12zm0-96v24c0 6.627-5.373 12-12 12H204c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h200c6.627 0 12 5.373 12 12zm-252 12c0 19.882-16.118 36-36 36s-36-16.118-36-36 16.118-36 36-36 36 16.118 36 36zm0 96c0 19.882-16.118 36-36 36s-36-16.118-36-36 16.118-36 36-36 36 16.118 36 36zm0 96c0 19.882-16.118 36-36 36s-36-16.118-36-36 16.118-36 36-36 36 16.118 36 36z"></path></svg>'
    },
    {
      text: "Media",
      link: "/docs/components/media",
      desc: "",
      icon: '<svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="40"><path fill="currentColor" d="M12.83 352h262.34A12.82 12.82 0 0 0 288 339.17v-38.34A12.82 12.82 0 0 0 275.17 288H12.83A12.82 12.82 0 0 0 0 300.83v38.34A12.82 12.82 0 0 0 12.83 352zm0-256h262.34A12.82 12.82 0 0 0 288 83.17V44.83A12.82 12.82 0 0 0 275.17 32H12.83A12.82 12.82 0 0 0 0 44.83v38.34A12.82 12.82 0 0 0 12.83 96zM432 160H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0 256H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z" class=""></path></svg>'
    },
    {
      text: "Modal",
      link: "/docs/components/modal",
      desc: "Sitenize kullanıcı bildirimleri veya tamamen özel içerik için iletişim kutuları",
      icon: '<svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="40"><path fill="#22bd22" d="M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm0 394c0 3.3-2.7 6-6 6H54c-3.3 0-6-2.7-6-6V192h416v234z"></path></svg>'
    },
    {
      text: "Navbar",
      link: "/docs/components/navbar",
      desc: "Resim, link, buton ve dropdown destekleyebilen duyarlı menü",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 448 512" height="40" fill="#01579b"><path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg>'
    },
    {
      text: "Pagination",
      link: "/docs/components/pagination",
      desc: "Responsive ve esnek tasarlanmış farklı çeşitlerde ki sayfalandırma bileşeni",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 512 512" height="40" fill="#e91e63"><path d="M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"></path></svg>'
    }
  ]
}

const App = () => {
  return (
    <BasePage info={obj} />
  )
}

export default App