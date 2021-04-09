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
      <BasePage info={obj}>
        <section>
          <h3>Ben kimim?</h3>
          <p>
            Adım Ömer. Yazılım Mühendisliği mezunuyum. Kariyerime uzun süredir Frontend Developer olarak devam ediyorum. İlk göz ağrım olan Turkuaz ile birlikte bir çok açık kaynak projem GitHub profilimde bulunmakta. Hakkımda detaylı bilgi için <a href="https://omergulcicek.com/" target="_blank" rel="noopener noreferrer">kişisel sitemi</a> inceleyebilirsiniz.
          </p>
        </section>

        <section>
          <h3>Proje fikri nasıl oluştu?</h3>
          <p>
            Bir şeyi öğrenmenin en iyi yolunun, bol bol pratik yapmak olduğunun farkına vardığımda <em>"bir CSS kütüphanesi yazarsam, CSS'in tüm detaylarını öğrenirim"</em> fikri oluştu. Geliştiriciler tarafından sıkça kullanılan kütüphanelerin kaynak kodlarını yüzlerce kez baştan inceleyip karşılaştırma yaptım. Sonrasında her detayı farklı kaynaklardan araştırarak <em>"hangisi daha doğru, daha iyi nasıl olabilir, neden bu şekilde yazılmış"</em> gibi soruları kendime sordum. Bu sorular neticesinde yavaştan kendi kütüphanemi yazmaya başladım.
          </p>
          <p>
            Buradaki asıl amaç CSS'i detaylıca kavramanın yanı sıra, öğrendiğim her bilgiyi uyarlayabileceğim bir projenin var olacak olmasıydı.
          </p>
        </section>

        <section>
          <h3>İsmi neden Turkuaz?</h3>
          <p>
            Bir yandan projeyi geliştirebilmek için hummalı bir çalışma sürdürürken, diğer yandan projeye Türkçe ve manalı bir isim arayışındaydım. Açıkçası renklerle aram iyi değildir; hatta itiraf edeyim turkuaz diye bir renk olduğunu bile bilmiyordum. Sevdiğim bir sanatçının röportajında en sevdiğin renk sorusuna verdiği turkuaz yanıtından sonra bu rengi keşfettim.
          </p>
          <p>
            Turkuaz rengine iyice merak saldım ve kelime tarihini inceledim. İçerisinde Türk kelimesini barındırması ve renginin hoşluğundan ötürü proje isminin Turkuaz olmasını kararlaştırdım.
          </p>
          <blockquote>
            <p>
              "Turkuaz kelimesi, Türkiye'nin Akdeniz sahillerinin renginden esinlenilerek türetilmiştir. Fransızca Türk kelimesinin söylenişinden türemiştir."
            </p>
            <footer>Wikipedia</footer>
          </blockquote>
        </section>

        <section>
          <h3>Neden yalnızca CSS içeriyor?</h3>
          <p>
            Projeye ilk başladığımda önyüzde kullanılabilecek bütün bileşenleri geliştirmeyi amaçladım. Bunları CSS ve jQuery kullanarak geliştirmiştim <em>(~2016)</em>. Bunun yeterli seviyeye ulaştığına inandığımda kendime yeni hedefler oluşturarak hem projenin, hemde kişisel gelişimimi devam ettirmeyi amaçladım.
          </p>
          <p>
            jQuery'den kurtulup hiçbir kütüphane bağlılığı olmaması için, kodları Vanilla JavaScript ile baştan yazma kararı aldım <em>(~2017)</em>.
          </p>
          <p>
            Hızlı biçimde gelişen Frontend dünyası sayesinde, günümüzde her şey küçük npm paketleri ile kullanılabilir durumda geldi. Ardından bende "bir CSS projesi JavaScript'e bağlı kalmalı mı?" sorusu oluştu. Detaylıca araştırıp JavaScript içermeyen kütüphaneler olduğunu  gördüğümde bu fikrimi benimsedim ve JavaScript kodlarını projeden kaldırdım.
          </p>
          <p>
            JavaScript kodlarının kalkmasından sonra CSS'i SASS desteği ile beraber, ayrıca bileşenlerin tasarımlarıylada oynayarak en baştan geliştirdim <em>(~2019)</em>.
          </p>
        </section>

        <section>
          <h3>React / Vue projemde kullanabilecek miyim?</h3>
          <p>
            Elbette. Projene ister sadece CSS çıktısını projene dahil et, ister Turkuaz'ın React ve Vue projelerini dene. Detaylı bilgiye <Link to="/docs/library">farklı platformlar</Link> sayfasından ulaşabilirsin.
          </p>
          <p>
            Gelecekte ise gelişen Frontend dünyasına ayak uydurmak, Turkuaz'ı güncel tutmak ve kişisel gelişimimi aktif tutabilmek adına sürekli güncellenecektir. Dün jQuery, bugün React / Vue, yarın ise yine en sık tercih edilen kütüphanelere uyumlu olacaktır.
          </p>
        </section>

        <section>
          <h3>Turkuaz ile ilgili farklı projelerde olacak mı?</h3>
          <p>
            Turkuaz'ın kararlı ilk sürümünü çıkarttıktan hemen sonra, React ve Vue sürümlerini duyuracağım. Sonra bolca örnekler ve ücretsiz hazır şablon temalar oluşturup paylaşacağım.
          </p>
          <p>
            Bunlar dışında ise text editörler için bir snippet geliştirme fikrim var. 
          </p>
        </section>
      </BasePage>
    </>
  )
}

export default App