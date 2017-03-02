/* 
* @Author: Marte
* @Date:   2017-03-02 15:19:36
* @Last Modified by:   Marte
* @Last Modified time: 2017-03-02 17:02:19
*/

$(document).ready(function(){
    $(".content .aside ul li a").click(function(){
        $(".content ul li a").removeClass("active");
        $(this).addClass("active");
    })
    $(".content .aside .ffan_app").click(function(){
        $(".content .right_ffan .item1").addClass("hidden");
        $(".content div.ffan_app").removeClass("hidden");
        
    });
    $(".content .aside .commonQ").click(function(){
        $(".content .right_ffan .item1").addClass("hidden");
        $(".content div.commonQ").removeClass("hidden");
    });
    $(".content .aside .brand_cor").click(function(){
        $(".content .right_ffan .item1").addClass("hidden");
        $(".content div.brand_cor").removeClass("hidden");
    });
    $(".content .aside .tradeArea_cor").click(function(){
        $(".content .right_ffan .item1").addClass("hidden");
        $(".content div.tradeArea_cor").removeClass("hidden");
    });
    $(".content .aside .user_centerQ").click(function(){
        $(".content .right_ffan .item1").addClass("hidden");
        $(".content div.user_centerQ").removeClass("hidden");
    });
    $(".content .aside .user_center").click(function(){
        $(".content .right_ffan .item1").addClass("hidden");
        $(".content div.user_center").removeClass("hidden");
    });
});