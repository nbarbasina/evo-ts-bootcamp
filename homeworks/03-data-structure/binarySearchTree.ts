import { BinaryTree, BinaryTrees, TraverseType } from './binaryTree';

export interface SearchTree extends BinaryTrees<number> {
  has(value: number): boolean;
}

export class BinarySearchTree extends BinaryTree<number> implements SearchTree {
  has(value: number): boolean {
    const valueArray = this.traverse(TraverseType.DfsInorder);
    return valueArray.includes(value);
  }
}
