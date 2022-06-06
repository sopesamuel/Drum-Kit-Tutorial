var numberOfButtons = document.querySelectorAll("button").length; 

for (var j = 0; j < numberOfButtons; j++) { 

  document.querySelectorAll("button")[j].addEventListener("click", function() { 

      var buttonStyle = this.innerHTML; 

      sound(buttonStyle); 

  });
} 
document.addEventListener("keypress", function(event) { 

  sound(event.key);
  });
  
function sound(key) { 
  switch (key) {
    case "S": 
      var sound1 = new Audio("kick-bass.mp3"); 
      sound1.play(); 
      break; 

    case "A": 
      var sound2 = new Audio("sounds_crash.mp3"); 
      sound2.play(); 
      break; 

    case "M": 
      var sound3 = new Audio("sounds_snare.mp3"); 
      sound3.play(); 
      break; 

    case "U": 
      var sound4 = new Audio("sounds_tom-1.mp3"); 
      sound4.play(); 
      break; 

    case "E": 
      var sound5 = new Audio("sounds_tom-2.mp3"); 
      sound5.play(); 
      break; 

    case "L": 
      var sound6 = new Audio("sounds_tom-3.mp3"); 
      sound6.play(); 
      break; 

    default: console.log(key); 
  } 
} 