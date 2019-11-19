// Set Math Game Variables
var num1;
var num2;
var sumAnswer;
var sumInput;
var randomNumber1;
var randomNumber2;
var result;
var games;
var gamesCount=0;
var score;
var counter=1;
var Mark;
var backSound = new Audio();
backSound.src = "sound/backSound.mp3";
var correct = new Audio();
correct.src = "sound/correct.mp3";
var wrong = new Audio();
wrong.src = "sound/wrong.mp3";
var input = document.getElementById("sumInput");


input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
     event.preventDefault();
     document.getElementById("pressButton").click();
    }
  });


//Game Start Function
function nextGame() {
    input.value = '';
    backSound.play();
    backSound.volume = 0.1;
    //Collect Div Sections to change
    num1 = document.getElementById("num1");
    num2 = document.getElementById("num2");
    sumAnswer = document.getElementById("sumAnswer");
    games = document.getElementById("games");
    score = document.getElementById("scoreTotal");
    Mark=document.getElementById("Mark");
    
    
    //Create two random numbers and Create a Multiplied Sum with them
    randomNumber1 = Math.floor((Math.random() *10) + 1);
    randomNumber2 = Math.floor((Math.random() *10) + 1);
    result = parseInt(randomNumber1) * parseInt(randomNumber2);

    //Display the Two Random numbers
    num1.innerHTML= randomNumber1;
    num2.innerHTML= randomNumber2;
    
    //Assign value to Answer display 
    sumAnswer.innerHTML="Answer";
    Mark.innerHTML="Result";
    gamesCount = gamesCount+1;

    games.innerHTML=gamesCount;
    
    
}

//
function sumGame(){
    sumInput = parseInt(document.getElementById("sumInput").value);
    
    
    if(result === sumInput){
        score.innerHTML=counter;
        counter = counter+1;
        Mark.innerHTML="Correct!";
        sumAnswer.innerHTML=result;
        correct.play();
        setTimeout(function(){nextGame();}, 3000);
        }
    else
    {
        Mark.innerHTML="More practice!";
        wrong.play();
    }
   
 }
