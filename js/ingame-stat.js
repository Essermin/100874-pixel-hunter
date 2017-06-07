export default (array) => {
   const template = `
    <ul class="stats">
      ${[...array].map((result) => {
        return `<li class="stats__result stats__result--${result}"></li>`;
      }).join(``)}
    </ul>
  `;
  
  return template;
};
