//define variables in global scope for application 
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var startButton = document.getElementById('startBtn');
var landingDiv = document.getElementById('landingpage');
var quizDiv = document.getElementById('quiz');
var questionText = document.getElementById('questionText');
var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var button3 = document.getElementById('button3');
var button4 = document.getElementById('button4');
var indexNum  = 0;
var score = 0;

function displayIndex () {
	questionText.textContent = questions[indexNum].title
	button1.textContent = questions[indexNum].choices[0];
	button2.textContent = questions[indexNum].choices[1];
	button3.textContent = questions[indexNum].choices[2];
	button4.textContent = questions[indexNum].choices[3];
};



startButton.addEventListener("click", function(){
	landingDiv.style.display= "none";
	quizDiv.style.display = "block"
	displayIndex();
})

button1.addEventListener("click", function(){
	indexNum++;
	displayIndex();
});

button2.addEventListener("click", function(){
	indexNum++;
	displayIndex();
});

button3.addEventListener("click", function(){
	indexNum++;
	displayIndex();
});

button4.addEventListener("click", function(){
	indexNum++;
	displayIndex();
});



//create button listener adds 1 to index num
//change questions to arrays 
//put if statement in add event listener for buttons