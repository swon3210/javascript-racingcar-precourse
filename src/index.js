<<<<<<< HEAD
import eventHandlers from './utils/eventHandlers.js';
import elements from './store/elements.js';

(() => {
  elements.carNamesInputElement.addEventListener(
    'input',
    eventHandlers.markCarNameSubmitted
  );
  elements.carNamesSubmitButtonElement.addEventListener(
    'click',
    eventHandlers.registerCarNames
  );
  elements.racingCountSubmitElement.addEventListener(
    'click',
    eventHandlers.startRaceGame
  );
=======
import {
  markCarNameNotSubmitted,
  registerCarNames,
  startRaceGame,
} from './handlers/eventHandlers.js';
import {
  carNamesInputElement,
  carNamesSubmitButtonElement,
  racingCountSubmitElement,
} from './store/elements.js';

(() => {
  carNamesInputElement.addEventListener('input', markCarNameNotSubmitted);
  carNamesSubmitButtonElement.addEventListener('click', registerCarNames);
  racingCountSubmitElement.addEventListener('click', startRaceGame);
>>>>>>> swon3210
})();
