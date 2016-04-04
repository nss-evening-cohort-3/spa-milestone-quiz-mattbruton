var CarLot = (function(newCarLot) {

    /* This function runs all the functions contained in the colorBorderIIFE.js file. */

    newCarLot.activateEvents = function() {
        container.addEventListener("click", function() {
            CarLot.clearTextInputOnClick();
            CarLot.resetBGAndBorder();
            CarLot.changeClassForStyle();
        });
        textInput.addEventListener("keyup", function(event) {
            CarLot.changeDescriptionToInput();
        });
    };


    return newCarLot;
})(CarLot || {});