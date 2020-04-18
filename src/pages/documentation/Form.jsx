import React from "react"

import { BasePage } from "./../../components"

export const obj = {
  title: "Form",
  desc: "Sade tasarlanmış <strong>vazgeçilmez</strong> form elemanları",
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
      text: "Form",
      link: "/form"
    }
  ],
  content: [
    {
      text: "Input",
      link: "/docs/form/input",
      desc: "Metin giriş alanı ve çeşitleri",
      icon: '<svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height="40"><path fill="#4caf50" d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>'
    },
    {
      text: "Textarea",
      link: "/docs/form/textarea",
      desc: "Çok satırlı metin giriş alanı ve çeşitleri",
      icon: '<svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height="40"><path fill="#4e342e" d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>'
    },
    {
      text: "Select",
      link: "/docs/form/select",
      desc: "Tarayıcının varsayılan açılır menüsü yeniden tasarlandı",
      icon: '<svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" height="40"><path fill="#e53935" d="M302.189 329.126H196.105l55.831 135.993c3.889 9.428-.555 19.999-9.444 23.999l-49.165 21.427c-9.165 4-19.443-.571-23.332-9.714l-53.053-129.136-86.664 89.138C18.729 472.71 0 463.554 0 447.977V18.299C0 1.899 19.921-6.096 30.277 5.443l284.412 292.542c11.472 11.179 3.007 31.141-12.5 31.141z"></path></svg>'
    },
    {
      text: "Checkbox",
      link: "/docs/form/checkbox",
      desc: "Kullanıcıya çeşitli seçenekleri seçtirin",
      icon: '<svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height="40"><path fill="#43a047" d="M400 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48zm-204.686-98.059l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.248-16.379-6.249-22.628 0L184 302.745l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.25 16.379 6.25 22.628.001z"></path></svg>'
    },
    {
      text: "Radio Buton",
      link: "/docs/form/radio",
      desc: "Kullanıcının seçeneklerden yalnızca birini seçtirin",
      icon: '<svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="40"><path fill="#4c72af" d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm80 248c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80z"></path></svg>'
    },
    {
      text: "Switch",
      link: "/docs/form/switch",
      desc: "Sadece iki seçeneği bulunan özelleştirilmiş bir checkbox",
      icon: '<svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" height="40"><path fill="#be4bdb" d="M384 64H192C86 64 0 150 0 256s86 192 192 192h192c106 0 192-86 192-192S490 64 384 64zm0 336c-79.6 0-144-64.4-144-144s64.4-144 144-144 144 64.4 144 144-64.4 144-144 144z" class=""></path></svg>'
    },
    {
      text: "File",
      link: "/docs/form/file",
      desc: "Dosya yüklemek için ilgili giriş alanı",
      icon: '<svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" height="40"><path fill="#c0ca33" d="M537.6 226.6c4.1-10.7 6.4-22.4 6.4-34.6 0-53-43-96-96-96-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32c-88.4 0-160 71.6-160 160 0 2.7.1 5.4.2 8.1C40.2 219.8 0 273.2 0 336c0 79.5 64.5 144 144 144h368c70.7 0 128-57.3 128-128 0-61.9-44-113.6-102.4-125.4zM393.4 288H328v112c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V288h-65.4c-14.3 0-21.4-17.2-11.3-27.3l105.4-105.4c6.2-6.2 16.4-6.2 22.6 0l105.4 105.4c10.1 10.1 2.9 27.3-11.3 27.3z"></path></svg>'
    },
  ]
}

const App = () => {
  return (
    <BasePage content={obj} />
  )
}

export default App