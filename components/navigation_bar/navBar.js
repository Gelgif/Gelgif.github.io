var navClassName = "navbar-component"

class NavBar extends HTMLElement {
    constructor() {
        super();
        this.className = navClassName
    }

    connectedCallback() {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', '../components/navigation_bar/navBar.html', true);
        xhr.onreadystatechange= function() {
            if (this.readyState!==4) return;
            if (this.status!==200) return;
            document.getElementsByClassName(navClassName)[0].innerHTML = this.responseText;
        };
        xhr.send();
    }
}
customElements.define(navClassName, NavBar);
