/* 
* @Author: Marte
* @Date:   2017-03-02 15:19:36
* @Last Modified by:   Marte
* @Last Modified time: 2017-03-09 15:17:06
*/

$(document).ready(function(){
    $(".aside ul a").each(function(index,element){
        $(element).click(function(){
            $(".aside ul a").removeClass("active");
            $(element).addClass("active");
            $(".right_ffan>div").addClass("hidden").eq(index+1).removeClass("hidden");
        });
    });
    $(".aside > h3").click(function(){
        $(".right_ffan>div").addClass("hidden");
        $(".ffan_service").removeClass("hidden");
    });
    $(".right_ffan .items .list>span").toggle(function(){
        $(this).removeClass().addClass("down").html("关闭答案").parent().siblings(".answer").removeClass("hidden");
    },function(){
        $(this).removeClass().addClass("up").html("展开答案").parent().siblings(".answer").addClass("hidden");
    });
    
});