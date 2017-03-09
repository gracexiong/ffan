/* 
* @Author: Marte
* @Date:   2017-03-02 17:02:34
* @Last Modified by:   Marte
* @Last Modified time: 2017-03-08 09:53:49
*/

$(document).ready(function() {
    var aLi=$(".view_box ul li");
    var oH=$(".view_box li").height();
    var oIndex=0;
    var playCheck=false;
    function moveEnd(){
        playCheck=false;
    }
    function fnDown(){
        oIndex++;  
        if(oIndex>aLi.length-1){
            oIndex=aLi.length-1;
        }
        $(".view_box ul").css("top",-oIndex*oH+'px');
        $(".view_box ol li").removeClass("active");
        $(".view_box ol li:eq("+oIndex+")").addClass("active");
        
        
        timer=setTimeout(moveEnd, 700);
    }
    function fnUp(){
        oIndex--;
        if(oIndex<0){
            oIndex=0;
        }
        $(".view_box ul").css("top",-oIndex*oH+'px');
        $(".view_box ol li").removeClass("active");
        $(".view_box ol li:eq("+oIndex+")").addClass("active");
        timer=setTimeout(moveEnd, 700);
    }
    function scroll(ev){
        var oEvent=ev||event;
        if(playCheck){
            return false;
        }else{
            playCheck=true;
        }
        if(oEvent.wheelDelta){
            if(oEvent.wheelDelta<0){
                fnDown();
            }else{
                fnUp();
            }
        }else{
            if(oEvent.detail>0){
                fnDown();
            }else{
                fnUp();
            }
        }
    }
    if(navigator.userAgent.toLowerCase().indexOf()!=-1){
        document.addEventListener("DOMMouseScroll",scroll,false);
    }else{
        document.onmousewheel=scroll;
    }
});