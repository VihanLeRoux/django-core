$(document).scroll(function () {
    var pageTop = $(document).scrollTop();
    var tags = $(".fade");
        
    for (var i = 0; i < tags.length; i++) {
        var tag = tags[i];
        var fadeTop = $(tag).position().top < pageTop + 850;
        var fadeBottom = $(tag).position().top > pageTop - 850;
        if (fadeTop * fadeBottom) {
            $(tag).addClass("visible");
        } else {
            $(tag).removeClass("visible");
        }
    }

    if ($(window).scrollTop() >= $(".container").offset().top - 60) {
        $("#navbar").addClass("sticky");
    } else {
        $("#navbar").removeClass("sticky");
    }

    var yPos = ($(window).scrollTop() * 0.5);
    $(".img-cover").css({
        "transform": "translate(0px, " + yPos + "px)",
        "transition": "0s ease",
        "z-index": "-100 !important"
    });
  
    var xPos = ($(window).scrollTop() * 0.6);
    $(".caption").css({
        "transform": "translate(0px, " + xPos + "px)",
        "transition": "0s ease",
        "z-index": "-50 !important"
    });
});