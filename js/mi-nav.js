import {
  ACTIVE_CLASS
} from "../lib/js/constantes.js"

export class MiNav
  extends HTMLElement {
  connectedCallback() {
    this.classList.add("navTab")
    this.innerHTML = /* html */
      `<a href="index.html">
     <span class="material-symbols-outlined">
      camera
     </span>
     camara
    </a> 
    <a href="geolocalizacion.html">
     <span class="material-symbols-outlined">
      hub
     </span>
     GPS
    </a>
    <a href="ayuda.html">
     <span class="material-symbols-outlined">
      help
     </span>
     Ayuda
    </a>
    `

    const href = location.href
    const index = this.querySelector(
      "[href='index.html']")
      const Geolocalizacion = this.querySelector(
      "[href='Geolocalizacion.html']")
    const ayuda = this.querySelector(
      "[href='ayuda.html']")
    if (ayuda != null &&
      href.endsWith("ayuda.html")) {
      ayuda.classList.
        add(ACTIVE_CLASS)
    } else if (index != null) {
      index.classList.
        add(ACTIVE_CLASS)
    }
  }
}
customElements.define(
  "mi-nav", MiNav)