
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


    
    









    


/* 
    const changeColorOfButton = document.querySelector("#my-button"); 

    

    function colorOfButton {
        document.body.style.color = "#FFC0CB"
    }

    colorOfButton(); 

    changeColorOfButton.addEventListener("click", () => {
        document.body.style.color = "#FFC0CB"
    });

        function colorOfButton () {
        document.body.style.color = "#D3D3D3"
    }

    colorOfButton();

    changeColorOfButton.addEventListener("click", () => {
        if(changeColorOfButton != colorOfButton){
            document.querySelector("#my-button").style.background = pinkColor;
        } else if (changeColorOfButton != pinkColor){
            document.querySelector("#my-button").style.background = blueColor;
        } else {
            document.querySelector("#my-button").style.background = lavenderColor;
        }
    });
 */

    




});
