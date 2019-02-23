// Constants that point to the main image
const imageSelector =  "[data-role='target']";
const titleSelector = "[data-role='title']";
const linkSelector = "[data-role='trigger']";

function setDetails(imageUrl, titleText) {
    'use strict';
  
    var detailImage = document.querySelector(imageSelector);
    detailImage.setAttribute('src', imageUrl);
  
    var detailTitle = document.querySelector(titleSelector);
    detailTitle.textContent = titleText;
  }
  
  function imageFromThumb(thumbnail) {
    'use strict';
    return thumbnail.getAttribute('data-url');
  }
  
  function titleFromThumb(thumbnail) {
    'use strict';
    return thumbnail.getAttribute('data-title')
  }
  
  function setDetailsFromThumb(thumbnail) {
    'use strict';
    setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
  }
  
  function addThumbClickHandler(thumb) {
    thumb.addEventListener('click', function (event) {
      event.preventDefault();
      setDetailsFromThumb(thumb);
      showDetails();
    });
  }
  
  function getThumbnailsArray() {
    'use strict';
    var thumbnails = document.querySelectorAll(linkSelector);
    var thumbnailArray = [].slice.call(thumbnails);
    return thumbnailArray;
  }
  
  
  function initializeEvents() {
    'use strict';
    var thumbnails = getThumbnailsArray();
    thumbnails.forEach(addThumbClickHandler);
  }
  
  initializeEvents();
  
// function setDetails(imageUrl, titleText) {
//     // Change the detail image
//     "use strict"
//     var detailImage = document.querySelector(imageSelector);
//     detailImage.setAttribute("src", imageUrl);

//     //Change the detail image title
//     var detailTitle = document.querySelector(titleSelector);
//     detailTitle.textContent = titleText;

// }

// ///Get the information from the thumbnails to display in the main image
// function getImage(thumbnail) {
//     "use strict";
//     return thumbnail.getAttribute("data-url");
// }

// function getTitle(thumbnail) {
//     "use strict";
//     return thumbnail.getAttribute("data-title");

// }

// //Gets the details from the thumbnails and sets them to the main image
// function getDetails(thumbnail) {
//     "use strict";
//     setDetails(getImage(thumbnail), getTitle(thumbnail));
// }

// function addThumbClickHandler(thumb) {
//     "use strict";
//     thumb.addEventListener('click', function (event) {
//         event.preventDefault();
//         getDetails(thumb);
//     });
// }

// function getThumbnailsArray() {
//     "use strict";
//     var thumbnails = document.querySelectorAll(linkSelector);
//     var thumbnailArray = [].slice.call(thumbnails);
//     return thumbnailArray;
// }

// function initializeEvents() {
//     "use strict";
//     var thumbnails = getThumbnailsArray();
//     thumbnails.forEach(addThumbClickHandler);
// }

// initializeEvents();
