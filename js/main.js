/**
 * Created by jo.chan on 2016/5/13.
 */

var audio = document.getElementById("audio");
$(".musicBtn").click(function () {
    audio.pause();
    $(".musicBtn").hide();
    $(".musicBtn-stop").show();
});


$(".musicBtn-stop").click(function () {
    audio.play();
    $(".musicBtn-stop").hide();
    $(".musicBtn").show();
});

$(".goBtn").on("click", function () {
    $("#bookPage").removeClass('animated fadeInLeft');
    $("#bookPage").addClass('animated fadeOutLeft');
    $(".indexPage-btn").removeClass('curr');
    $(".next-btn").addClass('curr');
    $("#book_main").removeClass('animated fadeOutRight');
    $("#book_main").addClass('animated fadeInRight').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
    });
});

$(".indexPage-btn").on("click", function () {
    $("#book_main").removeClass('animated fadeInRight');
    $("#book_main").addClass('animated fadeOutRight');
    $(".next-btn").removeClass('curr');
    $(".indexPage-btn").addClass('curr');
    $("#bookPage").removeClass('animated fadeOutLeft');
    $("#bookPage").addClass('animated fadeInLeft').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
    });
});

$(function () {
    $("#mybook").booklet({
        next: '.bookNext-btn',
        prev: '.bookPrev-btn',
        joNext: '.nextBtn',
        joPrev: '.prevBtn',
        joMenu: '#joMenu',
        pageSelector: true
    });
});