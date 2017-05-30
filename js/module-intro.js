import createTemplate from './create-template';
import renderScreen from './render-template';
import greetingsTemplate from './module-greeting';

const introTemplate = () => {
  const template = createTemplate(`
      <div id="intro" class="intro">
        <h1 class="intro__asterisk">*</h1>
        <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
      </div>
   `);

  template.querySelector(`.intro__asterisk`).addEventListener(`click`, () => {
    renderScreen(greetingsTemplate());
  });

  return template;
};

export default introTemplate;
