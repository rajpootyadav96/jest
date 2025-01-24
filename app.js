const { add, subtract, devide, multiply } = require("./mathUtils");

function calculate(a, b, operation) {
  switch (operation) {
    case "add":
      return add(a, b);
    case "subtract":
      return subtract(a, b);

    case "devide":
      return devide(a, b);
    case "multiply":
      return multiply(a, b);
  }
}

module.exports = { calculate };
