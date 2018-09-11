$(document).ready(function() {
    var w = $(".circle").css("width");
    $(".circle").css("height", w);
    
    $(".circle").click(function () {
        window.open($(this).find("a:first").attr("href"));
        return false;
    });
});

$(window).on('load', function() {
    $("#loadwrap").fadeOut(1500);
});

$(window).resize(function() {
    $(".circle").width("10%");
    var w = $(".circle").width();
    $(".circle").height(w);
});