export default function createTemplate(html) {
  const template = document.createElement(`template`);
  template.innerHTML = html;
  return template.content;
}
