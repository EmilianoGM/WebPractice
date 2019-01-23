var color = [];
var squares = document.querySelectorAll(".square");

for(var i = 0 ; i < squares.length; i++){
    color[i] = generateRandomColor();
}

var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay =  document.getElementById("message");
colorDisplay.textContent = pickedColor;

for(var i = 0 ; i < squares.length; i++){
    squares[i].style.backgroundColor = color[i];

    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct";
            changeColor(clickedColor);
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try again!";
        }
    });
}

function changeColor(color){
    for(var i = 0 ; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * color.length);
    return color[random];
}

function generateRandomColor(){
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    var newColor = "rgb(" + red + ", " + green + ", " + blue + ")";
    return newColor;
}