//variables that will use in functions
const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".btn")

//functions

buttons .forEach(button => {
    button.addEventListener("click", () => {
     const buttonClicked = button.textContent;
     if (button.id === "c") {
        display.textContent = "0";
        return
     }


     if (button.id === "delete") {
        if (display.textContent.length === 1 || display.textContent ==="Oops!") {
            display.textContent = "0";
        }
        else {
            display.textContent = display.textContent.slice(0, -1);
        }
        return
     }
     if (button.id === "iqual") {
        try {
            display.textContent = eval(display.textContent);
        } catch {
            display.textContent = "Oops!";
        }
        
        return
     }

     if (display.textContent === "0" || display.textContent === "Oops!") {
        display.textContent = button.textContent;
     } else {
        display.textContent += button.textContent
     }
    
    })
})