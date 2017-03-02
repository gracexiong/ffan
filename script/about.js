/* 
* @Author: Marte
* @Date:   2017-03-02 11:30:04
* @Last Modified by:   Marte
* @Last Modified time: 2017-03-02 15:17:59
*/

$(document).ready(function(){
    $(".content ul li").click(function(){
        var oIndex=$(this).index();
        $(".ffan_info_all .ffan_info1").addClass("hide");
        $(".ffan_info_all div:eq("+oIndex+")").removeClass("hide");
        //$(".ffan_info_all div:eq(3)")[0].removeClass("hide"); 
        $(".content ul li a").removeClass("active");
        $(".content ul li:eq("+oIndex+") a").addClass("active");
    });
});