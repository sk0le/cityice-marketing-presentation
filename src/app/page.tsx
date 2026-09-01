/* eslint-disable @next/next/no-img-element */
import { Lightbox } from "../components/lightbox";

function Tick() {
  return (
    <div className="tick">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 6 9 17l-5-5" />
      </svg>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Lightbox />
      {/* ============ HERO ============ */}
      <header className="hero">
        <div className="abs-fill dots" />
        <div className="wrap hero-inner">
          <div className="wordmark">
            city<span className="i">i</span>ce
          </div>
          <p className="eyebrow on-dark mt">Studentski projekat · Uvod u marketing · august 2026.</p>
          <h1>
            Kutijica puna pažnje <span className="pop">i digitalnog nastupa</span>
          </h1>
          <p className="sub">
            Tri konkretne marketinške aktivnosti za CityIce, premium sladoled i
            frozen yogurt brend iz Sarajevo City Centra, isporučene prije
            novogodišnje sezone.
          </p>
          <p className="byline">Istražio, dizajnirao i izradio: <b>Amel Islamović</b></p>
          <p className="byline uni">Fakultet informacijskih tehnologija · Univerzitet „Džemal Bijedić“ u Mostaru · prof. Veldin Ovčina</p>
          <nav className="chips">
            <a className="chip" href="#stranica"><span className="n">1</span> Nova web stranica</a>
            <a className="chip" href="#vizuali"><span className="n">2</span> 6 novogodišnjih vizuala</a>
            <a className="chip" href="#google"><span className="n">3</span> Google Business Profil</a>
          </nav>
          <div className="hero-img">
            <img src="/img/kutijice.webp" alt="CityIce kutijice sa sladoledom" />
          </div>
        </div>
      </header>

      {/* ============ KLIJENT ============ */}
      <section id="klijent">
        <div className="wrap">
          <div className="sec-head">
            <p className="eyebrow">Klijent</p>
            <h2>CityIce: brend koji kupac sam kreira</h2>
            <p>
              Sve počinje od kutijice. Kupac bira bazu, preljeve i dodatke, a
              prepoznatljiva tamna ambalaža s magenta detaljima nosi cijeli
              vizuelni identitet.
            </p>
          </div>
          <div className="klijent-grid">
            <div className="fact-list">
              <div className="fact"><b>Proizvod</b>Sladoled i frozen yogurt po principu &quot;sastavi sam&quot;, uz hladno cijeđene sokove, bubble tea i voćne salate.</div>
              <div className="fact"><b>Diferencijacija</b>Pionir &quot;bez&quot; ponude na bh. tržištu: bez glutena, bez alergena, bez GMO-a, bez mliječnih proizvoda i bez dodatih šećera.</div>
              <div className="fact"><b>Lokacija i kanali</b>Sarajevo City Center, treći sprat · @cityice.ba na Instagramu, Facebooku i TikToku.</div>
              <div className="fact"><b>Filozofija</b>&quot;Ne postoje univerzalni ukusi&quot;, kupac učestvuje u kreiranju svog proizvoda.</div>
            </div>
            <div className="brand-card">
              <p className="eyebrow on-dark">Brend kit, izvučen iz ambalaže</p>
              <div className="swatches">
                <div className="swatch sw-purple">#6300D5<small>logo ljubičasta</small></div>
                <div className="swatch sw-navy">#171040<small>navy kutijice</small></div>
                <div className="swatch sw-magenta">#EE2C82<small>magenta swirl</small></div>
              </div>
              <p className="note">
                Wordmark: lowercase &quot;cityice&quot;, zaobljeni bold. Fontovi projekta:
                Baloo 2 + Nunito Sans. Tačkasta tekstura i swirl traka preuzeti
                su direktno s ambalaže.
              </p>
            </div>
          </div>

          <div className="obim">
            <div className="clock">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round">
                <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" />
              </svg>
            </div>
            <div>
              <h3>Zašto baš tri aktivnosti?</h3>
              <p>
                Cijeli projekat je morao biti završen do kraja augusta,
                prije septembarskog roka, i sve radi jedna osoba. Zato je obim
                svjesno sužen na tri stvari s najvećim efektom: bolje tri
                završene do kraja, nego deset započetih. Plaćene kampanje,
                vođenje mreža i e-mail marketing ostavljeni su za buduću
                saradnju.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ AKTIVNOST 1 ============ */}
      <section id="stranica" className="pt-tight">
        <div className="wrap">
          <div className="sec-head">
            <div className="akt-label"><div className="num">1</div><span>Aktivnost 1</span></div>
            <h2>Nova web stranica</h2>
            <p>
              Potpuno nova one-page stranica umjesto zastarjele koja se duže
              ne održava. Brza, prilagođena mobitelu i konačno u bojama
              kutijice.
            </p>
          </div>
          <div className="site-show">
            <div className="browser">
              <div className="browser-bar"><i /><i /><i /><span className="url">novi sajt · uskoro na cityice.ba</span></div>
              <img src="/img/hero-desktop.webp" alt="Hero sekcija nove CityIce stranice" />
            </div>
            <div className="phone">
              <img src="/img/hero-mobile.webp" alt="Mobilna verzija nove stranice" />
            </div>
          </div>
          <p className="domain-note">
            <b>Napomena:</b> stranica je završena i spremna za objavu, ali još
            nije prebačena na cityice.ba jer vlasnik trenutno nije u
            mogućnosti izvršiti prebacivanje domene. Do tada radi na
            privremenom linku, a zamjena je stvar jednog klika kad se steknu
            uslovi.
          </p>
          <div className="shots2">
            <figure>
              <img src="/img/ponuda.webp" alt="Sekcija ponude s ilustracijama" />
              <figcaption>Ponuda s ilustracijama u stilu brenda i koracima &quot;sastavi kutijicu&quot;</figcaption>
            </figure>
            <figure>
              <img src="/img/promo.webp" alt="Novogodišnja promo sekcija s odbrojavanjem" />
              <figcaption>Novogodišnja sekcija s odbrojavanjem, pali se i gasi jednim prekidačem</figcaption>
            </figure>
          </div>
          <div className="feat-row">
            <div className="feat"><b>Sav sadržaj koji kupac traži</b><span>ponuda, kako radi kutijica, radno vrijeme, mapa i česta pitanja</span></div>
            <div className="feat"><b>Brend prije svega</b><span>boje, tekstura i fotografija ambalaže umjesto stock slika</span></div>
            <div className="feat"><b>SEO osnove</b><span>meta tagovi, Open Graph, JSON-LD za lokalni biznis, bs jezik</span></div>
            <div className="feat"><b>Lako održavanje</b><span>svi podaci na jednom mjestu, promo sekcija na prekidač</span></div>
          </div>
        </div>
      </section>

      {/* ============ AKTIVNOST 2 ============ */}
      <section id="vizuali" className="viz">
        <div className="abs-fill dots" />
        <div className="wrap" style={{ position: "relative" }}>
          <div className="sec-head">
            <div className="akt-label m on-dark"><div className="num">2</div><span>Aktivnost 2</span></div>
            <h2>Šest novogodišnjih vizuala</h2>
            <p>
              Kampanja popusta u bojama kutijice: tri posta, dva story formata
              i univerzalni template u koji osoblje samo upiše novi popust,
              ukus ili datum.
            </p>
          </div>
          <div className="viz-grid">
            <img src="/img/t-main.webp" alt="Post: najava kampanje" />
            <img src="/img/t-popust.webp" alt="Post: popust 20 posto" />
            <img src="/img/t-dva.webp" alt="Post: dva za jedan" />
            <img src="/img/t-uni.webp" alt="Univerzalni template" />
          </div>
          <div className="viz-stories">
            <img src="/img/t-story1.webp" alt="Story: countdown do Nove godine" />
            <img src="/img/t-story2.webp" alt="Story: ponuda dana" />
            <div className="viz-note">
              <h3>Napravljeno da se koristi svaki dan</h3>
              <p>
                Countdown story mijenja broj dana do Nove godine, &quot;ponuda
                dana&quot; mijenja ukus i procenat. Svi vizuali dijele isti sistem:
                tačkasta tekstura, swirl traka, wordmark i footer s lokacijom,
                pa feed izgleda uredno i prepoznatljivo cijelu sezonu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ AKTIVNOST 3 ============ */}
      <section id="google">
        <div className="wrap">
          <div className="sec-head">
            <div className="akt-label n"><div className="num">3</div><span>Aktivnost 3</span></div>
            <h2>Google Business Profil</h2>
            <p>
              Kada neko u SCC-u ukuca &quot;sladoled&quot;, Google prvo pokaže mapu i
              profile. Vodič od 8 koraka sređuje profil od nule do
              optimizovanog, s gotovim tekstovima za copy/paste.
            </p>
          </div>
          <div className="gbp-grid">
            <div className="check-list">
              <div className="check"><Tick /><div><b>Preuzimanje i verifikacija profila</b><span>business.google.com, firmin račun</span></div></div>
              <div className="check"><Tick /><div><b>Kompletiranje svih polja</b><span>kategorije, radno vrijeme s prazničnim izuzecima, telefon, link na novu stranicu</span></div></div>
              <div className="check"><Tick /><div><b>Gotov opis od 750 znakova</b><span>napisan u vodiču, spreman za copy/paste</span></div></div>
              <div className="check"><Tick /><div><b>20+ fotografija</b><span>kutijice, vitrina, lokal, tim</span></div></div>
              <div className="check"><Tick /><div><b>Recenzije pod kontrolom</b><span>QR kod na pultu + šabloni odgovora na pozitivne i negativne, u roku 24 do 48 sati</span></div></div>
            </div>
            <div className="plan-card">
              <h3>Plan Google objava za kampanju</h3>
              <div className="plan-row"><b>15. 12.</b><span>najava kampanje (&quot;Čarolija stiže u kutijici&quot;)</span></div>
              <div className="plan-row"><b>20. 12.</b><span>ponuda -20% na sve kutijice, Offer objava</span></div>
              <div className="plan-row"><b>27. 12.</b><span>ponuda sedmice, univerzalni template</span></div>
              <div className="plan-row"><b>30. 12.</b><span>&quot;2 za 1&quot; za doček</span></div>
              <div className="plan-row"><b>2. 1.</b><span>nastavak praznične ponude do 15. 1.</span></div>
              <p className="plan-note">
                Isti vizuali iz aktivnosti 2, bez dodatnog dizajniranja. Uspjeh
                se mjeri karticom &quot;Izvedba&quot;: pregledi profila, klikovi i upute,
                decembar naspram novembra.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ MATERIJALI ============ */}
      <section id="materijali" className="pt-tighter">
        <div className="wrap">
          <div className="sec-head">
            <p className="eyebrow">Uz tri aktivnosti</p>
            <h2>Svi materijali projekta</h2>
            <p>Prijedlog, završna prezentacija i promo video, u cijelosti, na jednom mjestu.</p>
          </div>

          <div className="doc-block">
            <div className="doc-head">
              <h3>Promo video</h3>
              <span className="meta">0:37 · 1920×1080</span>
            </div>
            <video className="video-el" controls playsInline preload="metadata" poster="/img/video-s2.webp">
              <source src="/docs/CityIce-promo.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="doc-block">
            <div className="doc-head">
              <h3>Završna prezentacija</h3>
              <span className="meta">11 slajdova</span>
              <span className="spacer" />
              <a className="dl-btn" href="/docs/CityIce-prezentacija.pptx" download>Preuzmi .pptx</a>
              <a className="dl-btn alt" href="/docs/CityIce-prezentacija.pdf" download>PDF</a>
            </div>
            <div className="strip">
              {Array.from({ length: 11 }, (_, i) => (
                <img
                  key={i}
                  src={`/img/slides/slide-${String(i + 1).padStart(2, "0")}.webp`}
                  alt={`Slajd ${i + 1} završne prezentacije`}
                  loading="lazy"
                />
              ))}
            </div>
            <p className="strip-hint">Povuci lijevo-desno za sve slajdove →</p>
          </div>

          <div className="doc-block">
            <div className="doc-head">
              <h3>Prijedlog marketinških aktivnosti</h3>
              <span className="meta">4 stranice · dokument poslan vlasniku 07. 08. 2026.</span>
              <span className="spacer" />
              <a className="dl-btn" href="/docs/CityIce-Prijedlog-marketinskih-aktivnosti.docx" download>Preuzmi .docx</a>
              <a className="dl-btn alt" href="/docs/CityIce-Prijedlog-marketinskih-aktivnosti.pdf" download>PDF</a>
            </div>
            <div className="strip tall">
              {Array.from({ length: 4 }, (_, i) => (
                <img
                  key={i}
                  src={`/img/prijedlog/str-${String(i + 1).padStart(2, "0")}.webp`}
                  alt={`Stranica ${i + 1} prijedloga`}
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ FINALE ============ */}
      <footer className="finale">
        <div className="abs-fill dots" />
        <div className="wrap finale-inner">
          <p className="eyebrow on-dark">Zaključak</p>
          <h2>
            Cijeli put kupca, pokriven: <span className="pop">pronađe, provjeri, kupi.</span>
          </h2>
          <div className="path">
            <div className="step"><b>Pronađe</b><span>Google Business Profil dovodi kupca iz pretrage i s mapa</span></div>
            <div className="arrow">→</div>
            <div className="step"><b>Provjeri</b><span>nova stranica pokazuje ponudu, lokaciju i radno vrijeme</span></div>
            <div className="arrow">→</div>
            <div className="step"><b>Kupi</b><span>novogodišnja kampanja ga uvjeri da praznike zasladi kutijicom</span></div>
          </div>
          <div className="credit">
            <span className="wordmark">city<span className="i">i</span>ce</span>
            Predmet „Uvod u marketing“, prof. Veldin Ovčina · FIT, Univerzitet „Džemal Bijedić“ u Mostaru<br />pripremio Amel Islamović · august 2026.
          </div>
        </div>
      </footer>
    </>
  );
}
