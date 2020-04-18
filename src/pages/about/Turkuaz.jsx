import React from "react"
import { Link } from "react-router-dom"

import { BasePage } from "../../components"

export const obj = {
  title: "Turkuaz'ın Hikayesi",
  desc: "Bir framework olan Turkuaz'ın neyle ilgili olduğuna genel bir bakış",
  breadcrumb: [
    {
      text: "Ana Sayfa",
      link: "/"
    },
    {
      text: "Hakkında",
      link: "/about"
    },
    {
      text: "Turkuaz",
      link: "/turkuaz"
    }
  ]
}

const App = () => {
  return (
    <>
      <BasePage info={obj} />

      <section>
        <p>
          Turkuaz, Nisan 2016 tarihinde <a href="https://github.com/omergulcicek" target="_blank" rel="noopener noreferrer">@omergulcicek</a> tarafından GitHub'ta açık kaynak olarak geliştirmeye başlandı.
        </p>
        <p>
           Başlarda geliştirmeye yeni başlayan ve yabancı dil sıkıntısı olanların kolay kavrayabilmesi, geliştirmeye ilk adımı kolay atabilmesi için Türkçe sınıf isimleri kullanarak geliştirmenin doğru olacağını düşünmüştüm. Fakat her şeyin Türkçe karşılığını bulamamak, dilimize İngilizce'siyle yer edinmiş şeyleri Türkçe farklı bir isimle alıştırabilmek, hem de bazı sınıf isimlerinin Türkçe bazılarının İngilizce olmasının kötü duracağını düşünüp tamamen İngilizce'ye geçiş yaptım; fakat proje dokümanı tamamiyle Türkçe'dir.
        </p>

        <blockquote>
          "Projenin adı Türkçe ve manalı bir isim olmalıydı."
        </blockquote>
        
        <p>
          İlk olarak projeye bir isim arayışına başladım. Türkçe ve manalı bir isim olmasını istiyordum. Proje, ismini Türk rengi olarak da bilinen <strong>Turkuaz</strong>dan alıyor. Turkuaz kelimesi, Türkiye'nin Akdeniz sahillerinin renginden esinlenilerek, Fransızca Türk kelimesinin söylenişinden türemiştir. Adının içerisinde Türk kelimesini barındırması ve Türk rengini simgelemesi güzel detaylardı.
        </p>

        <blockquote>
          "Bir CSS kütüphanesi yazarsam, CSS'in tüm detaylarını öğrenirim."
        </blockquote>
        
        <p>
          Bir yazılımı öğrenmenin en iyi yolunun, bol bol pratik yapmak olduğunun farkına vardığımda <em>"bir CSS kütüphanesi yazarsam, CSS'in tüm detaylarını öğrenirim"</em> fikri oluştu. Geliştiriciler tarafından sıkça kullanılan kütüphanelerin kaynak kodlarını yüzlerce kez baştan inceleyip karşılaştırma yaptım. Sonrasında her detayı farklı kaynaklardan araştırarak <em>"hangisi doğru, daha iyi nasıl olabilir, neden bu şekilde yazılmış"</em> gibi soruları kendime sordum.
        </p>
        
        <blockquote>
          "CSS → jQuery → JavaScript → SASS → <span className="text-grey">React</span> → <span className="text-grey">Vue</span>"
        </blockquote>

        <p>
          İlk başlarda CSS'i detaylı öğrenebilmek adına basitçe küçük bileşenler geliştirdim. Ardından jQuery'i daha iyi kavramak amacıyla projeye yeni bileşenler ekledim. Sonrasında projeyi jQuery bağımlılığından kurtarıp Vanilla JavaScript ile güncelledim. Böylece JavaScript bilgimi geliştirdiğime inanıyorum.
        </p>
        <p>
          Son olarak ise günümüzde her şeyi küçük npm paketleriyle halledebiliyorken bir CSS kütüphanesinde JavaScript kodlarının olmaması gerektiğine kanaat getirip, sadece CSS ile geliştirmelerime devam ettim. Güncel olarak SASS kullanarak geliştirilmeye devam ediyor.
        </p>
        
        <blockquote>
          Peki React, Vue projelerinde kullanabilecek miyiz?
        </blockquote>

        <p>
          Aslında projeyi geliştirmemdeki en büyük amaç CSS'te paslanmamak ve sürekli farklı şeyleri araştırmaktı. Birçok şeyi geliştirdiğimde sitesini açıp bir doküman oluşturdum. Şimdilerde ise ilk sürümün hazır olduğunu düşündükten sonra farklı dallara atlayıp kütüphaneyi herkesin kullanabileceği hale getirmek istiyorum.
        </p>
        <p>
          İlk geliştirilmeye başlandığında sadece CSS iken, şu an SASS desteği bulunmakta. Bundan sonra ise React, Vue bileşenleri hazırlanacak. Detaylı bilgi ve destek olmak için <Link to="/docs/overview/support">destek ol</Link> sayfasını inceleyebilirsiniz.
        </p>
      </section>
    </>
  )
}

export default App