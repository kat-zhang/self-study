var imageSelector =  "[data-role='target']";
var titleSelector = "[data-role='title']";
var linkSelector = "[data-role='trigger']";

function setDetails() {
    var detailImage = document.querySelector(imageSelector);
    detailImage.setAttribute("src", "images/otter3.jpg");

}