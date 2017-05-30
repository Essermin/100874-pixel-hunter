import createTemplate from './create-template';
import renderScreen from './render-template';
import game3Template from './module-game-3';
import showIntroPage from './show-intro-page';

const game2Template = () => {
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
    <p class="game__task">Угадай, фото или рисунок?</p>
    <form class="game__content  game__content&#45;&#45;wide">
      <div class="game__option">
        <img src="http://placehold.it/705x455" alt="Option 1" width="705" height="455">
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
