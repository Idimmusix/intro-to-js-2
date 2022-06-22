let count, num1, num2, sign;

//a function to check if the user input is a number
// This function will validate three times after which it returns an error
// if the user has not still put a valid number
// returns true if number is valid an false otherwise
function validateNum1(num) {
  count = 3;
  while (count >= 0) {
    num1 = num;
    if (isNaN(num1)) {
      count--; //after putting wrong number three times, the program will end
      num = prompt(
        num1 +
          " Is not a number\nYou have " +
          count +
          " more times to enter a valid number"
      );
      continue;
    } else {
      count = 3;
      return true;
    }
  }
  return false;
}
function validateNum2(num) {
  count = 3;
  while (count >= 0) {
    num2 = num;
    if (isNaN(num1)) {
      count--; //after putting wrong number three times, the program will end
      num = prompt(
        num2 +
          " Is not a number\nYou have " +
          count +
          " more times to enter a valid number"
      );
      continue;
    } else {
      count = 3;
      return true;
    }
  }
  return false;
}
function validateSign(signer) {
  count = 3;
  while (count >= 0) {
    sign = signer;
    count--;
    switch (sign) {
      //after putting wrong number three times, the program will end
      case "1":
      case "+":
      case "add":
        return "+";

      case "2":
      case "-":
      case "minus":
        return "-";
      case "3":
      case "*":
      case "multiply":
        return "*";
      case "4":
      case "/":
      case "divide":
        return "/";
      case "5":
      case "%":
      case "modulus":
        return "%";
      default:
        signer = prompt(
          sign +
            " Is not a math symbol\nYou have " +
            count +
            " more times to enter a valid symbol"
        );
        break;
    }
    break;
  }
  count = 3;
  return 0;
}

//a function to calculate
function calculate() {
  // Prompt user for first number
  num1 = prompt(
    "What will you like to calculate today?\n\nEnter your first number: "
  );
  //check if number is valid
  if (!validateNum1(num1)) {
    alert("e pain us, but we have to let you go, Try again later"); //After three times of trial
    return;
  }
  //prompt user for a maths sign
  sign = prompt(
    num1 +
      "\nchoose 1. add (+) \n2. minus (-) \n3. divide (/)\n4. multiply (*) \n5. modulus (%) \n"
  );
  //check if number is valid
  let mainSign = validateSign(sign);
  if (mainSign === 0) {
    alert("e pain us, but we have to let you go, Try again later");
    return;
  }

  num2 = prompt(num1 + " " + mainSign + " " + "\n\nEnter the second number: ");
  if (!validateNum2(num2)) {
    alert("e pain us, but we have to let you go, Try again later");
    return;
  }
  let num3;
  switch (mainSign) {
    case "+":
      num3 = num1 + num2;
      break;
    case "-":
      num3 = num1 - num2;
      break;
    case "/":
      num3 = num1 / num2;
      break;
    case "*":
      num3 = num1 * num2;
      break;
    case "%":
      num3 = num1 % num2;
      break;
    default:
      alert("how you take reach here?, please send me a message");
  }
  alert(num1 + " " + mainSign + " " + num2 + " = " + num3);
}

calculate();
