// src/App.js
import logo_Veolia from './logo_Veolia.svg';  // Import custom logo Veolia
import './App.css';     // Reference to custom styles
import logoMobile from './assets/logo-veolia.png';  // Import mobile logo
import logoSticky from './assets/logo-sticky.png';  // Import sticky logo

function App() {
  return (    
    <div className="App"> 
      <header className="App-header">
         {/* Add the new header branding section */}
         <div className="header__top">
          <div className="header__branding">
            <div className="region-branding">
              <div className="region-branding__inner">
                <div id="block-sitebranding" className="branding">
                  <div className="branding__logo-wrap">
                    <svg className="left-part">
                      <use xlinkHref="/themes/custom/veo_site/build/assets/sprite-svg/sprite.svg?v=sknxk1#left-veolia"></use>
                    </svg>
                    <div className="branding__logo">
                      <a href="/en" title="Veolia" rel="home">
                        <picture className="branding__logo-img branding__logo-img--mobile">
                          <img src={logoMobile} 
                               srcSet={`${logoMobile} 1x, ${logoMobile} 2x`} 
                               alt="Veolia" />
                        </picture>
                        <picture className="branding__logo-img branding__logo-img--sticky">
                          <img src={logoSticky} 
                               alt="Veolia" />
                        </picture>
                      </a>
                    </div>
                    <svg className="right-part">
                      <use xlinkHref="/themes/custom/veo_site/build/assets/sprite-svg/sprite.svg?v=sknxk1#right-veolia"></use>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      <h3>Veolia App's water, waste and energy management sensors!</h3>
        <img src={logo_Veolia} className="App-logo" alt="logo_Veolia" />
        <p>
        Remote sensor monitoring is optimized with AI to save time <code><br />  on sustainable solutions in water, 
        waste and energy management </code><br />  with analytically intelligent responses to achieve your goals.
        </p>
        
        <a
          className="App-link"
          href="https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fconsole.cloud.google.com%2Fcustomer-identity%2Fproviders&followup=https%3A%2F%2Fconsole.cloud.google.com%2Fcustomer-identity%2Fproviders&ifkv=ARpgrqezJbXpDdxGZAsQP5JY-Jd1qgE6hKUMdfYO0PbVCwVB_YYobBlHKtCbiswrkwjGd_UABXCm-Q&osid=1&passive=1209600&service=cloudconsole&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S-953998298%3A1727670295807776&ddm=0https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fmyaccount.google.com%3Futm_source%3Daccount-marketing-page%26utm_medium%3Dgo-to-account-button&ifkv=ARpgrqd5FVPcmKoBqHLpQNM5AJkTDr_XBPpEphEdjJL1zwoG7fG-Q5-QlHoDoqBglZBBAFLfigl4Eg&service=accountsettings&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S-1475791772%3A1727668147845297&ddm=0"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sign in to Veolia App Cloud Platform.
        </a>
      </header>

      {/* Footer Section */}
      <footer className="App-footer">
        <p>&copy; 2024 Veolia - All Rights Reserved.</p>
        <p>Contact us: <a href="mailto:support@veolia.com">support@veolia.com</a></p>
        <p>Contact us: 
          <a href="https://www.veolia.com/en/contact-us" target="_self"> {/* The target="_self" attribute ensures the link opens in the same tab.*/}
            Contact 
          </a>
        </p>
        <p className="App-built-by">Made this App by Javier Coronado.</p>
      </footer>
    </div>
  );
}

export default App;