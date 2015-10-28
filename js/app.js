$(document).ready(function(){
	// Quiz quetions array
	var questions = [{
		question: "This copmanies stock has the largest market cap in the world.  What stock is it?",
		choices: ["Apple (AAPLE)", "ExxonMobil (XOM)", "Microsoft (MSFT)", "Walmart (WMT)"],
		qNum: 0,
		correct: 0
		},
		{
		question: "Which compnay has the ticker Symbol FB?",
		choices: ["Ford Motors", "Foo Bar", "Twitter", "Facebook"],
		qNum: 1,
		correct: 3
		},
		{
		question: "Google (Goog) recently switched there name to ________",
		choices: ["XYZ", "Infinity", "Alphabet", "ABC"],
		qNum: 2,
		correct: 2
		},
		{
		question: "What is it called when a company makes there stock public?",
		choices: ["First Public Offer", "Public Offering", "Initial Public Offer", "Public Intial Offer"],
		qNum: 3,
		correct: 2
		},
		{
		question: "Where is Wallstreet located?",
		choices: ["Chicago", "Boston", "San Fransisco", "New York"],
		qNum: 4,
		correct: 3
	}]
	//Gobal Variables
	var numberCorrect = 0;
	var currentQuestion = 0;

	$("#questions_section").on("click", "#submit", function() {
		alert();
		currentQuestion++;
	});
});