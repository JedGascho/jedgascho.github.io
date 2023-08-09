const audio = new Audio('tick2.wav');
var tmpo = 0;
var i = 1;
var p = true;
var is_playing = null;
function myLoop() {
    //console.log(parseInt(rangeValue.innerText));
    is_playing = true
    setTimeout(function() {
        if (p == true){
            audio.play()
        }
        i++;
        if (p == true) {
        myLoop();
        }
    }, 60000/parseInt(rangeValue.innerText))
  }

function play_sound(tempo){
    tmpo = tempo;
    //document.getElementById('tempo').innerHTML = tmpo/100*6
    p = true
    if (is_playing != true){
        audio.play()
    myLoop()
    }
    
}

function stop_sound(){
    p = false;
    is_playing = false
    //myLoop()
}
      
function stop_start(){
    if (is_playing == true){
        stop_sound()
        document.getElementById("stop_start_btn").innerHTML = "▶️";
    } else {
        play_sound()
        document.getElementById("stop_start_btn").innerHTML = "⏸";
    }
}
