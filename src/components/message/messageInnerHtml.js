export function getMessageInnerHtml (from, subject, received) {

  const html = `
  <div class="message-from">${from.slice(0, 25)}</div>
  <div class="message-subject">${subject.slice(0, 15)}...</div>
  <div class="message-received">${received}</div>
  `
  return html;
}
