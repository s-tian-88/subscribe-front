import { getMessageInnerHtml } from './messageInnerHtml';
import { timestampFormatter } from '../../js/tools';
import './message.css';


export default class Message {
  constructor(container) {
    if(!(container instanceof HTMLElement)) {
      throw new Error(`${container} is nopt HTMLElement`);
    }

    this.container = container;

  }

  render (obj) {
    this.renderMassageeElement(obj);
  }

  renderMassageeElement (obj) {
    const el = document.createElement('div');
    el.classList.add('message-container');
    el.innerHTML = getMessageInnerHtml(obj.from, obj.subject, timestampFormatter(obj.received), obj.content);

    this.container.insertBefore(el, this.container.firstChild);
  }


}
