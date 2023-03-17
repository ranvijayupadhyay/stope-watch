var hr=0;
var min=0;
var sec=0;
var count=0;

var timer=false;


function Start(){
timer =true;
stopwatch();

}
function Stop(){
timer =false;

}
function Reset(){
timer=false;
hr=0;
min=0;
sec=0;
count=0;
document.getElementById("hr").innerHTML="00";
document.getElementById("min").innerHTML="00";
document.getElementById("Sec").innerHTML="00";
document.getElementById("count").innerHTML="00";

}
function stopwatch(){
    if(timer==true){
        count=count+1;
        if(count==100){
            sec= sec+1;
            count= 0;
        }
        if(sec==60){
            min=min+1;
            sec=0;
        }
        if(min==60){
            hr=hr+1;
            min=0;
            sec=0;
        }
        // var hrString=hr;
        // var minString=min;
        // var secString=sec;
        // var countString=count;
        // String me kuch ve add krne pe string hota h
        // if(hr<10){
        //     hrString="0"+hrString;
        // }
        // if(min<10){
        //     minString="0"+hrString;
        // }
        // if(sec<10){
        //     secString="0"+hrString;
        // }
        // if(count<10){
        //     countString="0"+hrString;
        // }
        document.getElementById("hr").innerHTML=hr;
        document.getElementById("min").innerHTML=min;
        document.getElementById("Sec").innerHTML=sec;
        document.getElementById("count").innerHTML=count;

setTimeout( "stopwatch()",10);
    }
}