var imageSelector =  "[data-role='target']";
var titleSelector = "[data-role='title']";
var linkSelector = "[data-role='trigger']";

function setDetails() {
    // Change the detail image
    var detailImage = document.querySelector(imageSelector);
    detailImage.setAttribute("src", "images/otter3.jpg");

    //Change the detail image title
    var detailTitle = document.querySelector(titleSelector);
    detailTitle.textContent = "You Should Be Dancing";

}