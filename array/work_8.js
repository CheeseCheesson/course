
function getMathResult(expression) {
  if (expression.length < 3) {
    return `Ошибка длины`;
  }

  let correctArr = [];

  expression.forEach((element) => {
    if (
      !isNaN(element) ||
      element == "+" ||
      element == "-" ||
      element == "*" ||
      element == "/" ||
      element == ">" ||
      element == "<" ||
      element == "="
    ) {
      correctArr.push(element);
    }
  });

  expression = correctArr;

  switch (expression[1]) {
    case "+":
      return +expression[0] + +expression[2];
    case "-":
      return +expression[0] - +expression[2];
    case "*":
      return +expression[0] * +expression[2];
    case "/":
      return +expression[0] / +expression[2];
    case ">":
      return +expression[0] > +expression[2];
    case "<":
      return +expression[0] < +expression[2];
    case "=":
      return +expression[0] === +expression[2];
    default:
      return `Ошибка символа`;
  }
}



console.log(getMathResult(arr));



