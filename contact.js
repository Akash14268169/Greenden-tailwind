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

