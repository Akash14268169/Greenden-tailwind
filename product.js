var SIDENAV = document.getElementById("SIDENAV");
var menuicon = document.getElementById("menuicon");

// Correcting addEventListener and using SIDENAV
menuicon.addEventListener("click", function() {
    SIDENAV.style.right = "0";
});

var closeBtn = SIDENAV.querySelector("p");

closeBtn.addEventListener("click", function() {
    SIDENAV.style.right = "-50%";
});
// Product Search Functionality
var productContainer = document.getElementById("product-container")
var search = document.getElementById("search")
var productList = productContainer.querySelectorAll("div")

console.log(productList)

search.addEventListener("keyup", function() {
    var enteredValue = event.target.value.toUpperCase()
    
    for (count = 0; count < productList.length; count = count + 1) 
        {

            var productname =productList[count].querySelector("h1").textContent

        if (productname.toUpperCase().indexOf(enteredValue) < 0) 
            {
            productList[count].style.display = "none"
            }
             else {
            productList[count].style.display = "block"
            }
       }
});