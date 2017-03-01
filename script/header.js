/* 
* @Author: Marte
* @Date:   2017-03-01 13:46:45
* @Last Modified by:   Marte
* @Last Modified time: 2017-03-01 15:48:49
*/

$(document).ready(function(){
    var oMerchant=$(".header ul li:last");
    oMerchant.hover(function(){
        $(this).addClass("merchant1");
    },function(){
        $(this).removeClass("merchant1").addClass("merchant");
    });
});