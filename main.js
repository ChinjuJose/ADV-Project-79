menuArray = ["Chicken Tandoori Pizza", "Paneer delight pizza", "Deluxe Veggie Pizza", "Veg Margherita Pizza","Chicken Pasta"];

function getmenu() {
    var htmldata="";
    menuArray.sort();
    for (var i = 0; i < menuArray.length; i++) {
        htmldata = htmldata + menuArray[i] + '<br></br>';
    }
    document.getElementById("displayMenu").innerHTML = htmldata;
}

function addSuggestions() {
    var item = document.getElementById("addItem").value;
    if(item!==""){
        menuArray.push(item);
        addItem();
    }
}

function addItem() {
    var htmldata="";
    var imgTag='<img id="im1" src="images/pizzaImg.png"/>'
    menuArray.sort();
    for (var i = 0; i < menuArray.length; i++) {
        htmldata = htmldata + imgTag + menuArray[i] + '<br></br>';
    }
    document.getElementById("displayAddedMenu").innerHTML = htmldata;
}