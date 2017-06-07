import createTemplate from './create-template';
import renderScreen from './render-template';
import {initialState} from './data.js';
import footerTemplate from './module-footer';
import headerTemplate from './module-header';
import game1Template from './module-game-1';
import showIntroPage from './show-intro-page';

const createRulesTemplate = () => {
  const template = createTemplate(`
   ${headerTemplate(initialState)}
  <div class="rules">
    <h1 class="rules__title">Правила</h1>
    <p class="rules__description">Угадай ${initialState.requiredCorrectAnswers} раз для каждого изображения фото <img
      src="img/photo_icon.png" width="16" height="16"> или рисунок <img
      src="img/paint_icon.png" width="16" height="16" alt="">.<br>
      Фотографиями или рисунками могут быть оба изображения.<br>
      На каждую попытку отводится ${initialState.gameTimeTotal} секунд.<br>
      Ошибиться можно не более ${initialState.maxLives} раз.<br>
      <br>
      Готовы?
    </p>
    <form class="rules__form">
      <input class="rules__input" type="text" placeholder="Ваше Имя">
      <button class="rules__button  continue" type="submit" disabled>Go!</button>
    </form>
  </div>  
  ${footerTemplate}
`);

  const submitButton = template.querySelector(`.rules__button`);
  const userNameField = template.querySelector(`.rules__input`);
  const form = template.querySelector(`.rules__form`);

  userNameField.addEventListener(`keyup`, ({target}) => {
    if (target.value !== ``) {
      submitButton.removeAttribute(`disabled`);
    } else {
      submitButton.setAttribute(`disabled`, `disabled`);
    }
  });

  form.addEventListener(`submit`, (event) => {
    event.preventDefault();
    renderScreen(game1Template());
  });

  showIntroPage(template);

  return template;
};

export default createRulesTemplate;
