var colors = ["purple", "green", "yellow", "pink"];

function changeColor(){
    var randomIndex =Math.floor(Math.random() *colors.length);
    
    $("body").css("background-color", colors[randomIndex]);
}

function addColor() {
    var newColor = $("#newColor").val();
    colors.push(newColor);
    $("body").css("background-color" , newColor);
}

$( document).ready(function() {
    $("#change").click(changeColor);
    $("#add").click(addColor);
});
