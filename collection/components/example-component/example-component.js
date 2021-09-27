import { Component, h, Prop, State, } from '@stencil/core';
export class ExampleComponent {
  constructor() {
    this.contactUS = 'contactHidden';
  }
  menuToggleOn() {
    this.contactUS = 'contactUs';
  }
  menuToggleOff() {
    this.contactUS = 'contactHidden';
  }
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (h("div", null,
      h("div", { class: "headline" },
        h("h4", null, "CtA - Main Conversion")),
      h("div", { class: "container" },
        h("div", { class: "cta" },
          h("div", null,
            h("h4", null, "A Wonderful serenity has taken possession"),
            h("p", null, "A Wonderful serenity has taken possession of my entire soul like these sweet mockup."),
            h("button", { onClick: () => this.menuToggleOn() }, "Link button"))),
        h("div", { class: "image" },
          h("img", { src: "https://tinyurl.com/ezv7d6j6", alt: "Man standing at the top of the mountain" }))),
      h("div", { class: this.contactUS },
        h("p", null, "Contact us"),
        h("div", { class: "contacts" },
          h("p", null, "Virtual Identity AG"),
          h("p", null, "Isarwinkel 1"),
          h("p", null, "81379 M\u00FCnchen"),
          h("p", null, "t +49 89 179 270 00"),
          h("p", null, "f +49 761 88 79 57 98"),
          h("p", null, "info@virtual-identity.com")),
        h("button", { onClick: () => this.menuToggleOff() },
          h("img", { src: "https://tinyurl.com/7rmmhpxw", alt: "close button" })))));
  }
  static get is() { return "example-component"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["example-component.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["example-component.css"]
  }; }
  static get properties() { return {
    "headline": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "headline",
      "reflect": false
    }
  }; }
  static get states() { return {
    "contactUS": {}
  }; }
}
