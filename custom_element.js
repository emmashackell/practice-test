class year extends HTMLElement {
    connectedCallback() {
        this.innerHTML = new Date().getFullYear();
    }
}

customElements.define("x-year", year);
