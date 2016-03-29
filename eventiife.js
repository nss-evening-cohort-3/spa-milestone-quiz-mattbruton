var CarLot = (function(newCarLot){

  /* This function runs all the event listeners contained in the colorBorderIIFE.js file. No reason to really 
  separate them this way, but was just playing around with IIFE's :) */

  newCarLot.activateEvents = function() {
    CarLot.clearTextInputOnClick();
    CarLot.resetBGAndBorder();
    CarLot.changeClassForStyle();
    CarLot.styleChanger("selectedCar", "lightblue");
    CarLot.changeDescriptionToInput();

  };

return newCarLot;
})(CarLot||{});
