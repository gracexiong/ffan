/* 
* @Author: Marte
* @Date:   2017-03-01 13:46:45
* @Last Modified by:   Marte
* @Last Modified time: 2017-03-02 09:38:09
*/

$(document).ready(function(){
    var oMerchant=$(".header ul li:last");
    oMerchant.hover(function(){
        $(this).addClass("merchant1");
        /*$(".merchant1").hover(function(){
            $(this).css("backgroundColor", "#e8e8e8");
        });*/
    },function(){
        $(this).removeClass("merchant1").addClass("merchant");
    });
});