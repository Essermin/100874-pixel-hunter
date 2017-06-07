import createTemplate from './create-template';
import renderScreen from './render-template';
import createStatsTemplate from './module-stats';
import showIntroPage from './show-intro-page';
import footerTemplate from './module-footer';
import headerTemplate from './module-header';
import gameStatsTemplate from './ingame-stat';

import {initialState, game3Params} from './data';

const formTemplate = (images) => {
  const template = `
  <form class="game__content  game__content&#45;&#45;triple">
    <div class="game__option">
      <img src="${images[0]}" alt="Option 1" width="304" height="455">
    </div>
    <div class="game__option  game__option&#45;&#45;selected">
      <img src="${images[1]}" alt="Option 1" width="304" height="455">
    </div>
    <div class="game__option">
      <img src="${images[2]}" alt="Option 1" width="304" height="455">
    </div>
  </form>
  `

  return template;
}

const game3Template = () => {
  const template = createTemplate(`
   ${headerTemplate(initialState)}
  <div class="game">
    <p class="game__task">Найдите рисунок среди изображений</p>  
    ${formTemplate(game3Params.images)}
    <div class="stats">
      ${gameStatsTemplate(game3Params.stats)}
    </div>
  </div>
  ${footerTemplate}
   `);

  const gameOptions = template.querySelectorAll(`.game__option`);

  for (let i = 0; i < gameOptions.length; i++) {
    gameOptions[i].addEventListener(`click`, () => {
      renderScreen(createStatsTemplate());
    });
  }

  showIntroPage(template);

  return template;
};

export default game3Template;
