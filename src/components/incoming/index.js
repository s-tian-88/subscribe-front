import { getIncomingInnerHtml } from './incomingInnerHtml';
import './incoming.css';


export default class Incoming {
  constructor(container) {
    if (!(container instanceof HTMLElement)) {
      throw new Error(`${container} is not HTMLElement`);
    }

    this.container = container;
  }

  render () {
    this.renderIncomingElement();
  }

  renderIncomingElement () {

    const el = document.createElement('div');
    el.classList.add('incoming-container');
    el.innerHTML = getIncomingInnerHtml();

    this.container.appendChild(el);

  }
}
