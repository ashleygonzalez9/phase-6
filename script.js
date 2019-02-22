// if you want to change something on a DIFFERENT element, you have to call it by name (it's "id")
// https://www.w3schools.com/jsref/met_document_getelementbyid.asp
	
// "el" stands for the "element" that was just clicked
function allOpaque(el){
	el.classList.add("opaque");
	document.getElementById("rams-picture").classList.remove("rams-opaque");
	document.getElementById("pats-picture").classList.remove("pats-opaque");
	
	
}


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
 
 

