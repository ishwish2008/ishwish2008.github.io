var numSquares = 6;
var colors = generateRandomColors(numSquares)
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var message = document.getElementById("message");
var h1 = document.querySelector("h1")
var resetButton = document.querySelector("#button")
var easyButton = document.querySelector("#easyBtn")
var hardButton = document.querySelector("#hardBtn")

easyButton.addEventListener("click", function(){
	easyButton.classList.add("selected");
	hardButton.classList.remove("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.display = colors[i]
		}
		else{
			squares[i].style.display = "none";
		}
    }
    colors = generateRandomColors(numSquares)
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0;i<squares.length; i++) {
	squares[i].style.backgroundColor=colors[i]
	}
	h1.style.backgroundColor = "#4682b4"
	message.textContent = ""
});

hardButton.addEventListener("click", function(){
	easyButton.classList.remove("selected")
	hardButton.classList.add("selected")
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
			squares[i].style.display = colors[i]
			squares[i].style.display = "block";
    }
    colors = generateRandomColors(numSquares)
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0;i<squares.length; i++) {
	squares[i].style.backgroundColor=colors[i]
	}
	h1.style.backgroundColor = "#4682b4"
	message.textContent = ""
})

resetButton.addEventListener("click", function(){
	colors = generateRandomColors(numSquares)
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0;i<squares.length; i++) {
	squares[i].style.backgroundColor=colors[i]
	}
	h1.style.backgroundColor = "#4682b4"
	message.textContent = ""
	this.textContent="New Colors"

});

colorDisplay.textContent = pickedColor
for (var i = 0;i<squares.length; i++) {
	squares[i].style.backgroundColor=colors[i]

	squares[i].addEventListener("click", function () {

		var clickedColor = this.style.backgroundColor

		if(clickedColor === pickedColor) {
			message.textContent = "Correct!";
			changeColors(pickedColor)
			h1.style.backgroundColor=pickedColor
			resetButton.textContent= "Play Again"

		}else{
			this.style.backgroundColor = "#232323"

			message.textContent="Wrong!";
			 };
	

	});
function changeColors(color){
	for (var i = 0;i<squares.length; i++){

			squares[i].style.backgroundColor = color;

			}

						}		

}

function pickColor() {
	var random = Math.floor(Math.random()*colors.length)
	return colors[random]
}

function generateRandomColors(num) {
	var arr = []

	for (var i = 0; i < num; i++) {
		arr.push(randomColor())
	}

	return arr;
}

function randomColor() {
	var r = Math.floor(Math.random() * 256)
	var g = Math.floor(Math.random() * 256)
	var b = Math.floor(Math.random() * 256)
	return "rgb(" + r + ", " + g +", " + b + ")"
};
