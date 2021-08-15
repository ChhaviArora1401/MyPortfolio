
//Overlay fade out on load
// $(window).load(function (i) {
//     $('#loading').delay(10).fadeOut('slow');
// });

// $(window).load(function () {
//     $('#loading').hide();
// });

// var prevScrollpos = window.pageYOffset;
// window.onscroll = function () {
//     var currentScrollPos = window.pageYOffset;
//     if (prevScrollpos > currentScrollPos) {
//         document.getElementById("navbar").style.top = "0px";
//     } else {
//         document.getElementById("navbar").style.top = "-90px";
//     }
//     prevScrollpos = currentScrollPos;
// }

var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function close() {
    var x = document.getElementById("myTopnav");

    function set() {
        setTimeout(function () {
            undropdown(0);
        }, 100);
    }
}

