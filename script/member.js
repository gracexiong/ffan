/* 
* @Author: Marte
* @Date:   2017-03-02 17:02:34
* @Last Modified by:   Marte
* @Last Modified time: 2017-03-03 17:13:50
*/
$(document).ready(function(){
    var aLi=$(".view_box ul li");
    var oH=$(".view_box li").height();
    var oIndex=0;
    
    if(navigator.userAgent.toLowerCase().indexOf("firefox")!=-1){
       document.addEventListener("DOMMouseScroll", function(ev){
            var oEvent=ev||event;
            if(oEvent.detail>0){
                $(".view_box ul").css("top",-oIndex*oH+'px');
                oIndex++;
                if(oIndex>4){
                    oIndex=4;
                }
            }else{
                $(".view_box ul").css("top",-oIndex*oH+'px');
                oIndex--;
                if(oIndex<0){
                    oIndex=0;
                }
            }
        }, false);
    }else{
        document.onmousewheel=function(ev){
            var oEvent=ev||event;
            if(oEvent.wheelDelta>0){
                alert("上");
            }else{
                alert("下");
            }
        }
    }
});