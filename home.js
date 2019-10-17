// 初始化页面，包括调整下拉菜单宽度和内容div高度
function justify_navigation(){
    $(".navigation-item .navigation-item-link").each(function(index){
        var widths = $(this).css("width");        
        $($(".navigation-item .navigation-dropdown-panel")[index]).children().each(function(){
            $(this).css("width",widths);           
        })
    })
};
$(function(){
    justify_navigation();
    setTimeout('justify_navigation',3000);
    
    //
    // var content_height = $(".content").width()/16*9;
    // $(".content").css("height",content_height);
    // stop animation
    var $pianos = $(".piano");
    $pianos.each(function(piano_i,piano){
        $(piano).children().each(function(){
            $(this).addClass("stop-animation");
        });
    }); 
    // $(".title-has-mask").each(function(piano_i,piano){
    //     $(piano).addClass("stop-animation");

    // });
    // $(".title-mask").each(function(piano_i,piano){
    //     $(piano).addClass("stop-animation");
    // });
    //video warp
    $(".navigation").css("width",window.innerWidth);
    $(".video-big").css("width",$(".navigation").css("width"));
    // $(".video").click(function(){this.paused?this.play():this.pause();});
});
//piano
$(document).scroll(function(){
    $(".piano").each(function(piano_i,piano){
        var last = $(piano).offset().top - $(window).scrollTop();
        var viewheight = window.innerHeight/3*2;
        if (last<viewheight){
            if ($(piano).hasClass("played")){
                
            }else{
                $(piano).children().each(function(key_i,key){
                    $(key).removeClass("stop-animation");
                    $(key).addClass("play-animation");
                })
                $(piano).addClass("played");
            };
        }
    }); 
});
//video
$(document).scroll(function(){
    $(".video-box").each(function(video_i,evideo){
        
        var last = $(evideo).offset().top - $(window).scrollTop();
        var viewheight = window.innerHeight/5*3;
        if (last<viewheight){
            if ($(evideo).hasClass("played")){
                
            }else{
                evideo.play();
                
            };
        }
    }); 
});
//very strange
$(document).scroll(function (){
    $(".navigation-item .navigation-item-link").each(function(index){
        var widths = $(this).css("width");        
        $($(".navigation-item .navigation-dropdown-panel")[index]).children().each(function(){
            $(this).css("width",widths);           
        })
    });
});
//title
// $(document).scroll(function(){
//     $(".title-box").each(function(titlebox_i,title_box){
//         var last = $(title_box).offset().top - $(window).scrollTop();
//         var viewheight = window.innerHeight/5*3;
//         if (last<viewheight){
//             if ($(title_box).hasClass("played")){
//                 //pass
//             }else{
//                 $(title_box).find(".title-has-mask").removeClass("stop-animation");
//                 $(title_box).find(".title-mask").removeClass("stop-animation");
//                 $(title_box).find(".title-has-mask").addClass("play-animation");
//                 $(title_box).find(".title-mask").addClass("play-animation");
//                 $(title_box).addClass("played");
//             };
//         }
//     });
// })
