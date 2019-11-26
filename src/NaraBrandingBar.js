import { html, css, LitElement } from 'lit-element';
import '@lrnwebcomponents/simple-modal/lib/simple-modal-template.js';

export class NaraBrandingBar extends LitElement {
  /**
   * LitElement render styles
   */
  static get styles() {
    return css`
      :host {
        --nara-branding-bar-text-color: #000;
        display: block;
        padding: 25px;
        color: var(--nara-branding-bar-text-color);
      }
      button {
        display: inline-block;
        text-decoration: none;
        font-family: 'Source Sans Pro', 'Helvetica Neue', 'Helvetica', 'Roboto', 'Arial', sans-serif;
        text-align: left;
        outline: none;
        font-size: 14px;
        border: solid 1px #f1f1f1;
        border-radius: 5px;
        height: auto !important;
        background-color: transparent !important;
        color: black;
        font-weight: normal;
        padding: 5px 5px !important;
        margin: 7px 0px !important;
        line-height: 1em !important;
        vertical-align: top;
      }
      nara-logo {
        --nara-logo-width: 230px;
        --nara-logo-height: 30px;
        display: inline-block;
      }
      nara-logo:not(:defined) {
        width: 230px;
        height: 30px;
        display: inline-block;
      }
    `;
  }

  /**
   * LitElement / popular convention
   */
  static get properties() {
    return {
      title: { type: String },
      exploreText: { type: String },
    };
  }

  /**
   * HTMLElement
   */
  constructor() {
    super();
    this.title = 'US National Archives';
    this.exploreText = 'Explore our Websites';
    // dynamic imports ensure things load faster
    import('nara-logo/nara-logo.js');
  }

  /**
   * LitElement properties and shadowRoot ready
   */
  firstUpdated() {
    this.shadowRoot
      .querySelector('[modal-id="smt1"]')
      .associateEvents(this.shadowRoot.querySelector('[controls="smt1"]'));
  }

  /**
   * LitElement render
   */
  render() {
    return html`
      <nara-logo format="horizontal"></nara-logo>
      <button class="collapsible-mxg" controls="smt1">${this.exploreText}</button>
      <simple-modal-template modal-id="smt1" title="${this.title}">
        <slot slot="content"></slot>
      </simple-modal-template>
    `;
  }
}
