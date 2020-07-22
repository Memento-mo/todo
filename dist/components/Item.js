"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Item = ({ data }) => {
    return (react_1.default.createElement("div", { className: "mt-3" },
        react_1.default.createElement("div", { className: "card" },
            react_1.default.createElement("div", { className: "card-body d-flex justify-content-between" },
                react_1.default.createElement("h3", { className: "todo-title" }, data.title),
                react_1.default.createElement("button", { type: "button", className: "btn btn-danger" }, "Delete")))));
};
exports.default = Item;
//# sourceMappingURL=Item.js.map