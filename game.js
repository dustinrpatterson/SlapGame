var currentDrive = 0;
var pass
var rush
var hailMary
var turnover

function callPass(){
    currentDrive += pass
    update()
    return currentDrive
}

function callRush(){
    currentDrive += rush
    update()
    return currentDrive
}

function callHailMary(){
    currentDrive += hailMary
    update()
    return currentDrive
}

function callTurnover(){
    currentDrive = 0
    update()
}




function update(){
    if (currentDrive >= 100){
        currentDrive = 100
    }

}