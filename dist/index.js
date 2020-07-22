"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_dom_1 = __importDefault(require("react-dom"));
const App_1 = __importDefault(require("./containers/App"));
const global_1 = __importDefault(require("./utils/global"));
const react_redux_1 = require("react-redux");
const store_1 = __importDefault(require("./store/store"));
const root = document.getElementById('root');
react_dom_1.default.render(react_1.default.createElement(react_redux_1.Provider, { store: store_1.default },
    react_1.default.createElement(App_1.default, null),
    react_1.default.createElement(global_1.default, null)), root);
//# sourceMappingURL=index.js.map