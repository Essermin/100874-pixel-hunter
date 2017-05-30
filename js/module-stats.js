import createTemplate from './create-template';
import showIntroPage from './show-intro-page';

const statsTemplate = () => {
  const template = createTemplate(`
  <header class="header">
    <div class="header__back">
      <span class="back">
        <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
        <img src="img/logo_small.png" width="101" height="44">
      </span>
    </div>
  </header>
  <div class="result">
    <h1>Победа!</h1>
    <table class="result__table">
      <tr>
        <td class="result__number">1.</td>
        <td colspan="2">
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
        </td>
        <td class="result__points">×&nbsp;100</td>
        <td class="result__total">900</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">Бонус за скорость:</td>
        <td class="result__extra">1&nbsp;<span class="stats__result stats__result&#45;&#45;fast"></span></td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">50</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">Бонус за жизни:</td>
        <td class="result__extra">2&nbsp;<span class="stats__result stats__result&#45;&#45;heart"></span></td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">100</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">Штраф за медлительность:</td>
        <td class="result__extra">2&nbsp;<span class="stats__result stats__result&#45;&#45;slow"></span></td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">-100</td>
      </tr>
      <tr>
        <td colspan="5" class="result__total  result__total&#45;&#45;final">950</td>
      </tr>
    </table>
    <table class="result__table">
      <tr>
        <td class="result__number">2.</td>
        <td>
          <ul class="stats">
            <li class="stats__result stats__result&#45;&#45;wrong"></li>
            <li class="stats__result stats__result&#45;&#45;slow"></li>
            <li class="stats__result stats__result&#45;&#45;fast"></li>
            <li class="stats__result stats__result&#45;&#45;correct"></li>
            <li class="stats__result stats__result&#45;&#45;wrong"></li>
            <li class="stats__result stats__result&#45;&#45;unknown"></li>
            <li class="stats__result stats__result&#45;&#45;slow"></li>
            <li class="stats__result stats__result&#45;&#45;wrong"></li>
            <li class="stats__result stats__result&#45;&#45;fast"></li>
            <li class="stats__result stats__result&#45;&#45;wrong"></li>
          </ul>
        </td>
        <td class="result__total"></td>
        <td class="result__total  result__total&#45;&#45;final">fail</td>
      </tr>
    </table>
    <table class="result__table">
      <tr>
        <td class="result__number">3.</td>
        <td colspan="2">
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
        </td>
        <td class="result__points">×&nbsp;100</td>
        <td class="result__total">900</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">Бонус за жизни:</td>
        <td class="result__extra">2&nbsp;<span class="stats__result stats__result&#45;&#45;heart"></span></td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">100</td>
      </tr>
      <tr>
        <td colspan="5" class="result__total  result__total&#45;&#45;final">950</td>
      </tr>
    </table>
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

  showIntroPage(template);

  return template;
};

export default statsTemplate;
