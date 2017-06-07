import {initialState} from './data.js';

const footerTemplate = `
<footer class="footer">
    <a href="https://htmlacademy.ru" class="social-link social-link&#45;&#45;academy">HTML Academy</a>
    <span class="footer__made-in">Сделано в <a href="https://htmlacademy.ru" class="footer__link">HTML Academy</a> &copy; ${initialState.current_year}</span>
    <div class="footer__social-links">
    
    ${[...initialState.social].map(({name, link, modifier}) => {
      return `<a href="${link}" class="social-link  social-link&#45;&#45;${modifier}">${name}</a>`
      }).join('')
    }
    </div>
  </footer>`;

export default footerTemplate;
