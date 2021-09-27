/* istanbul ignore file */
import { newSpecPage } from '@stencil/core/testing';
export const createSpecComponent = async (componentTag, component, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
props = {}) => {
  const components = Array.isArray(component) ? component : [component];
  const page = await newSpecPage({
    components,
    html: `<${componentTag}${Object.keys(props).map((prop) => ` ${prop}="${props[prop]}"`).join('')}></${componentTag}>`,
  });
  return page.root;
};
export const getChild = (component) => (component.shadowRoot
  // eslint-disable-next-line compat/compat
  ? Array.from(component.shadowRoot.childNodes)[0]
  // eslint-disable-next-line compat/compat
  : Array.from(component.childNodes)[0]);
export const getAttributes = (component) => {
  const html = component.outerHTML.trim();
  const firstSpace = html.indexOf(' ');
  const lastChar = html.lastIndexOf('><');
  if (firstSpace < 0 || firstSpace > lastChar) {
    return {};
  }
  return html.substr(firstSpace, lastChar - firstSpace)
    .split('=')
    .map((item) => {
    const quote = Math.max(item.lastIndexOf('"'), item.lastIndexOf('\''));
    const split = item.substr(Math.max(0, quote)).split(' ');
    return split.length > 1 ? split.pop() : undefined;
  })
    .filter((attribute) => !!attribute)
    .reduce((accumulator, key) => (Object.assign(Object.assign({}, accumulator), { [key]: component.getAttribute(key) })), {});
};
