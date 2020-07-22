"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_hot_loader_1 = require("react-hot-loader");
const styled_components_1 = __importDefault(require("styled-components"));
const Header_1 = __importDefault(require("../components/Header"));
const List_1 = __importDefault(require("../components/List"));
const AppContainer = styled_components_1.default.div `
  max-width: 900px;
  margin: 0 auto;
  padding: 0 15px;
`;
const App = () => {
    return (react_1.default.createElement(AppContainer, null,
        react_1.default.createElement(Header_1.default, null),
        react_1.default.createElement("hr", null),
        react_1.default.createElement(List_1.default, null)));
};
exports.default = react_hot_loader_1.hot(module)(App);
//# sourceMappingURL=App.js.map