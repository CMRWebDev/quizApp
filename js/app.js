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
	}];
	//Gobal Variables
	var numberCorrect = 0; // records number of questions answered correctly
	var currentQuestion = 0; // tracks question number
	var quiz = $("#quiz"); //quiz div object
	var selections = [];
	 // array containing user choices

	// Display intinial Questiion
	nextQuestion();

	//click handler for submit button
	$("#questions_section").on("click", "#submit", function() {
		if (isNaN(selections[currentQuestion])) {
			alert('Please make a choice!');
		} 
		else {
			currentQuestion++;
			nextQuestion();
		}
	});

	function nextQuestion() {
		
		$('.question').remove();
		$('answer_holder input').remove();
		$('answer_holder span').remove();
		if (currentQuestion < questions.length) {
			$('<span class="question"</span>').appendTo('#quiz').html(questions[currentQuestion].qestion)
			$('<input type="radio" name="option" class="option" value="0">').appendTo('#answer_holder').html(questions[currentQuestion].choices[0]);
			$('<input type="radio" name="option" class="option" value="1">').appendTo('#answer_holder').html(questions[currentQuestion].choices[1]);
			$('<input type="radio" name="option" class="option" value="2">').appendTo('#answer_holder').html(questions[currentQuestion].choices[2]);
			$('<input type="radio" name="option" class="option" value="3">').appendTo('#answer_holder').html(questions[currentQuestion].choices[3]);

			

			//document.getElementIdBy('question').innerHTML = questions[0].question
		}

	}
});




