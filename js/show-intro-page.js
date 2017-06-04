import renderTemplate from './render-template';
import createIntroTemplate from './module-intro';

const showIntroPage = (template) => {
  template.querySelector(`.header__back`).addEventListener(`click`, () => {
    renderTemplate(createIntroTemplate());
  });
};

export default showIntroPage;
