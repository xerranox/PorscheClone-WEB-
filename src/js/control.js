let btnpause = document.getElementById("btnpause");
let imgpause = document.getElementById("imgpause");
let video = document.getElementById("video");

let paused = false;

function Pause() {
    if(paused == false){
        video.pause();
        paused = true;
        imgpause.setAttribute("src", "src/img/play.svg")
    }else {
        video.play();
        paused = false;
        imgpause.setAttribute("src", "src/img/pause.svg")
    }
}