class Footer extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      this.innerHTML = `
      <style>
        :root {
            --white: #FFFFFF;
            --darkred: #D3342C;
        }

        footer {
            background-color: var(--darkred);
            padding-top: 0.02vh;
            padding-bottom: 0.02vh;
        }

        .footer-address {
            text-align: center;
            color: var(--white);
        }

        .logos {
            text-align: center;
            fill: var(--white);
        }

        .left-footer, .center-footer, .right-footer {
            display: inline-block;
            zoom: 1;
            vertical-align: top;
            font-size: 2vw;
        }

        .left-footer {
            padding-top: 0.5vh;
            padding-left: 2vw;
            width: 20vw;
        }

        .center-footer {
            width: 50vw;
        }

        .footer-logo {
            width: 2vw;
            height: 2vw;
        }

        .footer-logo-link {
            text-decoration: none;
        }
      </style>
      <footer>
      <div class="footer">
          <div class="left-footer">
              <img src="../logos/sm_logo_regie.svg" alt="REGIE logo" width="44px" height="44px">
          </div>
          <div class="center-footer">
              <div class="footer-address">1234 rue avenuetielle</div>
              <div class="logos">
                  <a class="footer-logo-link" href="../pages/regisseurs.html">
                      <img class="footer-logo" src="../logos/footer/instagram_logo.svg" alt="instagram logo" width="20px" height="20px">
                  </a>
                  <a class="footer-logo-link" href="#">
                      <img class="footer-logo" src="../logos/footer/facebook_logo.svg" alt="facebook logo" width="20px" height="20px">
                  </a>
                  <a class="footer-logo-link" href="#">
                      <img class="footer-logo" src="../logos/footer/mail_logo.svg" alt="mail logo" width="20px" height="20px">
                  </a>
              </div>
          </div>
          <div class="right-footer"></div>
      </div>
  </footer>
      `;
    }
  }

  customElements.define('footer-component', Footer);
