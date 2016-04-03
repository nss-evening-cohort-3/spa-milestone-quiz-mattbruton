function populatePage(inventory) {

    var htmlContainer = document.getElementById('container');
    var sold = " sold";
    var carString;

    // Loop over the inventory and populate the DOM.

    for (var i = 0; i < inventory.length; i++) {

        /* If the value in the JSON file for the purchased key is true, the div will be built this way
        to add an overlapping image to make it clear to the user that the car isn not available for 
        purchase. */

            carString = `<div class="col-sm-4 car`;
            if (inventory[i].purchased) {
                carString += sold;
            }
            carString += `" style="border-color: ${inventory[i].color};">`;
            carString += `<h1>${inventory[i].make}</h1>`;
            carString += `<h2>${inventory[i].model}</h2>`;
            carString += `<h4>Year: ${inventory[i].year}</h4>`;
            carString += `<h4>Price: $${inventory[i].price}</h4>`;
            carString += `<p>${inventory[i].description}</p>`;
            if (inventory[i].purchased) {
                carString += `<img class="soldImg" src="sold.png">`;
            }
            carString += `<img class="blankImg" src="blank.png">`;
            carString += `</div>`;
            htmlContainer.innerHTML += carString;

        // Now that the DOM is loaded, establish all the event listeners needed
    };

    CarLot.activateEvents();

};

/* Load the inventory and send a callback function to be
invoked after the process is complete */

CarLot.loadInventory(carsToDOM);

function carsToDOM() {
    var carInventory = CarLot.getInventory();
    populatePage(carInventory)
};