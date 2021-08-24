
document.addEventListener("DOMContentLoaded", () => {

    const colorArray = [
        "#FFC0CB", 
        "#ADD8E6", 
        "#E6E6FA"]
    let countColor = 0; 
    const changeColorOfButton = document.querySelector("#my-button");

    changeColorOfButton.addEventListener("click", () => {
        countColor++; 
        if(countColor === colorArray.length){
            countColor = 0;
        }

        changeColorOfButton.style.background = colorArray[countColor];
    });

});
