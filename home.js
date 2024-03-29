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
    //var content_height = $(".content").width()/16*9;
    //$(".content").css("height",content_height);
    // stop animation
    var $pianos = $(".piano");
    $pianos.each(function(piano_i,piano){
        $(piano).children().each(function(){
            $(this).addClass("stop-animation");
        });
    }); 
    // 注释了以下7行才能显示title mask的动画，并且显示title
    // $(".title-has-mask").each(function(piano_i,piano){
    //     $(piano).addClass("stop-animation");

    // });
    // $(".title-mask").each(function(piano_i,piano){
    //     $(piano).addClass("stop-animation");
    // });
    //video warp
    $(".title-box").each(function(titlebox_i,title_box){
    	$(title_box).find(".title-has-mask")[0].addEventListener("webkitAnimationEnd",function(){
			$(this).css("animation","");
			$(this).removeClass("playing");
			$(this).addClass("played");
    	});
		$(title_box).find(".title-has-mask")[0].addEventListener("AnimationEnd",function(){
			$(this).css("animation","");
			$(this).removeClass("playing");
			$(this).addClass("played");
    	});
		$(title_box).find(".title-mask")[0].addEventListener("webkitAnimationEnd",function(){
			$(this).css("animation","");
			$(this).removeClass("playing");
			$(this).addClass("played");
		});
		$(title_box).find(".title-has-mask")[0].addEventListener("AnimationEnd",function(){
			$(this).css("animation","");
			$(this).removeClass("playing");
			$(this).addClass("played");
    	});
    });
    
// 注释掉下面一句就能在index对齐中线！
//  $(".navigation").css("width",window.innerWidth);
//  $(".video-big").css("width",$(".navigation").css("width"));
    // $(".video").click(function(){this.paused?this.play():this.pause();});
});


//piano
$(document).scroll(function(){
    $(".piano").each(function(piano_i,piano){
        var last = $(piano).offset().top - $(window).scrollTop();
        var viewheight = window.innerHeight/3*2;
        if (0<last && last<viewheight){
            if ($(piano).hasClass("played")){
                
            }else{
                $(piano).children().each(function(key_i,key){
                    $(key).removeClass("stop-animation");
                    $(key).addClass("play-animation");
                    // setTimeout(function(){
                    //     $(key).removeClass("play-animation");
                    //     $(key).css({"animation":"", "-webkit-animation":"" });
                    //     $(key).css({"animation":"", "-webkit-animation":"" });
                    // },3000); // 间隔3000ms后又能重新播放
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
        if (viewheight/5 < last && last<viewheight ){
            if ($(evideo).hasClass("played")){
                
            }else{
                evideo.play();
                
            };
        }else{
            evideo.pause();
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
$(document).scroll(function(){
    $(".title-box").each(function(titlebox_i,title_box){
        var last = $(title_box).offset().top - $(window).scrollTop();
        var viewheight = window.innerHeight/10*3;
        var viewbottom = window.innerHeight - (last+$(title_box).height());
        // 最下面的动画不能触发
        var navtop_height = $("#nav-top").height();
        if (navtop_height<last && last<viewheight){
            if ($(title_box).find(".title-has-mask").hasClass("played") || $(title_box).find(".title-has-mask").hasClass("playing")){
            	//pass
            }else{
                //$(title_box).find(".title-has-mask").removeClass("stop-animation");
                //$(title_box).find(".title-mask").removeClass("stop-animation");
                $(title_box).find(".title-has-mask").addClass("playing");
                $(title_box).find(".title-mask").addClass("playing");
                
            };
        }else{
        	if($(title_box).find(".title-has-mask").hasClass("played")){
        		$(title_box).find(".title-has-mask").removeClass("played");
        		$(title_box).find(".title-mask").removeClass("played");
//      		$(title_box).find(".title-has-mask").addClass("playing");
//              $(title_box).find(".title-mask").addClass("playing");
        	}
        }
    });
});

//title new
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

