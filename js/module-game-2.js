import createTemplate from './create-template';
import renderScreen from './render-template';
import game3Template from './module-game-3';
import showIntroPage from './show-intro-page';
import footerTemplate from './module-footer';
import headerTemplate from './module-header';
import gameStatsTemplate from './ingame-stat';

import {initialState, game2Params} from './data';

const formTemplate = (image) => {
  const template = `
     <form class="game__content  game__content&#45;&#45;wide">
      <div class="game__option">
        <img src="${image}" alt="Option 1" width="705" height="455">
        <label class="game__answer  game__answer&#45;&#45;photo">
          <input name="question1" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer  game__answer&#45;&#45;wide  game__answer&#45;&#45;paint">
          <input name="question1" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>
    </form>
  `;

  return template;
};

const game2Template = () => {
  const template = createTemplate(`
  ${headerTemplate(initialState)}
  <div class="game">
    <p class="game__task">Угадай, фото или рисунок?</p>
    ${formTemplate(game2Params.images[0])}
    <div class="stats">
      ${gameStatsTemplate(game2Params.stats)}
    </div>
  </div>
 ${footerTemplate}
   `);
  const gameForm = template.querySelector(`.game__content`);

  gameForm.addEventListener(`change`, () => {
    if (gameForm.querySelector(`input[name="question1"]:checked`) || gameForm.querySelector(`[name="question2"]:checked`)) {
      renderScreen(game3Template());
    }
  });

  showIntroPage(template);

  return template;
};

export default game2Template;
