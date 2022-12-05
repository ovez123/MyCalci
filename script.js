let string = "";
// let buttons = document.getElementsByClassName("btn");
let buttons = document.querySelectorAll(".btn");

console.log(buttons);

buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    switch (e.target.innerText) {
      case "÷":
        e.target.innerText = "/";
        string = string + e.target.innerText;
        break;

      case "π":
        string = string + Math.PI;
        break;

      case "e":
        string = string + Math.exp(1);
        break;

      case "C":
        string = "";
        break;

      case "ln":
        string = Math.log(string);
        break;

      case "sin":
        // Returns the value of sine in radians
        string = Math.sin(string);
        break;

      case "cos":
        // Returns the value of cosine in radians
        string = Math.cos(string);
        break;

      case "√":
        string = Math.sqrt(string);
        break;

      case "tan":
        // Returns the value of tangent in radians
        string = Math.tan(string);
        break;

      case "x":
        e.target.innerText = "*";
        string = string + e.target.innerText;
        break;

      case "=":
        string = eval(string);
        console.log(string);
        break;

      case "%":
        string = string / 100;
        console.log(string);
        break;

      case "10x":
        string = 10 ** string;
        break;

      case "x2":
        string = Math.pow(string, 2);
        // string = string * string;
        // string = string ** 2;
        break;

      case "1/x":
        string = 1 / string;
        break;

      case "log":
        string = Math.log10(string);
        break;

      // Returns the value of sine inverse in radians
      case "sin-1":
        string = Math.asin(string);
        break;

      // Returns the value of cosine inverse in radians
      case "cos-1":
        string = Math.acos(string);
        break;

      // Returns the value of tangent inverse in radians
      case "tan-1":
        string = Math.atan(string);
        break;

      case "x!":
        if (string == 0 || string == 1) {
          string = 1;
        }

        for (var i = string - 1; i >= 1; i--) {
          string = string * i;
        }
        break;

      default:
        console.log(e);
        console.log(e.target);
        console.log(e.target.innerText);
        string = string + e.target.innerText;
        console.log(string);
    }
    document.querySelector(".input").value = string;
  })
});




