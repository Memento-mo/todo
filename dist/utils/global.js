"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
exports.default = styled_components_1.createGlobalStyle `
* {
  margin: 0;
  padding: 0;
}
button {
  outline: none;
  cursort: pointer;
}
a, 
a:hover {
  text-decoration: none;
}

*,
*::before,
*::after {
  box-sizing: inherit;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  outline: none;
}
html {
  box-sizing: border-box;
}
body {
  font-family: 'Source Code Pro', sans-serif;
  font-weight: 400;
  line-height: 1.6;
  user-select: none;
}
form,
input,
textarea,
button,
select,
a {
  -webkit-tap-highlight-color: rgba(0,0,0,0);
}
`;
//# sourceMappingURL=global.js.map