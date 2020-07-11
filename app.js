var min = 0;
var sec = 0;
var msec = 0;
var minHeading = document.getElementById("mins");
var secHeading = document.getElementById("secs");
var msecHeading = document.getElementById("milisecs");
var interval;


function timer(){
    msec++
    msecHeading.innerHTML = msec;

    if(msec >= 100){
        sec++
        secHeading.innerHTML = sec;
        msec = 0;
        
    }
    else if(sec >= 60){
        min++
        minHeading.innerHTML = min;
        sec = 0;
    }
}
function start(){
    interval = setInterval(timer,10)
}
function stop(){
    clearInterval( interval);
}
function reset(){
    msec = 0;
    sec = 0;
    min = 0;
    msecHeading.innerHTML = msec;
    secHeading.innerHTML = sec;
    minHeading.innerHTML = min;
    stop()
}
// function disable(buttn){
//    var a = document.getElementById(buttn.id).disabled = true;
//     // document.getElementById(buttn1.id).disabled = false;
//     a.disabled = false;
// }
// // function enable(buttn){
// //     // // document.getElementById(buttn1.id).disabled = true;
// //     // document.getElementById(buttn.id).disabled = false;
// //     var a = document.getElementById(buttn.id).disabled = true;
// //     a.disabled = false;
// // }

// var btn = document.getElementById("Button");
// btn.disabled = false;

function disable(){
    var btn = document.getElementById("Button");
    btn.disabled = true;
    var btn = document.getElementById("Button2");
    btn.disabled = false;
}
function enable(){
    var btn = document.getElementById("Button");
    btn.disabled = false;
    var btn = document.getElementById("Button2");
    btn.disabled = true;
}
function allreset(){
    var btn = document.getElementById("Button");
    btn.disabled = false;
    var btn = document.getElementById("Button2");
    btn.disabled = false;

}