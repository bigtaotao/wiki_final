// $(function () {
//     $(".piano-subpage-key").addClass("stop-animation");
//     $(".piano-subpage-key").addClass("animation");
//     $(".key-kernel").addClass("animation");
// });
// var piano_flag = [];
// $(function () {
//     $(".sub-content").each(function () {
//         piano_flag.push(1);
//         $(".test").text(piano_flag);
//     });
// });

// $(document).scroll(function () {
//     debug = []
//     playing_flag = 1;
//     $(".sub-content").each(function (i, each_0) {
//         var content_top = $(each_0).offset().top - $(window).scrollTop();
//         var content_bottom = content_top + $(each_0).outerHeight();
//         debug.push(content_bottom);
//         var judge = window.innerHeight / 3 * 2;
//         $(".test").text(piano_flag);
//         if (content_top < judge) {
//             if (playing_flag) {
//                 piano_flag[i] = 0;
//                 var key_id = $(each_0).attr("id");
//                 key_id += "-key";//找到钢琴键
//                 playing_flag = 1;
//                 $(document.getElementById(key_id)).animate({
//                     width: "12vw",
//                     height: "2vh"
//                 }, 200,function(){
//                     playing_flag = 1;
//                 });//钢琴放大
//             }
//             //    $(document.getElementById(key_id)).children().animate({background-color: "rgb(255,55,68)"})
//         }
//         if (content_bottom < judge) {

//             piano_flag[i] = 1;
//             var key_id = $(each_0).attr("id");
//             key_id += "-key";//找到钢琴键
//             $(document.getElementById(key_id)).animate({
//                 width: "8vw",
//                 height: "1vh"
//             }, 200)//钢琴缩小
//             //    $(document.getElementById(key_id)).children().animate({background-color: "rgb(255,55,68)"})
//         }
//         console.log(debug);
//     }

//     );
//     // var scrollBox = $(document);
//     //     //调用throttle函数，传入相应的方法和规定的时间;
//     //     var thro = throttle(throFun,300);
//     //     //触发事件;
//     //     scrollBox.on('scroll' , function(){
//     //         //调用执行函数;
//     //         thro();
//     //     })

//     //     // 封装函数;    
//     //     function throttle(method,time){
//     //         var timer = null;
//     //         var startTime = new Date();
//     //         return function(){
//     //             var context = this;
//     //             var endTime = new Date();
//     //             var resTime = endTime - startTime;
//     //             //判断大于等于我们给的时间采取执行函数;
//     //             if(resTime >= time){
//     //                 method.call(context);
//     //                 //执行完函数之后重置初始时间，等于最后一次触发的时间
//     //                 startTime = endTime;
//     //             }
//     //         }
//     //     }
//     //     function throFun(){
//     //         $(".sub-content").each(function(i,each_0){
//     //             var content_top = $(each_0).offset().top - $(window).scrollTop();
//     //             var content_bottom = content_top + $(each_0).outerHeight();

//     //             var judge = window.innerHeight/3*2;
//     //             $(".test").text(content_bottom-judge);
//     //             if (content_top<judge){
//     //                 if (piano_flag){
//     //                     piano_flag = 0;
//     //                     var key_id =  $(each_0).attr("id");
//     //                     key_id += "-key";//找到钢琴键
//     //                     $(document.getElementById(key_id)).animate({width:"12vw",
//     //                      height: "2vh"},200);//钢琴放大
//     //                 }    
//     //             //    $(document.getElementById(key_id)).children().animate({background-color: "rgb(255,55,68)"})
//     //             }
//     //             if (content_bottom<judge){
//     //                 // 
//     //                 piano_flag = 1;
//     //                 var key_id =  $(each_0).attr("id");
//     //                 key_id += "-key";//找到钢琴键
//     //                 $(document.getElementById(key_id)).animate({width:"8vw",
//     //                  height: "1vh"},200)//钢琴缩小
//     //              //    $(document.getElementById(key_id)).children().animate({background-color: "rgb(255,55,68)"})
//     //              }

//     //         });
//     //     }



// });

$(function () {
    $("#content-0").css("height", "30vw");
});
var hover_speed = 300;
//content-0 悬停+点击
$(function () {
    //悬停
    
    $("#content-0 .switch").hover(function () {
        
        var $mask = $($(this).nextAll(".mask"));
        if ($mask.hasClass("hover_flag")) { } else {
            $mask.addClass("hover_flag");
            var $mask = $($(this).nextAll(".mask"));//获取遮罩层
            $mask.children().each(function () {
                var fuck = $(this).width() * 0.9;
                $(this).animate({ width: "42vw" }, hover_speed, "swing");
                $(this).animate({ width: "45vw" }, hover_speed, "swing",function(){
                    $mask.removeClass("hover_flag");
                });

            })
            
        }


    }, function () {
        // var $mask = $($(this).nextAll(".mask"));
        // if ($mask.hasClass("open-flag")) { } else {
        //     var $mask = $($(this).nextAll(".mask"));//获取遮罩层
        //     $mask.children().each(function () {
        //         var fuck = $(this).width() / 0.9;
        //         $(this).animate({ width: "45vw" }, 150, "swing");
        //     })
        // }
    });
    //点击
    $("#content-0 .switch").click(function () {
        var $mask = $($(this).nextAll(".mask"));//获取遮罩层
        if ($mask.hasClass("open-flag")) {
            $mask.removeClass("open-flag");
            $mask.children().each(function () {
                $(this).animate({ opacity: "100" }, 1);
                $(this).animate({ width: $(".mask-0-box").width()/2 }, 1000);

            });
            $($(this).nextAll(".mask-front-content-box")).animate({ opacity: "100" }, 1000);
        } else {
            $("#content-0").animate({ height: "75vw" }, 750, function () {
                var $mask = $($("#content-0 .switch").nextAll(".mask"));
                $("#content-0").find(".need-scale-rich-0").removeClass("need-scale-rich-0");
                $mask.children().each(function () {
                    $(this).attr("old-width", $(this).width());
                    $(this).animate({ width: "0" }, 750, "swing");
                    $(this).animate({ opacity: "0" }, 1, "swing");
                });


            });
            $mask.addClass("open-flag");
            hover_flag = 0;
            $($(this).nextAll(".mask-front-content-box")).animate({ opacity: "0" }, 1000);
        }

    });
    //

});



//content-1 悬停+点击
$(function () {
    //悬停

    $("#content-1 .switch").hover(function () {
        var $mask = $($(this).nextAll(".mask"));
        if ($mask.hasClass("hover_flag")) { } else {
            $mask.addClass("hover_flag");
            var $mask = $($(this).nextAll(".mask"));//获取遮罩层
            $mask.find(".mask-1").each(function () {

                $(this).animate({ width: "43vw", height: "15vw" }, hover_speed, "swing");
                $(this).animate({ width: "45vw", height: "18vw" }, hover_speed, "swing",function(){
                    $mask.removeClass("hover_flag");
                });
                // $(this).animate({ height: "13vw" }, hover_speed, "swing");

            })
        }
    }, function () {
        // var $mask = $($(this).nextAll(".mask"));
        // if ($mask.hasClass("open-flag")) { } else {
        //     var $mask = $($(this).nextAll(".mask"));//获取遮罩层
        //     $mask.find(".mask-1").each(function () {

        //         $(this).animate({ width: "45vw",height: "18vw" }, hover_speed, "swing");
        //         // $(this).animate({  }, hover_speed, "swing");
        //     })
        // }
    });
    //点击
    $("#content-1 .switch").click(function () {
        speed = 700;
        var $mask = $($(this).nextAll(".mask"));//获取遮罩层
        if ($mask.hasClass("open-flag")) {
            $mask.removeClass("open-flag");
            $mask.find(".mask-1").each(function () {
                $(this).animate({ opacity: "100" }, 1, "swing");
                $(this).animate({ width: $(".mask-1-box").width()/2, height: $(".mask-1-box").height()/2 }, speed, "swing");


            });
            $($(this).nextAll(".mask-front-content-box")).animate({ opacity: "100" }, speed);
        } else {
            $mask.find(".mask-1").each(function () {
                $(this).attr("old-width", $(this).width());
                $(this).attr("old-height", $(this).height());
                $(this).animate({ width: "0", height: "0" }, speed, "swing");
                $(this).animate({ opacity: "0" }, 1, "swing");

            });
            $mask.addClass("open-flag");
            hover_flag = 0;
            $($(this).nextAll(".mask-front-content-box")).animate({ opacity: "0" }, speed);
        }

    })
});


//content-2 悬停+点击
$(function () {
    //悬停

    $("#content-2 .switch").hover(function () {
        var $mask = $($(this).nextAll(".mask"));
        if ($mask.hasClass("hover_flag")) { } else {
            $mask.addClass("hover_flag");
            var $mask = $($(this).nextAll(".mask"));//获取遮罩层
            $mask.children().each(function () {

                $(this).animate({ width: "40vw" }, hover_speed, "swing");
                $(this).animate({ width: "45vw" }, hover_speed, "swing",function(){
                    $mask.removeClass("hover_flag");
                });
            })
        }

    }, function () {
        // var $mask = $($(this).nextAll(".mask"));
        // if ($mask.hasClass("open-flag")) { } else {
        //     var $mask = $($(this).nextAll(".mask"));//获取遮罩层
        //     $mask.children().each(function () {

        //         $(this).animate({ width: "45vw" }, hover_speed, "swing");
        //     })
        // }
    });
    //点击
    $("#content-2 .switch").click(function () {
        speed = 700;
        var $mask = $($(this).nextAll(".mask"));//获取遮罩层
        if ($mask.hasClass("open-flag")) {
            $mask.removeClass("open-flag");
            $mask.children().each(function () {
                $(this).animate({ opacity: "100" }, 1, "swing");
                $(this).animate({ width: $(".mask-2-box").width()/2 }, speed, "swing");

            });
            $($(this).nextAll(".mask-front-content-box")).animate({ opacity: "100" }, speed);
        } else {
            $mask.children().each(function () {
                $(this).attr("old-width", $(this).width());
                $(this).animate({ width: "0" }, speed, "swing");
                $(this).animate({ opacity: "0" }, 1, "swing");

            });
            $mask.addClass("open-flag");
            hover_flag = 0;
            $($(this).nextAll(".mask-front-content-box")).animate({ opacity: "0" }, speed);
        }

    })
});

//content-3 悬停+点击
$(function () {
    //悬停

    $("#content-3 .switch").hover(function () {
        
        var $mask = $($(this).nextAll(".mask"));
        if ($mask.hasClass("hover_flag")) { } else {
            $mask.addClass("hover_flag");
            var $mask = $($(this).nextAll(".mask"));//获取遮罩层
            $mask.children().each(function () {

                $(this).animate({ width: "80vw" }, hover_speed, "swing");
                $(this).animate({ width: "90vw" }, hover_speed, "swing",function(){
                    $mask.removeClass("hover_flag");
                });
            })
        }

    }, function () {
        // var $mask = $($(this).nextAll(".mask"));
        // if ($mask.hasClass("open-flag")) { } else {
        //     var $mask = $($(this).nextAll(".mask"));//获取遮罩层
        //     $mask.children().each(function () {

        //         $(this).animate({ width: "90vw" }, hover_speed, "swing");
        //     })
        // }
    });
    //点击
    $("#content-3 .switch").click(function () {
        speed = 700;
        var $mask = $($(this).nextAll(".mask"));//获取遮罩层
        if ($mask.hasClass("open-flag")) {
            $mask.removeClass("open-flag");
            $mask.children().each(function () {
                $(this).animate({ opacity: "100" }, 1, "swing");
                $(this).animate({ width: $(".mask-3-box").width() }, speed, "swing");

            });
            $($(this).nextAll(".mask-front-content-box")).animate({ opacity: "100" }, speed);
        } else {
            $mask.children().each(function () {
                $(this).attr("old-width", $(this).width());
                $(this).animate({ width: "0" }, speed, "swing");
                $(this).animate({ opacity: "0" }, 1, "swing");

            });
            $mask.addClass("open-flag");
            hover_flag = 0;
            $($(this).nextAll(".mask-front-content-box")).animate({ opacity: "0" }, speed);
        }

    })
});







// title 出现  后期吧subpage和homepage合并
$(document).ready(function () {
    speed = 250
    $(".title-box-new").each(function (titlebox_i, title_box) {
        var last = $(title_box).offset().top - $(window).scrollTop();
        var viewheight = window.innerHeight / 5 * 3;
        if (last < viewheight) {
            if ($(title_box).hasClass("played")) { } else {
                $(title_box).addClass("played");

                $(title_box).children(".title-box-mask").addClass("title-box-mask-left");
                $(title_box).children(".title-box-mask").animate({ width: $(title_box).width() }, speed, "swing", function () {
                    $(title_box).children(".title-box-mask").removeClass("title-box-mask-left");
                    $(title_box).children(".title-box-mask").addClass("title-box-mask-right");
                    $(title_box).children(".title-box-title").animate({ opacity: "100" }, speed / 2);
                });
                $(title_box).children(".title-box-mask").animate({ width: "0" }, speed, "swing");
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
                $(title_box).children(".title-box-mask").animate({ width: $(title_box).width() }, speed, "swing", function () {
                    $(title_box).children(".title-box-mask").removeClass("title-box-mask-left");
                    $(title_box).children(".title-box-mask").addClass("title-box-mask-right");
                    $(title_box).children(".title-box-title").animate({ opacity: "100" }, speed / 2);
                });
                $(title_box).children(".title-box-mask").animate({ width: "0" }, speed, "swing");
            }


        }
    });
})