const containerDomElement = document.querySelector(`main.central`);

export default function renderScreen(template) {
  containerDomElement.innerHTML = ``;
  containerDomElement.appendChild(template);
}
