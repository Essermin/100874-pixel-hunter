(function () {
  const templates = document.querySelectorAll(`template`);
  const wrapper = document.querySelector(`main`);

  const switchTemplate = (count) => {
    const templateHtml = templates[count].innerHTML;
    wrapper.innerHTML = templateHtml;
  };

  switchTemplate(0);

  let count = 0;

  const renderRequiredTemplate = (event) => {
    const {altKey: isAltKey} = event;

    if (isAltKey && event.keyCode === 37) {
      if (count === 0) {
        return false;
      }

      count--;

      return switchTemplate(count);
    }

    if (isAltKey && event.keyCode === 39) {
      if (count === (templates.length - 1)) {
        return false;
      }
      count++;

      return true;
    }

  };

  document.addEventListener(`keydown`, renderRequiredTemplate);
})();

