var numSquares = 6;
var color = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = colorPick();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1Change = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeBtns = document.querySelectorAll(".modeBtns");

colorDisplay.textContent = pickedColor;


// easyButton.addEventListener("click", function(){
// 	resetButton.textContent = "New Colors";
// 	messageDisplay.textContent = "";
// 	easyButton.classList.add("selected");
// 	hardButton.classList.remove("selected");
// 	numSquares = 3;
// 	color = generateRandomColors(numSquares);
// 	pickedColor = colorPick();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i = 0;i<squares.length;i++){
// 		if(color[i] != null){
// 			squares[i].style.background = color[i];
// 		}else{
// 			squares[i].style.display = "none";
// 		}
// 	}
// });

for(var i =0;i < modeBtns.length; i++){
	modeBtns[i].addEventListener("click", function() {
		modeBtns[0].classList.remove("selected");
		modeBtns[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
		reset();
		resetButton.textContent = "New Colors";
		if(this.textContent === "Easy"){
	for(var i = 0;i<squares.length;i++){
		if(color[i] != null){
			squares[i].style.background = color[i];
		}else{
			squares[i].style.display = "none";
		}
		}		
	}else{
	for(var i = 0;i<squares.length;i++){
			squares[i].style.background = color[i];
			squares[i].style.display = "block";
	    }	
	}

	});
}

function reset(){
	if(this.textContent === "Play Again"){
		this.textContent = "New Colors"
	}

	messageDisplay.textContent = "";
	color = generateRandomColors(numSquares);
	pickedColor = colorPick();
	colorDisplay.textContent = pickedColor;
}

// hardButton.addEventListener("click", function(){
// 	resetButton.textContent = "New Colors";
// 	messageDisplay.textContent = "";
// 	hardButton.classList.add("selected");
// 	easyButton.classList.remove("selected");
// 	numSquares = 6;
// 	color = generateRandomColors(numSquares);
// 	pickedColor = colorPick();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i = 0;i<squares.length;i++){
// 			squares[i].style.background = color[i];
// 			squares[i].style.display = "block";
// 	}
// });

for(var i = 0; i < color.length; i++){
	squares[i].style.background = color[i];

	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.background;
		if(clickedColor === pickedColor){
			resetButton.textContent = "Play Again";
			messageDisplay.textContent = "Correct";
			changeColor(pickedColor);
			h1Change.style.background = pickedColor;
		}else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}


resetButton.addEventListener("click", function(){
	if(this.textContent === "Play Again"){
		this.textContent = "New Colors"
	}

	messageDisplay.textContent = "";
	color = generateRandomColors(numSquares);
	pickedColor = colorPick();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < color.length; i++){
	squares[i].style.background = color[i];
	}
	h1Change.style.background = "steelblue";

});


function changeColor(colour){
	for(var i = 0; i< color.length;i++){
			squares[i].style.background = colour;
	}
}


function colorPick(){
	var number = Math.floor(Math.random() * color.length);
	return color[number];
}


function generateRandomColors(numberOfColors){
	var colorArray = [];
	for(i = 1;i <= numberOfColors;i++){
	var c1 = Math.floor(Math.random() * 256);
	var c2 = Math.floor(Math.random() * 256);
	var c3 = Math.floor(Math.random() * 256);
	colorArray[i-1] = "rgb"+"("+c1+", "+c2+", "+c3+")";	
	}
	return colorArray;
}

