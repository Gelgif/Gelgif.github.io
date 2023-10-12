var className = "navbar-component"

class NavBar extends HTMLElement {
    constructor() {
        super();
        this.className = className
    }

    connectedCallback() {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', '../navigation_bar/navBar.html', true);
        xhr.onreadystatechange= function() {
            if (this.readyState!==4) return;
            if (this.status!==200) return;
            document.getElementsByClassName(className)[0].innerHTML = this.responseText;
        };
        xhr.send();
    }
}
customElements.define(className, NavBar);
