import Car from '../classes/car.js';
import RacingCarGame from '../classes/racingCarGame.js';

import { makeRaceCourseProcessRecordsTemplate } from '../templates/templates.js';
import { checkTryCount, makeCarNamesCheckResult } from '../utils/validation.js';
import {
  preProcessCarNamesToCarNameList,
  preProcessTryCount,
} from '../utils/preProcess.js';
import {
  makeInvalidCarNamesAlertMessage,
  makeNotEnoughConditionAlertMessage,
} from '../utils/alert.js';
import {
  carNamesInputElement,
  racingCountInputElement,
  racingProcessRecordsElement,
  racingWinnersElement,
} from '../store/elements.js';

let carNameList = [];
const gamePlayCondition = {
  isCarNamesValid: false,
  isCarNamesSubmitted: false,
  isTryCountValid: false,
};

export const registerCarNames = () => {
  const carNames = carNamesInputElement.value;
  carNameList = preProcessCarNamesToCarNameList(carNames);
  const carNameCheckResult = makeCarNamesCheckResult(carNameList);
  const alertMessage = makeInvalidCarNamesAlertMessage(carNameCheckResult);
  if (alertMessage === '') {
    gamePlayCondition.isCarNamesSubmitted = true;
    gamePlayCondition.isCarNamesValid = true;
  } else {
    alert(alertMessage);
  }
};

export const markCarNameNotSubmitted = () => {
  gamePlayCondition.isCarNamesSubmitted = false;
};

const getRaceGameWinners = (racingCarGame) => {
  const winnerList = racingCarGame.getWinnerCarNameList();
  const winnerListText = winnerList.join(', ');

  return winnerListText;
};

const addCarsToRaceCourse = (racingCarGame) => {
  carNameList.forEach((carName) => {
    const car = new Car(carName);
    racingCarGame.addCarToRaceCourse(car);
  });
};

const getRaceGameResultInfo = ({ racingCarGame, tryCount }) => {
  addCarsToRaceCourse(racingCarGame);
  racingCarGame.play(tryCount);
  const raceCourseProcessRecordsTemplate = makeRaceCourseProcessRecordsTemplate(
    racingCarGame.raceCourseProcessRecords
  );
  const winnerListText = getRaceGameWinners(racingCarGame);

  return {
    raceCourseProcessRecordsTemplate,
    winnerListText,
  };
};

const showRaceGameResult = (tryCount) => {
  const racingCarGame = new RacingCarGame();
  const {
    winnerListText,
    raceCourseProcessRecordsTemplate,
  } = getRaceGameResultInfo({ racingCarGame, tryCount });
  racingProcessRecordsElement.innerHTML = raceCourseProcessRecordsTemplate;
  racingWinnersElement.innerText = `최종 우승자: ${winnerListText}`;
};

export const startRaceGame = () => {
  const tryCountInput = racingCountInputElement.value;
  const tryCount = preProcessTryCount(tryCountInput);
  gamePlayCondition.isTryCountValid = checkTryCount(tryCount);
  const alertMessage = makeNotEnoughConditionAlertMessage(gamePlayCondition);
  if (alertMessage === '') {
    showRaceGameResult(tryCount);
  } else {
    alert(alertMessage);
  }
};

export default {
  registerCarNames,
  markCarNameNotSubmitted,
  startRaceGame,
};
