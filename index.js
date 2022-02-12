var a = Math.random();
var b = Math.random();
a = a*6;
b = b*6;
a=Math.floor(a)+1;
b=Math.floor(b)+1;

if(a===1){
    document.querySelector("#first").setAttribute("src", "images/dice1.png");
}

else if(a===2){
    document.querySelector("#first").setAttribute("src", "images/dice2.png");
}

else if(a===3){
    document.querySelector("#first").setAttribute("src", "images/dice3.png");
}

else if(a===4){
    document.querySelector("#first").setAttribute("src", "images/dice4.png");
}

else if(a===5){
    document.querySelector("#first").setAttribute("src", "images/dice5.png");
}

else if(a==6) {
    document.querySelector("#first").setAttribute("src", "images/dice6.png");
}

if(b===1){
    document.querySelector("#second").setAttribute("src", "images/dice1.png");
}

else if(b===2){
    document.querySelector("#second").setAttribute("src", "images/dice2.png");
}

else if(b===3){
    document.querySelector("#second").setAttribute("src", "images/dice3.png");
}

else if(b===4){
    document.querySelector("#second").setAttribute("src", "images/dice4.png");
}

else if(b===5){
    document.querySelector("#second").setAttribute("src", "images/dice5.png");
}

else if(a==6) {
    document.querySelector("#second").setAttribute("src", "images/dice6.png");
}

if(a>b){
    document.querySelector("h1").innerHTML = "Player 1 Wins !!";
}

else if(b>a){
    document.querySelector("h1").innerHTML = "Player 2 Wins !!";
}

else if(a===b){
    document.querySelector("h1").innerHTML = "Draw!";
}