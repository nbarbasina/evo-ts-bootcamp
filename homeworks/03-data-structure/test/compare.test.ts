import { compareNumberFunction } from '../compare';

describe('compareNumberFunction tests', () => {
  describe('compareNumberFunction', () => {
    it('Returns Compare Number function 1', () => {
      const a = 3;
      const b = 1;
      const aIsBigger = compareNumberFunction(a, b);
      expect(aIsBigger).toEqual(1);
    });
  });
  describe('compareNumberFunction', () => {
    it('Returns Compare Number function 2', () => {
      const a = 5;
      const b = 10;
      const aIsSmaller = compareNumberFunction(a, b);
      expect(aIsSmaller).toEqual(-1);
    });
  });
  describe('compareNumberFunction', () => {
    it('Returns Compare Number function 3', () => {
      const a = 5;
      const b = 5;
      const isEqual = compareNumberFunction(a, b);
      expect(isEqual).toEqual(0);
    });
  });
});
