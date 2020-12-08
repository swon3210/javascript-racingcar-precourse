import { makeCarNamesCheckResult, checkTryCount } from './validation.js';
<<<<<<< HEAD
import { preProcessCarNames, preProcessTryCount } from './preProcess.js';

it('preProcessCarNames', () => {
  const preProcessedCarNames = preProcessCarNames('north, east, ');
  expect(preProcessedCarNames).toBe('north,east');
=======
import {
  preProcessCarNamesToCarNameList,
  preProcessTryCount,
} from './preProcess.js';

it('preProcessCarNamesToCarNameList', () => {
  const preProcessedCarNameList = preProcessCarNamesToCarNameList(
    'north, east, '
  );
  expect(preProcessedCarNameList).toContain('north');
  expect(preProcessedCarNameList).toContain('east');
>>>>>>> swon3210
});
it('preProcessTryCount', () => {
  const preProcessedTryCount = preProcessTryCount(' 12 ');
  expect(preProcessedTryCount).toBe(12);
});
it('getCarNamesCheckResult', () => {
<<<<<<< HEAD
  expect(makeCarNamesCheckResult('north')).toMatchObject({
    isCarNumberNotEnough: true,
=======
  expect(makeCarNamesCheckResult(['north'])).toMatchObject({
    isCarNumberEnough: false,
    isCarNameNotLong: true,
    isAllCarNameDifferent: true,
  });
  expect(makeCarNamesCheckResult(['north', 'testtest'])).toMatchObject({
    isCarNumberEnough: true,
    isCarNameNotLong: false,
    isAllCarNameDifferent: true,
  });
  expect(makeCarNamesCheckResult(['north', 'north', 'north'])).toMatchObject({
    isCarNumberEnough: true,
    isCarNameNotLong: true,
    isAllCarNameDifferent: false,
>>>>>>> swon3210
  });
});
it('checkTryCount', () => {
  expect(checkTryCount(12.5)).toBe(false);
  expect(checkTryCount(-2)).toBe(false);
  expect(checkTryCount(0)).toBe(false);
});
