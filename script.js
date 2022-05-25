let string = "";
let buttons = document.getElementsByClassName("btn");
// let buttons = document.querySelectorAll(".btn");

// console.log(string);
console.log(buttons);

let arrBtns = Array.from(buttons);
// let arrBtns = [...buttons];
console.log(arrBtns);

// Code to find square
const power = () => {
  string = Math.pow(string, 2);
  return document.querySelector(".input").value = string;
}

// Code to find factorial
const factorialize = () => {
  if(string == 0 || string == 1){
    return 1;
  }

  for(var i = string - 1; i >= 1; i--){
    string = string * i;
    console.log(string);
  }
  return document.querySelector(".input").value = string;
}

// Code to find reciprocal
const reciprocal = () => {
  string = 1 / string;
  return document.querySelector(".input").value = string;
}

// Code to find log
const logarithm = () => {
  string = Math.log10(string);
  return document.querySelector(".input").value = string;
}

// Code to find inverse of sin, cos and tan
const sinverse = () => {
  string = Math.asin(string);
  return document.querySelector(".input").value = string;
}

const cosverse = () => {
  string = Math.acos(string);
  return document.querySelector(".input").value = string;
}

const tanverse = () => {
  string = Math.atan(string);
  return document.querySelector(".input").value = string;
}

arrBtns.forEach((button) => {
  button.addEventListener("click", (e) => {
    switch(e.target.innerHTML){
      case "÷":
      e.target.innerHTML = "/";
      string = string + e.target.innerHTML;
      document.querySelector(".input").value = string;
        break;
        
      case "π": 
         string = string + Math.PI;
        document.querySelector(".input").value = string;
        break;
    
      case "e":
           string = string + Math.exp(1);
         document.querySelector(".input").value = string;
         break;
        
      case "CE":
             string = string.slice(0,string.length - 1);
         document.querySelector(".input").value = string;
           break;
        
      case "ln":
             string = Math.log(string);
           document.querySelector(".input").value = string;
          break;
        
      case "sin": 
             string = Math.sin(string);
           document.querySelector(".input").value = string;
           break;
        
      case "cos":
             string = Math.cos(string);
           document.querySelector(".input").value = string;
           break;
        
      case "√": 
             string = Math.sqrt(string);
           document.querySelector(".input").value = string;
           break;
        
      case "tan": 
             string = Math.tan(string);
           document.querySelector(".input").value = string;
           break;
        
      case "x": 
      e.target.innerHTML = "*";
      string = string + e.target.innerHTML;
      document.querySelector(".input").value = string;
    break;
        
      case "=": 
       string = eval(string);
     console.log(string);
     document.querySelector(".input").value = string; 
    break;
        
      case "%": 
        string = string / 100;
        console.log(string);
        document.querySelector(".input").value = string;
      break;
        
      case "AC":
        string = "";
        document.querySelector(".input").value = string;
      break;
        
      default: 
    console.log(e.target);
    string = string + e.target.innerHTML; 
    console.log(string);
    document.querySelector(".input").value = string; 

    }
  });
});



