/* 
* @Author: Marte
* @Date:   2017-03-02 17:02:34
* @Last Modified by:   Marte
* @Last Modified time: 2017-03-02 17:32:43
*/

$(document).ready(function(){
    var aLi=$("view_box li");
    if(navigator.userAgent.toLowerCase().indexOf("firefox")!=-1){
        document.addEventListener(DOMMouseScroll, function(){
            if(detail<0){
                alert("上");
            }else{
                alert("下")
            }
        }, false);
    }else{
        document.onmouseover=function(){
            alert(1);
            if(wheelDelta>0){
                alert("上");
            }else{
                alert("下");
            }
        }
    }
});