/************** Menu scroll **************/

$("#contacts, #gallery, #about-us, #buttonTop").on('click', function(event) {
    $('html, body').animate({
        scrollTop: 0}, 800);
});

/************** Back to top button **************/

$(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
        $('#buttonTop').fadeIn();
    } else {
        $('#buttonTop').fadeOut();
    }
});

/************** Overlay menu **************/

function openNav() {
    document.getElementById("closebtn").style.display = "block";
    document.getElementById("overlay-menu").style.width = "100%";
}

function closeNav() {
    document.getElementById("closebtn").style.display = "none";
    document.getElementById("overlay-menu").style.width = "0%";
}