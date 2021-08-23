document.addEventListener("DOMContentLoaded", () => {

const insertNewValue = document.querySelector("#result");

function beregnForhold (a, b){
    insertNewValue.textContent = a / b;
}

beregnForhold(4, 3);

});
