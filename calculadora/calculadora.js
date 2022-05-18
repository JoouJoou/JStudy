const display = document.querySelector(".display");
display.addEventListener("keypress", enter);
function button(event) {
  changeDisplay(event.textContent);
}
function changeDisplay(value) {
  switch (value) {
    case "C":
      display.value = "";
      break;
    case "«":
      display.value = display.value.slice(0, -1);
      break;
    case "=":
      display.value = eval(display.value);
      /* console.log(calculo(display.value)); */
      break;
    default:
      display.value += value;
  }
}

function enter(key) {
  if (key.key === "Enter") {
    display.value = eval(display.value);
  }
}

/* function calculo(value) {
  let number1 = null;
  let number2 = null;
  let equacao = "";
  let operator = null;
  for (i of value) {
    console.log(number1);
    switch (i) {
      case "+":
        if (operator === null) {
          operator = "+";
          number1 = Number(equacao);
          console.log(number1);
          equacao = "";
        } else {
          number2 = Number(equacao);
          equacao = "";
          switch (operator) {
            case "+":
              number1 += number2;
              break;
            case "-":
              number1 -= number2;
              break;
            case "/":
              number1 /= number2;
              break;
            case "*":
              number1 *= number2;
              break;
          }
          operator = "+";
        }
        break;
      case "-":
        if (operator === null) {
          operator = "-";
          number1 = Number(equacao);
          equacao = "";
        } else {
          number2 = Number(equacao);
          equacao = "";
          switch (operator) {
            case "+":
              number1 += number2;
              break;
            case "-":
              number1 -= number2;
              break;
            case "/":
              number1 /= number2;
              break;
            case "*":
              number1 *= number2;
              break;
          }
          operator = "-";
        }
        break;
      case "/":
        if (operator === null) {
          operator = "/";
          number1 = Number(equacao);
          equacao = "";
        } else {
          number2 = Number(equacao);
          equacao = "";
          switch (operator) {
            case "+":
              number1 += number2;
              break;
            case "-":
              number1 -= number2;
              break;
            case "/":
              number1 /= number2;
              break;
            case "*":
              number1 *= number2;
              break;
          }
          operator = "/";
        }
        break;
      case "*":
        if (operator === null) {
          operator = "*";
          number1 = Number(equacao);
          equacao = "";
        } else {
          number2 = Number(equacao);
          equacao = "";
          switch (operator) {
            case "+":
              number1 += number2;
              break;
            case "-":
              number1 -= number2;
              break;
            case "/":
              number1 /= number2;
              break;
            case "*":
              number1 *= number2;
              break;
          }
          operator = "*";
        }
        break;
      default:
        equacao += i;
    }
  }
  return number1 + Number(equacao);
} */
