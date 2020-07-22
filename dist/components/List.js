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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const react_redux_1 = require("react-redux");
const Item_1 = __importDefault(require("./Item"));
const index_1 = require("../actions/index");
const ListWrapper = styled_components_1.default.div `
  width: 100%;
  margin: 0 auto;
`;
const List = ({ todos }) => {
    react_1.useEffect(() => {
        console.log(todos);
        index_1.getTodos();
    }, [todos]);
    return (react_1.default.createElement(ListWrapper, null, todos.map((todo) => {
        return react_1.default.createElement(Item_1.default, { data: todo, key: todo.id });
    })));
};
const mapStateToProps = (state) => {
    return {
        todos: state.todos,
    };
};
exports.default = react_redux_1.connect(mapStateToProps, { getTodos: index_1.getTodos })(List);
//# sourceMappingURL=List.js.map