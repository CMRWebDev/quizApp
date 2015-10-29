$(document).ready(function(){
	// Quiz quetions array
	var questions = [{
		question: "This copmanies stock has the largest market cap in the world.  What stock is it?",
		choices: ["Apple (AAPLE)", "ExxonMobil (XOM)", "Microsoft (MSFT)", "Walmart (WMT)"],
		correct: 0
		},
		{
		question: "Which compnay has the ticker Symbol FB?",
		choices: ["Ford Motors", "Foo Bar", "Twitter", "Facebook"],
		correct: 3
		},
		{
		question: "Google (Goog) recently switched there name to ________",
		choices: ["XYZ", "Infinity", "Alphabet", "ABC"],
		correct: 2
		},
		{
		question: "What is it called when a company makes there stock public?",
		choices: ["First Public Offer", "Public Offering", "Initial Public Offer", "Public Intial Offer"],
		correct: 2
		},
		{
		question: "Where is Wallstreet located?",
		choices: ["Chicago", "Boston", "San Fransisco", "New York"],
		correct: 3
	}]
	//Gobal Variables
	var numberCorrect = 0; // records number of questions answered correctly
	var currentQuestion = 0; // tracks question number
	var quiz = $(#quiz); //quiz div object
	var selection = []; // array containing user choices

	$("#questions_section").on("click", "#submit", function() {
		alert();
		currentQuestion++;
	});

	function nextQuestion() {
		if (currentQuestion < 5) {

		}

	}
});