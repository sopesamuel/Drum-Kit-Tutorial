
var numberOfButtons = document.querySelectorAll("button").length; 

for (var j = 0; j < numberOfButtons; j++) { 

  document.querySelectorAll("button")[j] 

    .addEventListener("click", function() { 

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
      var sound1 = new Audio("boom.wav"); 
      sound1.play(); 
      break; 

    case "A": 
      var sound2 = new Audio("clap.wav"); 
      sound2.play(); 
      break; 

    case "M": 
      var sound3 = new Audio("hihat.wav"); 
      sound3.play(); 
      break; 

    case "U": 
      var sound4 = new Audio("kick.wav"); 
      sound4.play(); 
      break; 

    case "E": 
      var sound5 = new Audio("openhat.wav"); 
      sound5.play(); 
      break; 

    case "L": 
      var sound6 = new Audio("ride.wav"); 
      sound6.play(); 
      break; 

    default: console.log(key); 
  } 
} 