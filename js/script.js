//Overlay fade out on load
$(window).load(function (i) {
    $('#loading').delay(10).fadeOut('slow');
});

// $(window).load(function () {
//     $('#loading').hide();
// });

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0px";
    } else {
        document.getElementById("navbar").style.top = "-90px";
    }
    prevScrollpos = currentScrollPos;
}


function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}