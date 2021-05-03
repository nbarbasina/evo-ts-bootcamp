import { mergeArrays, mergeSort } from '../mergeSort';
import { compareNumberFunction } from '../compare';

describe('mergeSort tests', () => {
  describe('mergeArrays', () => {
    it('Returns "left" and "right" merged arrays', () => {
      const leftArr = [1, 3, 5, 7, 9, 11, 13];
      const rightArr = [2, 4, 6, 8, 10, 12, 14];
      const unitedArrays = mergeArrays(leftArr, rightArr, compareNumberFunction);
      expect(unitedArrays).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]);
    });
  });

  describe('mergeSort', () => {
    it('Returns "left" array sort', () => {
      const leftArr = [1, 4, 5, 2, 3, 6];
      const unitedArrays = mergeSort(leftArr, compareNumberFunction);
      expect(unitedArrays).toEqual([1, 2, 3, 4, 5, 6]);
    });
  });
});
