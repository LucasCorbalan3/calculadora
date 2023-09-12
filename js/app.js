let screen = document.getElementById("screen");
//let buttons = document.getElementsByTagName('button');
let buttons = document.querySelectorAll("button");

//console.log(screen);
console.log(buttons);

// const handlefocus = (event)=>{
//     console.log(event.target.value);
// }

// screen.addEventListener('focus',handlefocus)

let screenValue = "";

for (let item of buttons) {
  item.addEventListener("click", (e) => {
    let buttonText = e.target.innerHTML;
    switch (buttonText) {
      case "X":
        buttonText = "*";
        console.log("Button text is " + buttonText);
        screenValue += buttonText;
        screen.value = screenValue;
        return;
      case "AC":
        screenValue = "";
        screen.value = screenValue;
        return;
      case "√":
        buttonText = "sqrt(";
        console.log("Button text is " + buttonText);
        screenValue += buttonText;
        screen.value = screenValue;
        return;
      case "π":
        buttonText = "3.1416";
        console.log("Button text is " + buttonText);
        screenValue += buttonText;
        screen.value = screenValue;
        return;
      case "%":
        buttonText = "/100*";
        console.log("Button text is " + buttonText);
        screenValue += buttonText;
        screen.value = screenValue;
        return;

      default:
        screenValue += buttonText;
        screen.value = screenValue;
        return;
    }
  });
}
