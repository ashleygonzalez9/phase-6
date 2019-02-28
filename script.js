// if you want to change something on a DIFFERENT element, you have to call it by name (it's "id")
// https://www.w3schools.com/jsref/met_document_getelementbyid.asp
	
// "el" stands for the "element" that was just clicked
a = document.getElementById("first");
b = document.getElementById("second");
c = document.getElementById("third");

function nextImage(el){
	if ( el.src.match("image/whitecolor.PNG")){
		el.src = "image/pinkcolor.PNG";
	} else if (el.src.match("image/pinkcolor.PNG")){
		el.src = "image/bluecolor.PNG";
	} else if (el.src.match("image/bluecolor.PNG")){
		el.src = "image/redcolor.PNG";
		} else if (el.src.match("image/redcolor.PNG")){
		el.src = "image/orangecolor.PNG";
			} else if (el.src.match("image/orangecolor.PNG")){
		el.src = "image/whitecolor.PNG";
	} else {
		el.src.match("image/whitecolor.PNG")
	}
}

function nextImage2(el){
	if ( el.src.match("image/whitecolor.PNG")){
		el.src = "image/pinkcolor.PNG";
	} else if (el.src.match("image/pinkcolor.PNG")){
		el.src = "image/bluecolor.PNG";
	} else if (el.src.match("image/bluecolor.PNG")){
		el.src = "image/redcolor.PNG";
		} else if (el.src.match("image/redcolor.PNG")){
		el.src = "image/orangecolor.PNG";
			} else if (el.src.match("image/orangecolor.PNG")){
		el.src = "image/whitecolor.PNG";
	} else {
		el.src.match("image/whitecolor.PNG")
	}
}
 
 
 function nextImage3(el){
	if ( el.src.match("image/whitecolor.PNG")){
		el.src = "image/pinkcolor.PNG";
	} else if (el.src.match("image/pinkcolor.PNG")){
		el.src = "image/bluecolor.PNG";
	} else if (el.src.match("image/bluecolor.PNG")){
		el.src = "image/redcolor.PNG";
		} else if (el.src.match("image/redcolor.PNG")){
		el.src = "image/orangecolor.PNG";
			} else if (el.src.match("image/orangecolor.PNG")){
		el.src = "image/whitecolor.PNG";
	} else {
		el.src.match("image/whitecolor.PNG")
	}
}
 
 
 function checkImages(el){
	if (a.src.match("image/pinkcolor.PNG") && b.src.match("image/bluecolor.PNG") && c.src.match("image/redcolor.PNG")){
		mySound.play();
		console.log("Correct!");
	
		a.classList.add("opaque");
		b.classList.add("opaque");
		c.classList.add("opaque");

	} else{
		
	}
}
 

