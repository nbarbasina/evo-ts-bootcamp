"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinaryTree = exports.TraverseType = void 0;
var TraverseType;
(function (TraverseType) {
    TraverseType[TraverseType["DfsInorder"] = 0] = "DfsInorder";
    TraverseType[TraverseType["DfsPreorder"] = 1] = "DfsPreorder";
    TraverseType[TraverseType["DfsPostorder"] = 2] = "DfsPostorder";
    TraverseType[TraverseType["Bfs"] = 3] = "Bfs";
})(TraverseType = exports.TraverseType || (exports.TraverseType = {}));
var BinaryTree = /** @class */ (function () {
    function BinaryTree(rootNode) {
        this.rootNode = rootNode;
        this.rootNode = rootNode;
    }
    BinaryTree.prototype.setTree = function (tree) {
        this.rootNode = tree;
        return this;
    };
    BinaryTree.prototype.getColumn = function (column) {
        var _a = this.rootNode, value = _a.value, left = _a.left, right = _a.right;
        var currentColumn = 0;
        var result = [];
        if (currentColumn === column)
            result.push(value);
        var traverseLeft = left === null ? [] : new BinaryTree(left).getColumn(column + 1);
        var traverseRight = right === null ? [] : new BinaryTree(right).getColumn(column - 1);
        return __spreadArray(__spreadArray(__spreadArray([], traverseLeft), result), traverseRight);
    };
    BinaryTree.prototype.traverse = function (type) {
        var _a = this.rootNode, value = _a.value, left = _a.left, right = _a.right;
        var traverseLeft = left === null ? [] : new BinaryTree(left).traverse(type);
        var traverseRight = right === null ? [] : new BinaryTree(right).traverse(type);
        var invalidArgument = function (argument) {
            throw new Error("Invalid argument: " + argument);
        };
        switch (type) {
            case TraverseType.Bfs: {
                var traverseOutput = [];
                var queue = [this.rootNode];
                while (queue.length > 0) {
                    var node = queue.shift();
                    traverseOutput.push(node.value);
                    if (node.left)
                        queue.push(node.left);
                    if (node.right)
                        queue.push(node.right);
                }
                return traverseOutput;
            }
            case TraverseType.DfsInorder:
                return __spreadArray(__spreadArray(__spreadArray([], traverseLeft), [value]), traverseRight);
            case TraverseType.DfsPreorder:
                return __spreadArray(__spreadArray([value], traverseLeft), traverseRight);
            case TraverseType.DfsPostorder:
                return __spreadArray(__spreadArray(__spreadArray([], traverseLeft), traverseRight), [value]);
            default: return invalidArgument(type);
        }
    };
    return BinaryTree;
}());
exports.BinaryTree = BinaryTree;
