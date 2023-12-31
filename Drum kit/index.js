var numberOfDrumButtons = document.querySelectorAll(".drum").length;

//detecting key press
for(var i=0; i<numberOfDrumButtons; i++){

    document.querySelectorAll(".drum") [i].addEventListener("click", function (){
   
        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);
         
        buttonAnimation(buttonInnerHTML);
        
    });
}

//detecting keyboard press
document.addEventListener("keypress", function(event){
    // alert("Key was pressed!");
    makeSound(event.key);
    buttonAnimation(event.key);
});
 
function makeSound(key){

    switch (key) {

        case "Q":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play(); 
        break;

        case "W":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play(); 
        break;

        case "E":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play(); 
        break;

        case "R":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play(); 
        break;

        case "T":
            var crash = new Audio("sounds/snare.mp3");
            crash.play(); 
        break;

        case "Y":
            var kick = new Audio("sounds/crash.mp3");
            kick.play(); 
        break;

        case "U":
            var snare = new Audio("sounds/kick-bass.mp3");
            snare.play(); 
        break;

        default:
            console.log(buttonInnerHtml);

    }
}

function buttonAnimation(currentKey){

    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },200);
}
 