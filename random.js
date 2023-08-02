const audio = new Audio('tick2.wav');
var tmpo = 0;
var i = 1;
var p = true;
var currentTempo;
var slowestTempo;
var fastestTempo;
var roc;
function myLoop() {
    console.log('bpm ', currentTempo)
    setTimeout(function() {
        if (p == true){
            audio.play()
        }
        i++;
        if (p == true) {
        myLoop();
        }
    }, 60000/parseInt(currentTempo))

    let tmp = Math.floor(Math.random()*2)
    console.log(tmp)
    if (tmp == 0){
        currentTempo = parseInt(currentTempo) + parseInt(roc);
        console.log(currentTempo, fastestTempo, parseInt(currentTempo) > parseInt(fastestTempo))
        if ((parseInt(currentTempo) > parseInt(fastestTempo)) == true) {
            console.log('faster')
            currentTempo = fastestTempo;
        }
    } else {
        currentTempo = parseInt(currentTempo) - parseInt(roc);
        console.log(currentTempo, fastestTempo, parseInt(currentTempo) > parseInt(fastestTempo))
        if ((parseInt(currentTempo) < parseInt(slowestTempo)) == true) {
            console.log('less')
            currentTempo = slowestTempo;
        }
    }

}

function play_sound(tempo){
    fastestTempo = document.getElementById('fastestTempo').value;
    slowestTempo = document.getElementById('slowestTempo').value;
    roc = document.getElementById('rateofchange').value;
    currentTempo = (parseInt(fastestTempo)+parseInt(slowestTempo))/2
    console.log(currentTempo)
    tmpo = tempo;
    p = true
    audio.play()
    myLoop(tmpo)
    
}

function stop_sound(){
    p = false;
    myLoop()
}
      
