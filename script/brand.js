/* 
* @Author: Marte
* @Date:   2017-02-06 14:20:15
* @Last Modified by:   Marte
* @Last Modified time: 2017-02-06 15:28:52
*/

$(document).ready(function(){
    var oW1=$(".banner_wrapper").width();
    var oW=100*$(".banner_wrapper ul li").length;
    $(".banner_wrapper ul").css("width",oW+'%');
    $(".banner_wrapper ul li").css("width",oW1);
    $(".banner_wrapper .tab_btn a").mouseover(function(){
        var oIndex=$(this).index();
        var l=oW1*oIndex;
        $(".banner_wrapper ul").animate({left:-l+'px'},"slow");
        $(".tab_btn a").removeClass("active");
        $(this).addClass("active");
    });
});