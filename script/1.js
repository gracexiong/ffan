/* 
* @Author: Marte
* @Date:   2017-02-04 15:38:15
* @Last Modified by:   Marte
* @Last Modified time: 2017-02-06 09:59:56
*/
$(function(){
   /* alert($(window).width()); */
     /*var oWidth=$(window).width();*/
    var oW=$(window).width();
    $(".wrapper").css("width",oW);
    $(".wrapper li").css("width",oW);
    var w=$("img").width()*4;
    $("ul").css("width",w);

    var l=($("img").width()-$(window).width())/2;
    $("img").css("left",-l);
    $(".wrapper li").click(function() {
        var q=$(this).index();
        alert(q);
        $(this).parents("ul").css("left",-$("img").width()*q);
    });
})
