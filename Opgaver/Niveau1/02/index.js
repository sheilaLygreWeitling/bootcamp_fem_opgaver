document.addEventListener("DOMContentLoaded", () => {

const insertNewValue = document.querySelector("#result");

function calculate (a, b){
    insertNewValue.textContent = a / b;
}

calculate(4, 3);

});
