// title
$(document).ready(function () {
    speed = 250
    $(".title-box-new").each(function (titlebox_i, title_box) {
        var last = $(title_box).offset().top - $(window).scrollTop();
        var viewheight = window.innerHeight / 5 * 3;
        if (last < viewheight) {
            if ($(title_box).hasClass("played")) { } else {
                $(title_box).addClass("played");

                $(title_box).children(".title-box-mask").addClass("title-box-mask-left");
                $(title_box).children(".title-box-mask").animate({ width: $(title_box).width() }, speed,"swing" ,function () {
                    $(title_box).children(".title-box-mask").removeClass("title-box-mask-left");
                    $(title_box).children(".title-box-mask").addClass("title-box-mask-right");
                    $(title_box).children(".title-box-title").animate({ opacity: "100" }, speed / 2);
                });
                $(title_box).children(".title-box-mask").animate({ width: "0" }, speed,"swing" );
            }


        }
    });
})
$(document).scroll(function () {
    speed = 250
    $(".title-box-new").each(function (titlebox_i, title_box) {
        var last = $(title_box).offset().top - $(window).scrollTop();
        var viewheight = window.innerHeight / 5 * 3;
        if (last < viewheight) {
            if ($(title_box).hasClass("played")) { } else {
                $(title_box).addClass("played");

                $(title_box).children(".title-box-mask").addClass("title-box-mask-left");
                $(title_box).children(".title-box-mask").animate({ width: $(title_box).width() }, speed,"swing", function () {
                    $(title_box).children(".title-box-mask").removeClass("title-box-mask-left");
                    $(title_box).children(".title-box-mask").addClass("title-box-mask-right");
                    $(title_box).children(".title-box-title").animate({ opacity: "100" }, speed / 2);
                });
                $(title_box).children(".title-box-mask").animate({ width: "0" }, speed,"swing");
            }


        }
    });
})
// title end
//video
// $(document).scroll(function(){
//     $(".video-box").each(function(video_i,evideo){
        
//         var last = $(evideo).offset().top - $(window).scrollTop();
//         var viewheight = window.innerHeight/5*3;
//         if (viewheight/5 < last && last<viewheight ){
//             if ($(evideo).hasClass("played")){
                
//             }else{
//                 evideo.play();
                
//             };
//         }else{
//             evideo.pause();
//         }
//     }); 
// });
// video end
//content
$(document).scroll(function () {
    speed = 700
    $(".content-mask").each(function (titlebox_i, title_box) {
        var last = $(title_box).offset().top - $(window).scrollTop();
        var viewheight = window.innerHeight / 5 * 3;
        if (last < viewheight) {
            if ($(title_box).hasClass("played")) { } else {
                $(title_box).addClass("played");
                $(title_box).children().each(function(mask_i,mask){
                    $(mask).animate({width:"0"},speed);
                });
                // $(title_box).children(".title-box-mask").addClass("title-box-mask-left");
                // $(title_box).children(".title-box-mask").animate({ width: $(title_box).width() }, speed,"swing", function () {
                //     $(title_box).children(".title-box-mask").removeClass("title-box-mask-left");
                //     $(title_box).children(".title-box-mask").addClass("title-box-mask-right");
                //     $(title_box).children(".title-box-title").animate({ opacity: "100" }, speed / 2);
                // });
                // $(title_box).children(".title-box-mask").animate({ width: "0" }, speed,"swing");
            }


        }
    });
})
//arrow
$(document).scroll(function () {
    speed = 700
    $(".arrow").each(function (titlebox_i, title_box) {
        var last = $(title_box).offset().top - $(window).scrollTop();
        var viewheight = window.innerHeight / 5 * 3;
        if (last < viewheight) {
            if ($(title_box).hasClass("played")) { } else {
                $(title_box).addClass("played");
                $(title_box).animate({opacity:"100"},5000);
                
                // $(title_box).children(".title-box-mask").addClass("title-box-mask-left");
                // $(title_box).children(".title-box-mask").animate({ width: $(title_box).width() }, speed,"swing", function () {
                //     $(title_box).children(".title-box-mask").removeClass("title-box-mask-left");
                //     $(title_box).children(".title-box-mask").addClass("title-box-mask-right");
                //     $(title_box).children(".title-box-title").animate({ opacity: "100" }, speed / 2);
                // });
                // $(title_box).children(".title-box-mask").animate({ width: "0" }, speed,"swing");
            
        }

        }
    });
})
//content end