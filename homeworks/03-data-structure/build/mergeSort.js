"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeSort = exports.mergeArrays = void 0;
var mergeArrays = function (leftArr, rightArr, compare) {
    var arr = [];
    while (leftArr.length && rightArr.length) {
        if (compare(leftArr[0], rightArr[0]) === -1) {
            arr.push(leftArr.shift());
        }
        else {
            arr.push(rightArr.shift());
        }
    }
    return __spreadArray(__spreadArray(__spreadArray([], arr), leftArr), rightArr);
};
exports.mergeArrays = mergeArrays;
var mergeSort = function (arr, compare) {
    if (arr.length < 2) {
        return arr;
    }
    var middle = Math.floor(arr.length / 2);
    var leftArr = arr.slice(0, middle);
    var rightArr = arr.slice(middle, arr.length);
    return exports.mergeArrays(exports.mergeSort(leftArr, compare), exports.mergeSort(rightArr, compare), compare);
};
exports.mergeSort = mergeSort;
