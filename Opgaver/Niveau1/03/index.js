
document.addEventListener("DOMContentLoaded", () => {

    function hideElementViaCssSelector (cssSelector){
        const hideCssElement  =document.querySelector(cssSelector);
        hideCssElement.style.display = "none";
    };

    hideElementViaCssSelector("#hideHeading")

});