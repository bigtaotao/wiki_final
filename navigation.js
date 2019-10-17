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
});
$(document).scroll(function (){
    $(".navigation-item .navigation-item-link").each(function(index){
        var widths = $(this).css("width");        
        $($(".navigation-item .navigation-dropdown-panel")[index]).children().each(function(){
            $(this).css("width",widths);           
        })
    });
});