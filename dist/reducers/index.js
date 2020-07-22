"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const TYPES = __importStar(require("../actions/types"));
const INITIAL_STATE = {
// todos: [
//   {
//     id: 1,
//     title: 'Coffee',
//     completed: false,
//   },
//   {
//     id: 2,
//     title: 'Drink',
//     completed: false,
//   },
//   {
//     id: 3,
//     title: 'Workout',
//     completed: false,
//   },
// ],
};
exports.default = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TYPES.GET_TODOS:
            return Object.assign({}, state);
        default:
            return state;
    }
};
//# sourceMappingURL=index.js.map