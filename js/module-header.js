import {initialState} from './data.js';

const headerBackTemplate = `
  <div class="header__back">
    <span class="back">
      <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
      <img src="img/logo_small.png" width="101" height="44">
    </span>
  </div>
`;

const playerEmptyLifeTemplate = `
  <img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">
`;

const playerFullLifeTemplate = `
  <img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">
`;

const headerTemplate = (state) => `
  <header class="header">  
    ${headerBackTemplate}   
    <h1 class="game__timer">${state.gameTimeLeft}</h1>
    <div class="game__lives">
    ${new Array(state.maxLives - state.lives).fill(`<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">`).join(``)}
    ${new Array(state.lives).fill(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">`).join(``)}  
    </div>
  </header>`
;

export default headerTemplate;
