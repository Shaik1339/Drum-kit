$("button").click(function(){
    
    var num = $(this).attr("id");
    switch(num) {
        case "H" :
        var tom1=new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
        
        case "I" :
        var tom2=new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;
        
        case "J" :
        var tom3=new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;
        
        case "K" :
        var tom4=new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;
        
        case "L" :
        var crash=new Audio("sounds/crash.mp3");
        crash.play();
        break;
        
        case "M" :
        var kickbass=new Audio("sounds/kick-bass.mp3");
        kickbass.play();
        break;
        
        case "N" :
        var snare=new Audio("sounds/snare.mp3");
        snare.play();
        break;
        
        default:
        }
        $(".num").fadeout(100).fadeIn(100);
});


$(document).keypress(function(event){  
    switch(event.key) {
        case "h" :
        var tom1=new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
        
        case "i" :
        var tom2=new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;
        
        case "j" :
        var tom3=new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;
        
        case "k" :
        var tom4=new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;
        
        case "l" :
        var crash=new Audio("sounds/crash.mp3");
        crash.play();
        break;
        
        case "m" :
        var kickbass=new Audio("sounds/kick-bass.mp3");
        kickbass.play();
        break;
        
        case "n" :
        var snare=new Audio("sounds/snare.mp3");
        snare.play();
        break;
        
        default:
        }
        $(".item").fadeout(100).fadeIn(100);
})

