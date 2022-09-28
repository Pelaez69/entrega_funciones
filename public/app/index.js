import '/componets/index.js';
class Appcontainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = 'Oe';
        }
    }
}
customElements.define('app-container', Appcontainer);
