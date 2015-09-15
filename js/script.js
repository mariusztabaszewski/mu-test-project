// mobile menu on/off on mobile view

var main_nav = $(".main-nav");
var mobile_menu = $(".mobile-menu");

main_nav.addClass("js-none");

mobile_menu.click(function() {
	main_nav.toggleClass("js-none");
});

// smooth scroll

$('.main-nav li:first-child a').addClass('js-active');

$(document).on("scroll", onScroll);
$('a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    $(document).off("scroll");
    $('a').each(function () {
        $(this).removeClass('js-active');
    });
    $(this).addClass('js-active');
    var target = this.hash,
        menu = target;
    $target = $(target);
    $('html, body').stop().animate({
        'scrollTop': $target.offset().top-60
    }, 500, 'swing', function () {
        window.location.hash = target;
        $(document).on("scroll", onScroll);
    });
});

// set up active class while scrolling

var nav_link = $('.main-nav a');

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    nav_link.each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top-300 <= scrollPos && refElement.position().top+300 + refElement.height() > scrollPos) {
            nav_link.removeClass("js-active");
            currLink.addClass("js-active");
        }
        else{
            currLink.removeClass("js-active");
        }
    });
}

// fixed problem with hash link and menu fixed on top of the page

if ( window.location.hash ) {
    var hash = window.location.hash,
        $hash = $(hash);
    $hash.removeAttr('id');
    $hash.before('<div id="'+hash.slice(1)+'" class="hashlink"></div>');
    window.location.hash = hash;
}

// start slider set up

$(".owl-carousel-start").owlCarousel({
	navigation : false,
    slideSpeed : 100,
    paginationSpeed : 300,
    singleItem:true,
    autoPlay: true,
});

// team slider set up

$(".owl-carousel-team").owlCarousel({
    autoPlay: 2000,
    items : 4,
    itemsDesktop : [1200,3],
    itemsDesktopSmall : [960,3]
});

// reading the value of form inputs on 'submit' click

var send = $('input[type="button"]');

var input_name = $('input[id="name"]');
var input_email = $('input[id="email"]');
var input_subject = $('input[id="subject"]');
var input_message = $('textarea[id="message"]');

var form_info = "";

send.click(function() {
    form_info = "name: " + input_name.val() + "\n" + "email: " + input_email.val() + "\n" + "subject: " + input_subject.val() + "\n" + "message: " + input_message.val();
    alert(form_info);
    input_name.val("");
    input_email.val("");
    input_subject.val("");
    input_message.val("");
});

