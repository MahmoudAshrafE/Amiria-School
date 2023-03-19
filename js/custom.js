$(document).ready(function () {
    $(".list-dis").click(function () {
        $(".nav-list").slideDown(1000)
        $("body").css({
            overflowY: "hidden",
        })
    });
    $(".fa-close").click(function () {
        $(".nav-list").slideUp(1000, function () {
            $("body").css({
                overflowY: "scroll",
            });
        });
    });
    'use strict';
    $('.fa-arrow-circle-up').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
    });

    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 400) {
            $('.fa-arrow-circle-up').fadeIn();
        } else {
            $('.fa-arrow-circle-up').fadeOut();
        }
    });
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 100) {
            $('.Navbar-header').css("background-color","rgb(37, 34, 34)")
        }
        else{
            $('.Navbar-header').css("background-color","rgba(0, 0, 0, 0.4)")
        }
    });
    
//*************************************** */
$(".li-hover").click(function () {
    $(".nav-list").slideUp(1000, function () {
        $("body").css({
            overflowY: "scroll",
        });
    });
});
$('.activity-btn1').on('click', function () {
    $('html, body').animate({
        scrollTop: $(".sec-boxes").offset().top
    }, 800);
});
$('.fathers-btn1').on('click', function () {
    $('html, body').animate({
        scrollTop: $(".sec-fathers").offset().top
    }, 800);
});
$('.aboutme-btn1').on('click', function () {
    $('html, body').animate({
        scrollTop: $(".sec-goles").offset().top
    }, 800);
    $('.contact-btn1').on('click', function () {
        $('html, body').animate({
            scrollTop: $(".sec-date").offset().top
        }, 800);
});

$('.aboutme-btn1').on('click', function () {
    $('html, body').animate({
        scrollTop: $(".about-me-sec").offset().top
    }, 800);
});
/*************************************** */

});
});
