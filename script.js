var numberofdrumbuttons =document.querySelectorAll(".keys");

function makesound(key){
	switch(key){
		case "S";
		var S = new Audio("m.mp3");
      S.play();
      break;
	}
	  switch(key){
		case "A";
		var A = new Audio("o.mp3");
      A.play();
      break;
	  }
	  
	  switch(key){
		case "M";
		var M = new Audio("s.mp3");
      M.play();
      break;
	  }
	  
	  switch(key){
		case "U";
		var U = new Audio("z.mp3");
      U.play();
      break;
	  }
	  
	  switch(key){
		case "E";
		var E = new Audio("p.mp3");
      E.play();
      break;
	  }
	  
	  switch(key){
		case "L";
		var L = new Audio("e.mp3");
      L.play();
      break;
	  }

default: console.log(key);


	  }
	  