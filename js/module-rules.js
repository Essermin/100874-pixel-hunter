import createTemplate from './create-template';
import renderScreen from './render-template';
import game1Template from './module-game-1';
import showIntroPage from './show-intro-page';

const rulesTemplate = () => {
  const template = createTemplate(`
   <header class="header">
    <div class="header__back">
      <span class="back">
        <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
        <img src="img/logo_small.png" width="101" height="44">
      </span>
    </div>
  </header>
  <div class="rules">
    <h1 class="rules__title">Правила</h1>
    <p class="rules__description">Угадай 10 раз для каждого изображения фото <img
      src="img/photo_icon.png" width="16" height="16"> или рисунок <img
      src="img/paint_icon.png" width="16" height="16" alt="">.<br>
      Фотографиями или рисунками могут быть оба изображения.<br>
      На каждую попытку отводится 30 секунд.<br>
      Ошибиться можно не более 3 раз.<br>
      <br>
      Готовы?
    </p>
    <form class="rules__form">
      <input class="rules__input" type="text" placeholder="Ваше Имя">
      <button class="rules__button  continue" type="submit" disabled>Go!</button>
    </form>
  </div>
  <footer class="footer">
    <a href="https://htmlacademy.ru" class="social-link social-link&#45;&#45;academy">HTML Academy</a>
    <span class="footer__made-in">Сделано в <a href="https://htmlacademy.ru" class="footer__link">HTML Academy</a> &copy; 2016</span>
    <div class="footer__social-links">
      <a href="https://twitter.com/htmlacademy_ru" class="social-link  social-link&#45;&#45;tw">Твиттер</a>
      <a href="https://www.instagram.com/htmlacademy/" class="social-link  social-link&#45;&#45;ins">Инстаграм</a>
      <a href="https://www.facebook.com/htmlacademy" class="social-link  social-link&#45;&#45;fb">Фэйсбук</a>
      <a href="https://vk.com/htmlacademy" class="social-link  social-link&#45;&#45;vk">Вконтакте</a>
    </div>
  </footer>
   `);

  const submitButton = template.querySelector(`.rules__button`);
  const userNameField = template.querySelector(`.rules__input`);

  template.querySelector(`.rules__button`).addEventListener(`click`, () => {
    renderScreen(game1Template());
  });

  userNameField.addEventListener(`keyup`, ({target}) => {
    if (target.value !== ``) {
      submitButton.removeAttribute(`disabled`);
    } else {
      submitButton.setAttribute(`disabled`, `disabled`);
    }
  });

  showIntroPage(template);

  return template;
};

export default rulesTemplate;
