class MyComponent extends HTMLElement {
	connectedCallback() {
	  this.innerHTML = `<div><nav>
                            <a href="tablas.html">Tablas HTML</a>
                            <span> | </span>
                            <a href="parrafos.html">Párrafos</a>
                            <span> | </span>
                            <a href="formularios.html">Formularios</a>
                            <span> | </span>
                            <a href="videos-audios.html">Videos y Audios</a>
                            <span> | </span>
                            <a href="iframe.html">Iframe</a>
                            <span> | </span>
                            <a href="svg.html">SVG</a>
                        </nav></div>`;
	}
  }
customElements.define('my-component-menu', MyComponent);