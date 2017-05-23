(function () {
  const templates = document.querySelectorAll('template');
  const wrapper = document.querySelector('main');

  const switchTemplate = (count) => {
    const templateHtml = templates[count].innerHTML;
    wrapper.innerHTML = templateHtml;
  };

  switchTemplate(0);

  let count = 0;

  document.addEventListener('keydown', function (event) {
    const isAltKey = event.altKey;

    if (isAltKey && event.keyCode === 37) {
      if (count === 0) {
        return false;
      }

      count--;

      switchTemplate(count);
    }

    if (isAltKey && event.keyCode === 39) {
      if (count === (templates.length-1)) {
        return false;
      }
      count++;

      switchTemplate(count);
    }
  });
})();

