"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const HeaderWrapper = styled_components_1.default.div `
  margin-top: 20px;
`;
const Title = styled_components_1.default.h1 `
  width: 100%;
  text-align: center;
  font-size: 50px;
  font-weight: 400;
`;
const AddTodoElements = styled_components_1.default.div `
  display: flex;
  justify-content: center;
`;
const InputArea = styled_components_1.default.div `
  width: 70%;
  margin-right: 20px;
`;
const Header = () => {
    return (react_1.default.createElement(HeaderWrapper, null,
        react_1.default.createElement(Title, null, "TO-DO LIST"),
        react_1.default.createElement(AddTodoElements, null,
            react_1.default.createElement(InputArea, null,
                react_1.default.createElement("input", { className: "form-control", type: "text", placeholder: "Enter you task" })),
            react_1.default.createElement("button", { type: "button", className: "btn btn-dark" }, "Add task"))));
};
exports.default = Header;
//# sourceMappingURL=Header.js.map