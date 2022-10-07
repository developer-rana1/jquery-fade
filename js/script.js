
$(document).ready(function () {
    $(".youtube").click(function () {
        $("#youtube").hide();
        $("#videoOne").hide();
        $("#videoTwo").hide();
    });

    $(".vimeo").click(function () {
        $("#youtube").hide();
        $("#videoOne").hide();
        $("#videoTwo").hide();
    });

    $(".popUp").click(function () {
        $("#youtube").fadeToggle();
        $("#videoOne").fadeToggle(1500);
        $("#videoTwo").fadeToggle(2000);
    });

});