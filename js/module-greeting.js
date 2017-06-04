import createTemplate from './create-template';
import renderScreen from './render-template';
import createRulesTemplate from './module-rules';

const greetingsTemplate = () => {
  const template = createTemplate(`
   <div class="greeting central--blur">
    <div class="greeting__logo"><img src="img/logo_big.png" width="201" height="89" alt="Pixel Hunter"></div>
    <h1 class="greeting__asterisk">*</h1>
    <div class="greeting__challenge">
      <h3>Лучшие художники-фотореалисты бросают&nbsp;тебе&nbsp;вызов!</h3>
      <p>Правила игры просты.<br>
        Нужно отличить рисунок&nbsp;от фотографии и сделать выбор.<br>
        Задача кажется тривиальной, но не думай, что все так просто.<br>
        Фотореализм обманчив и коварен.<br>
        Помни, главное — смотреть очень внимательно.</p>
    </div>
    <div class="greeting__continue"><span><img src="img/arrow_right.svg" width="64" height="64" alt="Next"></span></div>
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

  template.querySelector(`.greeting__continue`).addEventListener(`click`, () => {
    renderScreen(createRulesTemplate());
  });

  return template;
};

export default greetingsTemplate;
