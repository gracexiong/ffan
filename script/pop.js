/* 
* @Author: Marte
* @Date:   2017-03-01 16:21:21
* @Last Modified by:   Marte
* @Last Modified time: 2017-03-01 17:26:38
*/

$(document).ready(function(){
    $(".banner_wrapper li a").click(function(){
        $(".popup_cor").css("display","block");
    }); 
    $(".popup_cor div button").click(function(){
        $(".popup_cor").css("display","none");
    }); 
    $(".popup_cor .close").click(function(){
        $(".popup_cor").css("display", "none");
    }); 
});