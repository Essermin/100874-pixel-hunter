import createTemplate from './create-template';
import renderScreen from './render-template';
import statsTemplate from './module-stats';
import showIntroPage from './show-intro-page';

const game3Template = () => {
  const template = createTemplate(`
   <header class="header">
    <div class="header__back">
      <span class="back">
        <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
        <img src="img/logo_small.png" width="101" height="44">
      </span>
    </div>
    <h1 class="game__timer">NN</h1>
    <div class="game__lives">
      <img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">
      <img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">
      <img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">
    </div>
  </header>
  <div class="game">
    <p class="game__task">Найдите рисунок среди изображений</p>
    <form class="game__content  game__content&#45;&#45;triple">
      <div class="game__option">
        <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
      </div>
      <div class="game__option  game__option&#45;&#45;selected">
        <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
      </div>
      <div class="game__option">
        <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
      </div>
    </form>
    <div class="stats">
      <ul class="stats">
        <li class="stats__result stats__result&#45;&#45;wrong"></li>
        <li class="stats__result stats__result&#45;&#45;slow"></li>
        <li class="stats__result stats__result&#45;&#45;fast"></li>
        <li class="stats__result stats__result&#45;&#45;correct"></li>
        <li class="stats__result stats__result&#45;&#45;wrong"></li>
        <li class="stats__result stats__result&#45;&#45;unknown"></li>
        <li class="stats__result stats__result&#45;&#45;slow"></li>
        <li class="stats__result stats__result&#45;&#45;unknown"></li>
        <li class="stats__result stats__result&#45;&#45;fast"></li>
        <li class="stats__result stats__result&#45;&#45;unknown"></li>
      </ul>
    </div>
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

  const gameOptions = template.querySelectorAll(`.game__option`);

  for (let i = 0; i < gameOptions.length; i++) {
    gameOptions[i].addEventListener(`click`, () => {
      renderScreen(statsTemplate());
    });
  }

  showIntroPage(template);

  return template;
};

export default game3Template;
