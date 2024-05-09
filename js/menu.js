
$(function () {
    $(".wrap a").click(function () {
        $(".pop_up").fadeIn();

    });
    $(".pop_up span").click(function () {
        $(".pop_up").fadeOut();
    });
});