import createTemplate from './create-template';
import showIntroPage from './show-intro-page';
import footerTemplate from './module-footer';
import headerTemplate from './module-header';
import gameStatsTemplate from './ingame-stat';

import {initialState, gameStats} from './data';


const statsItemTemplate = ({gameNumber, stats, pointsMultiplier, points, bonuses, result: {completed, resultPoints}}) => {
 const template = `  
   <table class="result__table">
    <tr>
      <td class="result__number">${gameNumber}</td>
      <td colspan="2">
        ${gameStatsTemplate(stats)}
      </td>
      <td class="result__points">${pointsMultiplier ? `× ${pointsMultiplier}` : ``}</td>
      <td class="result__total">${points}</td>
    </tr>
    ${[...bonuses].map(({type, label, count, points, total}) => {
      return `
      <tr>
          <td></td>
          <td class="result__extra">${type}:</td>
          <td class="result__extra">${count}&nbsp;<span class="stats__result stats__result--${label}"></span></td>
          <td class="result__points">×&nbsp;${points}</td>
          <td class="result__total">${total}</td>
        </tr>
        `;
      }).join(``)
    }    
      <tr>
        <td colspan="5" class="result__total  result__total&#45;&#45;final">${completed ? resultPoints : `FAIL`}</td>
      </tr>
    </table>
  `;

  return template;
};

const createStatsTemplate = () => {
  const template = createTemplate(`
  ${headerTemplate(initialState)}
  <div class="result">
    <h1>Победа!</h1>
    ${[...gameStats.games].map((gameData) => {
      return statsItemTemplate(gameData);
    }).join(``)}
  </div>
  ${footerTemplate}
   `);

  showIntroPage(template);

  return template;
};

export default createStatsTemplate;
