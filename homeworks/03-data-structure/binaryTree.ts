export interface TreeNode<TreeNodeValue> {
    value: TreeNodeValue;
    left: TreeNode<TreeNodeValue> | null;
    right: TreeNode<TreeNodeValue> | null;
}

export enum TraverseType {
    DfsInorder,
    DfsPreorder,
    DfsPostorder,
    Bfs
}

export interface BinaryTrees<TreeNodeValue> {
    setTree(tree: TreeNode<TreeNodeValue>): this;
    traverse(traverseType: TraverseType): TreeNodeValue[];
    getColumn(columnOrder: number): TreeNodeValue[];
}

export class BinaryTree<TreeNodeValue> implements BinaryTrees<TreeNodeValue> {
  constructor(protected rootNode: TreeNode<TreeNodeValue>) {
    this.rootNode = rootNode;
  }

  setTree(tree: TreeNode<TreeNodeValue>): this {
    this.rootNode = tree;
    return this;
  }

  getColumn(column: number): TreeNodeValue[] {
    const { value, left, right } = this.rootNode;
    const targetColumn = 0;
    const result: TreeNodeValue[] = [];
    if (targetColumn === column) {
      result.push(value);
    }
    let traverseLeft: TreeNodeValue[] = [];
    if (left !== null) {
      traverseLeft = new BinaryTree(left).getColumn(column + 1);
    }
    let traverseRight: TreeNodeValue[] = [];
    if (right !== null) {
      traverseRight = new BinaryTree(right).getColumn(column - 1);
    }
    return [...traverseLeft, ...result, ...traverseRight];
  }

  traverse(type: TraverseType): TreeNodeValue[] {
    const { value, left, right } = this.rootNode;

    let traverseLeft: TreeNodeValue[] = [];
    if (left !== null) {
      traverseLeft = new BinaryTree(left).traverse(type);
    }
    let traverseRight: TreeNodeValue[] = [];
    if (right !== null) {
      traverseRight = new BinaryTree(right).traverse(type);
    }

    switch (type) {
      case TraverseType.Bfs: {
        const traverseOutput: TreeNodeValue[] = [];
        const queue: TreeNode<TreeNodeValue>[] = [this.rootNode];
        while (queue.length > 0) {
          const node = queue.shift()!;
          traverseOutput.push(node.value);
          if (node.left) queue.push(node.left);
          if (node.right) queue.push(node.right);
        }
        return traverseOutput;
      }
      case TraverseType.DfsInorder:
        return [...traverseLeft, value, ...traverseRight];
      case TraverseType.DfsPreorder:
        return [value, ...traverseLeft, ...traverseRight];
      case TraverseType.DfsPostorder:
        return [...traverseLeft, ...traverseRight, value];
      default: return [];
    }
  }
}
