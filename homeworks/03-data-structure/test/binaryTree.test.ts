import { BinaryTree, TraverseType } from '../binaryTree';

describe('Binary Tree tests', () => {
  describe('Set tree test', () => {
    it('Tree can be set', () => {
      const newTree = new BinaryTree({
        value: 0,
        left: null,
        right: { value: 4, left: null, right: null },
      });
      newTree.setTree({ value: 1, left: null, right: null });
      expect(newTree).toEqual({ rootNode: { left: null, right: null, value: 1 } });
    });
  });
  describe('Get column test', () => {
    it('Returns correct column values', () => {
      const tree = new BinaryTree({
        value: 0,
        left: null,
        right: {
          value: 4,
          left: { value: 11, left: null, right: null },
          right: null,
        },
      });
      const numberArray = tree.getColumn(0);
      expect(numberArray).toEqual([0, 11]);
    });
  });
  describe('Treaverse test', () => {
    it('Returns correct travesrse result', () => {
      const tree = new BinaryTree({
        value: 0,
        left: {
          value: 2,
          left: { value: 9, left: null, right: null },
          right: null,
        },
        right: {
          value: 4,
          left: { value: 11, left: null, right: null },
          right: null,
        },
      });
      const numberArray = tree.traverse(TraverseType.Bfs);
      expect(numberArray).toEqual([0, 2, 4, 9, 11]);
      const numberArray2 = tree.traverse(TraverseType.DfsPreorder);
      expect(numberArray2).toEqual([0, 2, 9, 4, 11]);
      const numberArray3 = tree.traverse(TraverseType.DfsInorder);
      expect(numberArray3).toEqual([9, 2, 0, 11, 4]);
      const numberArray4 = tree.traverse(TraverseType.DfsPostorder);
      expect(numberArray4).toEqual([9, 2, 11, 4, 0]);
      const numberArray5 = tree.traverse('Fake traverse type' as unknown as TraverseType);
      expect(numberArray5).toEqual([]);
    });
  });
});
