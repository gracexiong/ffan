/* 
* @Author: Marte
* @Date:   2017-03-02 17:02:34
* @Last Modified by:   Marte
* @Last Modified time: 2017-03-07 15:22:11
*/
/*$(document).ready(function(){
    var aLi=$(".view_box ul li");
    var oH=$(".view_box li").height();
    var oIndex=0;
    
    if(navigator.userAgent.toLowerCase().indexOf("firefox")!=-1){
       document.addEventListener("DOMMouseScroll", function(ev){
            var oEvent=ev||event;
            if(oEvent.detail>0){
                $(".view_box ul").css("top",-oIndex*oH+'px');
                oIndex++;
                if(oIndex>aLi.length-1){
                    oIndex=aLi.length-1;
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
                $(".view_box ul").css("top",-oIndex*oH+'px');
                oIndex--;
                if(oIndex<0){
                    oIndex=0;
                }
            }else{
                $(".view_box ul").css("top",-oIndex*oH+'px');
                 oIndex++;
                 if(oIndex>aLi.length-1){
                    oIndex=aLi.length-1;
                 }
            }
        }
    }
});
*/
$(document).ready(function() {
    var aLi=$(".view_box ul li");
    var oH=$(".view_box li").height();
    var oBtn=$(".view_box ol li");
    
    var oIndex=0;
    var playCheck=false;
    function btnOn(){
        $(".view_box ol li").removeClass("active");
        $(".view_box ol li:eq("+oIndex+")").addClass("active");
    }
    function scroll(ev){
        var oEvent=ev||event;
        if(oEvent.wheelDelta){
            if(oEvent.wheelDelta<0){
                setTimeout(function(){
                    if(playCheck){
                        return false;
                    }else{
                        playCheck=true;
                    }
                }, 1000)
                $(".view_box ul").css("top",-oIndex*oH+'px');
                btnOn();

                oIndex++;  
                if(oIndex>aLi.length-1){
                    oIndex=aLi.length-1;
                }
                setTimeout(function(){
                      
                },1000)
            }else{
                $(".view_box ul").css("top",-oIndex*oH+'px');
                btnOn();
                oIndex--;
                if(oIndex<0){
                    oIndex=0;
                }
            }
        }else{
            if(oEvent.detail>0){
                $(".view_box ul").css("top",-oIndex*oH+'px');
                btnOn();
                oIndex++;
                if(oIndex>aLi.length-1){
                    oIndex=aLi.length-1;
                }
            }else{
                $(".view_box ul").css("top",-oIndex*oH+'px');
                btnOn();
                oIndex--;
                if(oIndex<0){
                    oIndex=0;
                }
            }
        }
    }
    if(navigator.userAgent.toLowerCase().indexOf()!=-1){
        document.addEventListener("DOMMouseScroll",scroll,false);
    }else{
        document.onmousewheel=scroll;
    }
});