
document.addEventListener("DOMContentLoaded", () => {

    let buttonWrapper = document.querySelector("#buttons");

    buttonWrapper.addEventListener("click", (e) => {
        if(e.target.localName == "button"){
            let buttons = document.querySelectorAll("#buttons button");
            buttons.forEach((button)=>{
                button.removeAttribute("style");
            });
            e.target.style.backgroundColor = "#FFC0CB";
        } 
    });

    


/* 
    let buttons = document.querySelectorAll("#buttons button");   
    let colorButtonsArray = ["#FFC0CB", "#ADD8E6"];
    
    

    function disableButtons (){
        

    }; */


    
    



});
