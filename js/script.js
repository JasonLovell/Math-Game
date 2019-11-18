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
var counter=0;

//Game Start Function
function nextGame() {
    
    //Collect Div Sections to change
    num1 = document.getElementById("num1");
    num2 = document.getElementById("num2");
    sumAnswer = document.getElementById("sumAnswer");
    games = document.getElementById("games");
    score = document.getElementById("scoreTotal");
    
    //Create two random numbers and Create a Multiplied Sum with them
    randomNumber1 = Math.floor((Math.random() *10) + 1);
    randomNumber2 = Math.floor((Math.random() *10) + 1);
    result = parseInt(randomNumber1) * parseInt(randomNumber2);

    //Display the Two Random numbers
    num1.innerHTML= randomNumber1;
    num2.innerHTML= randomNumber2;
    
    //Assign value to Answer display 
    sumAnswer.innerHTML="Answer";
    document.getElementById("Mark").innerHTML="";
    gamesCount = gamesCount+1;

    games.innerHTML=gamesCount;
    score.innerHTML=counter;
    
}

//
function sumGame(){
    sumInput = parseInt(document.getElementById("sumInput").value);
    
    
    if(result === sumInput){
        document.getElementById("Mark").innerHTML="Smart Arse!";
        sumAnswer.innerHTML=result;
        counter = counter+1;
    }
    else
    {
        document.getElementById("Mark").innerHTML="Try Another Stupid!";
        
    }
    
 }
