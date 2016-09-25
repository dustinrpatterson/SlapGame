//add a stat for yards of last play
//could I add a turnover for value 0? that resets game?


var currentDrive = 0;
var playsCalled = 0;
var pass
var rush
var hailMary

    function playCalled(){
    if (currentDrive<100) {
                playsCalled++
    }
    }

function callPass(){
    playCalled()
    currentDrive += Math.floor(Math.random() * 20);
    update()
    return
}

function callRush(){
    playCalled()
    currentDrive += Math.floor(Math.random() * 10);
    update()
    return
}

function callHailMary(){
    playCalled()
    currentDrive += Math.floor(Math.random() * 80);
    update()
    return
}

function newDrive(){
    currentDrive = 0
    playsCalled = 0
    update()
}

function update(){
    if (currentDrive >= 100){
        currentDrive = 100
    }
    var currentDriveElement = document.getElementById('currentDrive')
    currentDriveElement.innerHTML = "Total Yards Gained = " + currentDrive

    var playsCalledElement = document.getElementById('numberOfPlays')
    playsCalledElement.innerHTML = "Plays called in current drive = " + playsCalled

}
