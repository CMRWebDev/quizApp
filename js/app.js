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
	$('#question_wrapper').on("click", "#submit", function() {
		verify_answer();
		currentQuestion++;
		console.log(currentQuestion);

		nextQuestion();
	});

	//refresh page on click try again button
	$('#question_wrapper').on("click", "#retry_button", function() {
		location.reload(true);
	});


	// Displays the question and choices on page
	function nextQuestion() {
		if (currentQuestion < 5) {
			$('.question').remove();
			$('answer_holder input').remove();
			$('answer_holder span').remove();
			if (currentQuestion < questions.length) {
				var newQuestion = '<span class="question">'+questions[currentQuestion].question+'</span><br><div id="answer_holder"><input type="radio" name="option" class="option" value="0"><span class="answer">'+questions[currentQuestion].choices[0]+'</span><br><input type="radio" name="option" class="option" value="1"><span class="answer">'+questions[currentQuestion].choices[1]+'</span><br><input type="radio" name="option" class="option" value="2"><span class="answer">'+questions[currentQuestion].choices[2]+'</span><br><input type="radio" name="option" class="option" value="3"><span class="answer">'+questions[currentQuestion].choices[3]+'</span><br></div><div id="button_holder"><input type="button" id="submit" value="Submit Answer"><span id="hint"></span><input type="button" id="retry_button" value="Try Again!"></div>';
				$("#question_wrapper").html(newQuestion);
			//if currentquestion === 5 then show user score 
			}
		}
		else if (currentQuestion == 5) {
			// hide questions and display user score
			$('#answer_holder').remove();
			var final_score= '<span id="final">You recieved a '+ numberCorrect+' out of 5';
			$('.question').html(final_score);
			// display trya again button and refresh the page whn clicked
		}
	}

	// verify if answer is correct and adds feedback
	function verify_answer() {
		var answer = $("input[type='radio']:checked").val();
		if (answer == questions[currentQuestion].correct) {
			$('<li class="feedback_positive"><i class="fa fa-thumbs-up"></li>').appendTo('#progress');
			numberCorrect++;
			console.log(numberCorrect);
		}
		else {
			$('<li class="feedback_negative"><i class="fa fa-thumbs-down"></li>').appendTo('#progress');
		}
	}

	// display user score at end of quiz when last question is answered
	
	
	// if  user dosnt click on radio dont do anything 
});




































