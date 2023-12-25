let buttonLength = document.querySelectorAll("button").length; 
console.log(buttonLength);
for(let i=0;i<buttonLength;i++){
    document.querySelectorAll("button")[i].addEventListener("click",handleClick);
}


function handleClick(){
    alert("I got a clicked!!!");
}