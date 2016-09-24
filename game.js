//add a stat for yards off last play

var currentDrive = 0;
var playsCalled = 0;
var pass
var rush
var hailMary


function callPass(){
    currentDrive += Math.floor(Math.random() * 20);
    playsCalled++;
    update()
    return currentDrive
}

function callRush(){
    currentDrive += Math.floor(Math.random() * 10);
    playsCalled++;
    update()
    return currentDrive
}

function callHailMary(){
    currentDrive += Math.floor(Math.random() * 80);
    playsCalled++;
    update()
    return currentDrive
}

function turnover(){
    currentDrive = 0
    playsCalled = 0
    update()
}

function update(){
    if (currentDrive >= 100){
        currentDrive = 100;
    }
    var currentDriveElement = document.getElementById('currentDrive')
    currentDriveElement.innerHTML = "Total Yards Gained = " + currentDrive

    var playsCalledElement = document.getElementById('numberOfPlays')
    playsCalledElement.innerHTML = "Plays called in current drive = " + playsCalled

}

