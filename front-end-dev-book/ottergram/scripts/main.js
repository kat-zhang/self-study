var imageSelector =  "[data-role='target']";
var titleSelector = "[data-role='title']";
var linkSelector = "[data-role='trigger']";

function setDetails(imageUrl, titleText) {
    // Change the detail image
    "use strict"
    var detailImage = document.querySelector(imageSelector);
    detailImage.setAttribute("src", imageUrl);

    //Change the detail image title
    var detailTitle = document.querySelector(titleSelector);
    detailTitle.textContent = titleText;

}

///Get the information from the thumbnails to display in the main image
function getImage(thumbnail) {
    "use strict";
    return thumbnail.getAttribute("data-url");
}

function getTitle(thumbnail) {
    "use strict";
    return thumbnail.getAttribute("data-title");

}

function getDetails(thumbnail) {
    "use strict";
    setDetails(getImage(thumbnail), getTitle(thumbnail));
}

function addThumbClickHandler(thumb) {
    "use strict";
    thumbnail.addEventListener("click", function(event) {
        event.preventDefault();
        setDetails(thumb)
    
    });
}