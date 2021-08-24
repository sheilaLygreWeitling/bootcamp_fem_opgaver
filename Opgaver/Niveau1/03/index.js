
document.addEventListener("DOMContentLoaded", () => {

    function hideElementViaCssSelector (cssSelector){
        const hideCssElement  = document.querySelector(cssSelector);
        if(hideCssElement){
            hideCssElement.style.display = "none";
        }
        
    };

    hideElementViaCssSelector("#hideHeading")

});