import renderTemplate from './render-template';
import introTemplare from './module-intro';

const showIntroPage = (template) => {
  template.querySelector(`.header__back`).addEventListener(`click`, () => {
    renderTemplate(introTemplare());
  });
};

export default showIntroPage;
