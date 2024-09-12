export const waysToWatch = [
  {
    id:"01",
    title: 'Odtwarzacze multimdialne',
    image: '../wayTowatch-icons/media-player.webp',
    imageActive:'../wayTowatch-icons/media-player-active.webp',
    descriptionTitle: 'PLUG AND PLAY',
    offerDescription: 'Dzięki najnowszym odtwarzaczom i przystawkom multimedialnym możesz szybko, prosto i tanio korzystać z serwisu Netflix na telewizorze.',
    partnersLogo: true,
    offerLogos: {
      logo1: 'wayTowatch-icons/appletv_rev.webp',
      logo2: 'wayTowatch-icons/g-chromecast.webp',
      logo3: 'wayTowatch-icons/portal-from-facebook.webp',
    },
    extraOffer: false,
    showOffer(){
      let html = `
      <div class="way-to-watch-answers-main-container ">
        <div class="offer--visible">
          <div class="offer-advertisement">
            <div class="offer--title"> ${this.descriptionTitle}</div>
            <div class="offer--description">${this.offerDescription}
            </div>
          </div>
          <div class="partners--logos">
            <div class="logo"> <img src="${this.offerLogos.logo1}" class="logo--img" /> </div>
            <div class="logo"> <img src="${this.offerLogos.logo2}" class="logo--img" />  </div>
            <div class="logo"> <img src="${this.offerLogos.logo3}" class="logo--img" />  </div>
            <div class="logo empty"></div>
          </div> 
        </div>
       </div>
      `
      document.querySelector('.js-second--background').innerHTML = html;
    }
  },
  {
    id:"02",
    title: 'Konsole do gier',
    image: '../wayTowatch-icons/hdtv.webp',
    imageActive:'../wayTowatch-icons/hdtv-active.webp',
    descriptionTitle: 'WBUDOWANE POŁĄCZENIE',
    offerDescription: 'Telewizory Smart TV mają zainstalowaną aplikację Netflix — wystarczy je włączyć i zacząć oglądać. Nie trzeba żadnego dodatkowego sprzętu. ',
    partnersLogo: true,
    offerLogos: {
      logo1: 'wayTowatch-icons/hisenselogo.webp',
      logo2: 'wayTowatch-icons/lg-logo-3d-tagline-white.webp',
      logo3: 'wayTowatch-icons/panasonic_logo_bl_posi_png.webp',
      logo4: 'wayTowatch-icons/philips_transparent_logo.webp',
      logo5: 'wayTowatch-icons/samsung_lettermark_white_rgb.webp',
      logo6: 'wayTowatch-icons/sharp-light.webp',
      logo7: 'wayTowatch-icons/sony-light.webp',
      logo8: 'wayTowatch-icons/toshiba.webp',
      logo9: 'wayTowatch-icons/sony-light.webp',
      logo10: 'wayTowatch-icons/1024px-xiaomi-logo-svg.webp',
    },
    extraOffer: true,
    extraOfferImg: 'wayTowatch-icons/nrtv.webp',
    extraOfferTitle: 'WIĘCEJ INFORMACJI',
    extraOfferDescription: 'Chcesz mieć telewizor Smart TV stworzony z myślą o serwisie Netflix? Szukaj telewizorów z logo „Telewizor polecany przez Netflix',
    showOffer(){
      let html = `
      <div class="way-to-watch-answers-main-container">
        <div class="offer--visible">
          <div class="offer-advertisement-10">
            <div class="">
            <div class="offer--title">	
              ${this.descriptionTitle}</div>
              <div class="offer--description"> ${this.extraOfferDescription}  </div>
            </div>
            <div class="extra--offer">
              <div class="netflix--recommended">
                <img src="../img1/wayTowatch-icons/nrtv.webp" class="recommended--img" />
            </div>
            <div class="netflix--recommended--desription">
              <div class="netflix--description">Chcesz mieć telewizor Smart TV stworzony z myślą o serwisie Netflix? Szukaj telewizorów z logo „Telewizor polecany przez Netflix”.</div>
              <button class="more--info">WIĘCEJ INFORMACJI</button>
            </div>
            </div>
            </div>
            <div class="offers--logo">
              <div class="logos-10">
                <div class="logo10"> <img src="${this.offerLogos.logo1}" class="logo6--img"  /> </div>
                <div class="logo10"> <img src="${this.offerLogos.logo2}" class="logo6--img" /> </div>
                <div class="logo10"> <img src="${this.offerLogos.logo3}" class="logo6--img" /> </div>
                <div class="logo10"> <img src="${this.offerLogos.logo4}" class="logo6--img"  /> </div>
                <div class="logo10"> <img src="${this.offerLogos.logo5}" class="logo6--img" /> </div>
                <div class="logo10"> <img src="${this.offerLogos.logo6}" class="logo6--img"  /> </div>
                <div class="logo10"> <img src="${this.offerLogos.logo7}" class="logo6--img" /> </div>
                <div class="logo10"> <img src="${this.offerLogos.logo8}" class="logo6--img" /> </div>
                <div class="logo10"> <img src="${this.offerLogos.logo9}" class="logo6--img"  /> </div>
                <div class="logo10"> <img src="${this.offerLogos.logo10}" class="logo6--img"  /> </div>
            </div>
          </div>
        </div>
      </div>    
      `
      document.querySelector('.js-second--background').innerHTML = html;
    }
  },
  {
    id:"03",
    title: 'Odtwarzacze multimdialne',
    image: '../wayTowatch-icons/game-console.webp',
    imageActive:'../wayTowatch-icons/game-console-active.webp',
    descriptionTitle: 'DOBRE DO GIER DOBRE DO FILMÓW',
    offerDescription: 'Materiały z serwisu Netflix możesz oglądać również na konsolach do gier.',
    partnersLogo: true,
    offerLogos: {
      logo1: 'wayTowatch-icons/ps3.webp',
      logo2: 'wayTowatch-icons/ps4.webp',
      logo3: 'wayTowatch-icons/ps5-logo.webp',
      logo4: 'wayTowatch-icons/xbox360_2013_stacked_wht_rgb.webp',
      logo5: 'wayTowatch-icons/xboxone_stacked_wht_rgb.webp',
      logo6: 'wayTowatch-icons/xboxseriesxs-2020-stack-wht-rgb-1-copy-xboxallaccess-2020-stacked-dkgray-rgb.png'
    },
    extraOffer: false,
    showOffer(){
      let html = `
    <div class="way-to-watch-answers-main-container">
        <div class="offer--visible">
         <div class="offer-advertisement">
          <div class="offer--title">	
            ${this.descriptionTitle}</div>
          <div class="offer--description"> ${this.offerDescription}</div>
         </div>
         <div class="offers--logo">
          <div class="logos-6">
            <div class="logo6"> <img src="${this.offerLogos.logo1}" class="logo6--img"  /> </div>
            <div class="logo6"> <img src="${this.offerLogos.logo2}" class="logo6--img"  /> </div>
            <div class="logo6"> <img src="${this.offerLogos.logo3}" class="logo6--img"  /> </div>
            <div class="logo6"> <img src="${this.offerLogos.logo4}" class="logo6--img"  /> </div>
            <div class="logo6"> <img src="${this.offerLogos.logo5}" class="logo6--img"  /> </div>
            <div class="logo6"> <img src="${this.offerLogos.logo6}" class="logo6--img"  /> </div>
          </div>
        </div>
       </div>
    </div>
      `
      document.querySelector('.js-second--background').innerHTML = html; 
    }
  },
  {
    id:"04",
    title: 'Dekodery',
    image: '../wayTowatch-icons/mvpd.webp',
    imageActive:'../wayTowatch-icons/mvpd-active.webp',
    descriptionTitle: 'ŁATWE JAK ZMIANA KANAŁU ',
    offerDescription: 'Teraz możesz przełączać między kanałami telewizyjnymi a serwisem Netflix, korzystając z jednego dekodera. Serwis Netflix jest dostępny w ofercie coraz większej liczby dostawców płatnej telewizji. Zapytaj swojego dostawcę, jeśli nie ma go na liście.',
    partnersLogo: false,
    extraOffer: false,
    showOffer(){
      let html = `
    <div class="way-to-watch-answers-main-container">
      <div class="offer--visible">
        <div class="offer-advertisement">
          <div class="offer--title">	${this.descriptionTitle} </div>
           <div class="offer--description"> ${this.offerDescription} </div>
        </div>
        <div class="offers--logo">
          <div class="partners--logos">
          </div>
        </div>      
      </div>
    </div>
      `
      document.querySelector('.js-second--background').innerHTML = html; 
    }
  
  },
  {
    id:"05",
    title: 'Odtwarzacze blu-ray',
    image: 'wayTowatch-icons/blu-ray-player.webp',
    imageActive:'wayTowatch-icons/blu-ray-player-active.webp',
    descriptionTitle: 'WYJĄTKOWY OBRAZ I DŹWIĘK',
    offerDescription: 'Możesz korzystać z serwisu Netflix na odtwarzaczu Blu-ray albo zestawie kina domowego.',
    partnersLogo: true,
    offerLogos: {
      logo1: 'wayTowatch-icons/lg-light.webp',
      logo2: 'wayTowatch-icons/panasonic_logo_bl_posi_png.webp',
      logo3: 'wayTowatch-icons/samsung_lettermark_white_rgb.webp',
      logo4: 'wayTowatch-icons/sony-light.webp',
    },
    extraOffer: false,
    showOffer(){
      let html = `
    <div class="way-to-watch-answers-main-container">
      <div class="offer--visible">
        <div class="offer-advertisement">
          <div class="offer--title">${this.descriptionTitle}	</div>
          <div class="offer--description"> ${this.offerDescription}</div>
        </div>
        <div class="offers--logo">
          <div class="partners--logos">
            <div class="logo"> <img src="${this.offerLogos.logo1}" class="logo--img" /> </div>
            <div class="logo"> <img src="${this.offerLogos.logo2}" class="logo--img" />  </div>
            <div class="logo"> <img src="${this.offerLogos.logo3}" class="logo--img" />  </div>
            <div class="logo"> <img src="${this.offerLogos.logo4}" class="logo--img"/>  </div>
          </div>
        </div>    
      </div>
    </div>
      `
      document.querySelector('.js-second--background').innerHTML = html;
    }
  },
  {
    id:"06",
    title: 'Smartfony i tablety',
    image: 'wayTowatch-icons/phones-and-tablet.webp',
    imageActive:'wayTowatch-icons/phones-and-tablet-active.webp',
    descriptionTitle: 'ZABIERZ NETFLIX ZE SOBĄ',
    offerDescription: 'Oglądaj, gdziekolwiek jesteś. Jeśli aplikacja Netflix nie jest jeszcze zainstalowana w Twoim telefonie lub tablecie, możesz bezpłatnie pobrać ją ze sklepu Apple App Store, Google Play lub Windows Phone Store.',
    partnersLogo: true,
    offerLogos: {
      logo1: 'wayTowatch-icons/android.webp" class="logo--img',
      logo2: 'wayTowatch-icons/apple_logo_360.webp',
      logo3: 'wayTowatch-icons/windows-phone.webp',
    },
    extraOffer: false,
    showOffer(){
      let html = `
    <div class="way-to-watch-answers-main-container">
       <div class="offer--visible">
        <div class="offer-advertisement">
          <div class="offer--title">${this.descriptionTitle}</div>
          <div class="offer--description"> ${this.offerDescription}</div>
        </div>
        <div class="offers--logo">
          <div class="partners--logos">
            <div class="logo"> <img src="${this.offerLogos.logo1}" class="logo--img"/> </div>
            <div class="logo"> <img src="${this.offerLogos.logo2}" class="logo--img" />  </div>
            <div class="logo"> <img src="${this.offerLogos.logo3}" class="logo--img" />  </div>
            <div class="empty"></div>
          </div>
        </div>  
       </div>
      </div>
      `
      document.querySelector('.js-second--background').innerHTML = html;

    }
  },
  {
    id:"07",
    title: 'Komputery i laptopy',
    image: 'wayTowatch-icons/laptop.webp',
    imageActive:'wayTowatch-icons/laptop-active.webp',
    descriptionTitle: 'OGLĄDAJ NA DOWOLNYM URZĄDZENIU',
    offerDescription: 'Serwis Netflix jest zoptymalizowany pod kątem najpopularniejszych przeglądarek, co ułatwia oglądanie na komputerze lub laptopie.',
    partnersLogo: false,
    extraOffer: false,
    showOffer(){
      let html = `
    <div class="way-to-watch-answers-main-container">
       <div class="offer--visible">
        <div class="offer-advertisement">
          <div class="offer--title">	${this.descriptionTitle}</div>
          <div class="offer--description"> ${this.offerDescription} </div>
        </div>
        <div class="offers--logo">
          <div class="partners--logos">
          </div>
        </div>  
     </div> 
    </div>
      `
    document.querySelector('.js-second--background').innerHTML = html;
    }
  },
]

export function findMatchingOffer(offerId){
  let matchingOffer;

  waysToWatch.forEach((offer)=>{
    if(offer.id === offerId){
      matchingOffer = offer;
    }
  });
  console.log(matchingOffer);
  return  matchingOffer;
};

