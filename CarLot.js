var CarLot = (function () {
  var inventory = [];

  return {

    // function to return contents of inventory.json 
    getInventory: function () {
      return inventory;
    },

    // fairly standard XHR with event listeners for success and failure of concerning retrieval
    // data in JSON file.
    loadInventory: function (callback) {
      var inventoryLoader = new XMLHttpRequest;
      inventoryLoader.addEventListener("load", loadSuccess);
      inventoryLoader.addEventListener("error", loadFail);
      inventoryLoader.open("GET", "inventory.json");
      inventoryLoader.send();

      // run if unable to retrieve JSON data
      function loadFail() {
        console.log("Error loading data.")
      };

      // run this if the JSON file successfully loaded
      function loadSuccess() {
        inventory = JSON.parse(this.responseText);
        callback();
      };

    }
  };

})();
