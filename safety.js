// title
$(document).ready(function () {
    speed = 250;
    $(".title-box-new").each(function (titlebox_i, title_box) {
        var last = $(title_box).offset().top - $(window).scrollTop();
        var viewheight = window.innerHeight / 5 * 3;
        if (last < viewheight) {
            if ($(title_box).hasClass("played")) { } else {
                $(title_box).addClass("played");

                $(title_box).children(".title-box-mask").addClass("title-box-mask-left");
                $(title_box).children(".title-box-mask").animate({ width: $(title_box).find("h1").outerWidth() }, speed, "swing", function () {
                    $(title_box).children(".title-box-mask").removeClass("title-box-mask-left");
                    // console.log($(title_box).width());
                    // console.log($(title_box).find("h1").width());
                    console.log(parseInt($(title_box).find(".title-box-title").css("border-left-width")));
                    var cache = $(title_box).width() - $(title_box).find("h1").outerWidth(); 
                    $(title_box).children(".title-box-mask").css("right", cache);
                    // $(title_box).children(".title-box-mask").addClass("title-box-mask-right");
                    $(title_box).children(".title-box-title").animate({ opacity: "100" }, speed / 2);
                });
                $(title_box).children(".title-box-mask").animate({ width: "0" }, speed, "swing");
            }


        }
    });
})
$(document).scroll(function () {
    speed = 250;
    $(".title-box-new").each(function (titlebox_i, title_box) {
        var last = $(title_box).offset().top - $(window).scrollTop();
        var viewheight = window.innerHeight / 5 * 3;
        if (last < viewheight) {
            if ($(title_box).hasClass("played")) { } else {
                $(title_box).addClass("played");

                $(title_box).children(".title-box-mask").addClass("title-box-mask-left");
                $(title_box).children(".title-box-mask").animate({ width: $(title_box).find("h1").outerWidth() }, speed, "swing", function () {
                    $(title_box).children(".title-box-mask").removeClass("title-box-mask-left");
                    // console.log($(title_box).width());
                    // console.log($(title_box).find("h1").width());
                    console.log(parseInt($(title_box).find(".title-box-title").css("border-left-width")));
                    var cache = $(title_box).width() - $(title_box).find("h1").outerWidth(); 
                    $(title_box).children(".title-box-mask").css("right", cache);
                    // $(title_box).children(".title-box-mask").addClass("title-box-mask-right");
                    $(title_box).children(".title-box-title").animate({ opacity: "100" }, speed / 2);
                });
                $(title_box).children(".title-box-mask").animate({ width: "0" }, speed, "swing");
            }


        }
    });
})

// title end