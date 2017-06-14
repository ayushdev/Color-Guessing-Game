var numSquares=6;
var square= document.querySelectorAll(".square");
var reset= document.querySelector("#reset");
var h1= document.querySelector("h1");
var easy= document.querySelector("#easy");
var hard= document.querySelector("#hard");
var message= document.querySelector("#message");
var colorDisplay= document.querySelector("#colorDisplay");
var clickedColor;
var pickedColor;
assignColor(numSquares);
pickColor();
displayColor(pickedColor);

function displayColor(pickedColor){
  colorDisplay.textContent=pickedColor;
}

function assignColor(numSquares){
  for(var i=0; i<numSquares;i++){
    var r = Math.floor(Math.random()*250);
    var g = Math.floor(Math.random()*250);
    var b = Math.floor(Math.random()*250);
    square[i].style.background= "rgb("+r+", "+g+", "+b+")";
  }
}

function pickColor(){
  pickedColor= square[Math.floor(Math.random()*6)].style.background;
}

function checkColor(clickedColor){
  if(clickedColor==pickedColor){
    message.textContent="Correct!";
    reset.textContent="Play Again?";
    h1.style.background=clickedColor;
    square.forEach(function(item,index){
      square[index].style.background= clickedColor;
    });
  }
  else{
    message.textContent="Wrong!";
  }
}

square.forEach(function(item,index) {
  square[index].addEventListener("click", function() {
    clickedColor= this.style.background;
    this.style.background="#232323";
    checkColor(clickedColor);
  });
});

reset.addEventListener("click", function(){
  message.textContent="";
  reset.textContent="Reset";
  h1.style.background="steelblue";
  assignColor(numSquares);
  pickColor();
  displayColor(pickedColor);
});

easy.addEventListener("click", function(){
  numSquares=3;
  this.classList.add("selected");
  hard.classList.remove("selected");
  message.textContent="";
  reset.textContent="Reset";
  h1.style.background="steelblue";
  for(i=3;i<6;i++){
    square[i].classList.add("hidden");
  }
  assignColor(numSquares);
  pickColor();
  displayColor(pickedColor);
});

hard.addEventListener("click", function(){
  numSquares=6;
  this.classList.add("selected");
  easy.classList.remove("selected");
  message.textContent="";
  reset.textContent="Reset";
  h1.style.background="steelblue";
  for(i=3;i<6;i++){
    square[i].classList.remove("hidden");
  }
  assignColor(numSquares);
  pickColor();
  displayColor(pickedColor);
});
