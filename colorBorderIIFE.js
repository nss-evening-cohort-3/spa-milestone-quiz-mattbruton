var CarLot = (function(newCarLot) {

    /* Adds function for event listener on container div that removes selectedCar class added by later function, and resets the 
    styling of the background color and border size whenever the user clicks any of the car elements on the page. */

    newCarLot.resetBGAndBorder = function() {
        for (var i = 0; i < carDiv.length; i++) {
            carDiv[i].classList.remove('selectedCar');
            carDiv[i].style.borderWidth = "medium";
            carDiv[i].style.backgroundColor = "#f0f0f0"
        };
    };

    /* Adds function for event listener on container div that gives the selected car element a class of "selectedCar". This function
    exists to make a later function actually work. */

    newCarLot.changeClassForStyle = function() {
        for (var i = 0; i < carDiv.length; i++) {
            event.target.parentNode.classList.add('selectedCar');
        };
    };

    /* Adds function for event listener on container element that loops through all car elements on page and checks for the element
    passed into the function. If one is found, it modifies the border to a preset value and changes the background 
    color to one also passed in as the second arguement of the function. */

    newCarLot.styleChanger = function(element, color) {
        for (var i = 0; i < carDiv.length; i++) {
            if (carDiv[i].classList.contains(element)) {
                carDiv[i].style.borderWidth = "thick";
                carDiv[i].style.backgroundColor = color;
            };
        };
    };

    /* Adds function for event listener in eventiife.js that focuses the text input element and clears it's contents
    upon user clicking a car element */

    newCarLot.clearTextInputOnClick = function() {
        textInput.focus();
        textInput.value = "";
    };

    /* Adds function for event listener that makes the description of a selected car equal to what is typed, but only
    if a card has the selectedCar class attached to it.  */

    newCarLot.changeDescriptionToInput = function() {
        for (var i = 0; i < container.children.length; i++) {
            if (container.children[i].classList.contains("selectedCar")) {
                container.children[i].children[4].textContent = textInput.value
            };
        };
    };


    return newCarLot;
})(CarLot || {});

var carDiv = document.getElementsByClassName('car');