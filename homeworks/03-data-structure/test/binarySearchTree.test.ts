import { BinarySearchTree } from '../binarySearchTree';

describe('Binary Search Tree test', () => {
  describe('BinarySearchTree', () => {
    it('Returns correct value in Binary Tree value array', () => {
      const tree = new BinarySearchTree({
        value: 0,
        left: null,
        right: {
          value: 4,
          left: { value: 11, left: null, right: null },
          right: null,
        },
      });
      const hasValue = tree.has(6);
      expect(hasValue).toEqual(false);
      const hasValue2 = tree.has(11);
      expect(hasValue2).toEqual(true);
    });
  });
});
