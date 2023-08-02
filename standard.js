const audio = new Audio('tick2.wav');
var tmpo = 0;
var i = 1;
var p = true;
function myLoop() {
    console.log(parseInt(rangeValue.innerText));
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
    audio.play()
    myLoop(tmpo)
    
}

function stop_sound(){
    p = false;
    myLoop()
}
      
