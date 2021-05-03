"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compareFunction = void 0;
function compareFunction(a, b, val) {
    var aValue;
    var bValue;
    if (val) {
        aValue = a[val];
        bValue = b[val];
    }
    else {
        aValue = a;
        bValue = b;
    }
    if (aValue > bValue) {
        return 1;
    }
    if (aValue < bValue) {
        return -1;
    }
    return 0;
}
exports.compareFunction = compareFunction;
