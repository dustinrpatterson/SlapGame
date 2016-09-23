var currentDrive = 0;
var pass = Math.round(Math.random() * 20 + 0);
var rush = Math.round(Math.random() * 10 + 0);
var hailMary = Math.round(Math.random() * 80 + 0);


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

function turnover(){
    currentDrive = 0
    update()
}




function update(){
    if (currentDrive >= 100){
        currentDrive = 100
    }
    var currentDriveElement = document.getElementById('currentDrive')
    currentDriveElement.innerHTML = currentDrive

}
