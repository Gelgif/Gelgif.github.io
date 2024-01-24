var footerClassName = "footer-component"

class Footer extends HTMLElement {
    constructor() {
      super();
      this.className = footerClassName
    }

    connectedCallback() {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', '../components/footer.html', true);
      xhr.onreadystatechange= function() {
          if (this.readyState!==4) return;
          if (this.status!==200) return;
          document.getElementsByClassName(footerClassName)[0].innerHTML = this.responseText;
      };
      xhr.send();
    }
  }
  customElements.define(footerClassName, Footer);
