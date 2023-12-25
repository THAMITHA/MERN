var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomNumberImage1 = "dice"+randomNumber1+".png";

var randomNumberSource1 = "images/"+randomNumberImage1;

var changeAttribute1 = document.querySelectorAll("img")[0].setAttribute("src",randomNumberSource1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomNumberImage2 = "dice"+randomNumber2+".png";

var randomImageSource2 = "images/"+randomNumberImage2;

var changeAttribute2 = document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "🇳🇵player1 wins the game";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML = "player2 wins the game🇳🇵";
}
else{
    document.querySelector("h1").innerHTML="Drawn!!!";
}
