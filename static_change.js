const audio = new Audio('tick2.wav');
var startingTemp;
var endingTemp;
var tmpo = 0;
var i = 1;
var p = true;
var j = 0;
var roc = 10
var button1 = document.getElementById("start");
var button2 = document.getElementById("stop");
function myLoop() {
    //console.log(j)
    //console.log((parseInt(startingTemp)+difference*j), roc)
    //console.log(startingTemp, endingTemp, difference)
    setTimeout(function() {
        //console.log(60000/(parseInt(startingTemp)+difference*j))
        if (p == true){
            audio.play()
        }
        i++;
        //console.log(p)
        //console.log(p == true && j < roc)
        if (p == true && j < roc) {
            //console.log(i)
            myLoop();
            j ++;
        } else if (p == true){
            myLoop();
        }
    }, 60000/(parseInt(startingTemp)+difference*j))
    
    
  }

function play_sound(tempo){

    startingTemp = document.getElementById('startingTempo').value;
    endingTemp = document.getElementById('endingTempo').value;
    roc = document.getElementById('rateofchange').value;
    // console.log(document.getElementById('startingTempo').value);
    // console.log(document.getElementById('endingTempo').value);
    difference = (endingTemp - startingTemp)/roc
    tmpo = tempo;
    p = true
    j = 0
    if (parseInt(startingTemp) && parseInt(endingTemp) && parseInt(roc)> 0){
        audio.play()
        myLoop()
    } else{
        console.log('false')
    }
    
}

function stop_sound(){
    p = false;
    myLoop()
}
      