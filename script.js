	// wait for document to load
	$(document).ready(function() {


		// contains the questions of the game
		var questions = [

			{
				question: "In season 5 who did the Armed Forces in Afganistan mistake a goat for?",
				choices: ["Stevie Nicks", "Oprah Winfrey", "Madonna", "Mike krzyzewski"],
				correctNum: 0,
				answerImage: "http://www.southpark-online.nl/images/episodeclips/2536.jpg"
			},

			{
				question: "What is Stans dads name?",
				choices: ["Gerald", "Randy", "Jimbo", "Philip"],
				correctNum: 1,
				answerImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnj7yCW7tHFb_wWYrM4ieKwqrk4mOaxlpAxt8wjhC2y1eiiSTC"
			},

			{
				question: "In which season did Jennifer Anniston make a guest appearance?",
				choices: ["Season 8", "Season 4", "Season 12", "Season 3"],
				correctNum: 3,
				answerImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIujx9kTOyXYwhYgmvMHnv0sKZTLP9cpvQZ8mKJZ4Ucp9eUBVth6DAOxXv"
			},

			{
				question: "In season 12 what were the Peruvian flute bands protecting the world from?",
				choices: ["Satan", "Giant Guinea Pigs", "ISIS", "The Gulgamacks"],
				correctNum: 1,
				answerImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF2LXQOpxSZAVhdNcVgCQ6hn02DWoVvtNJlrjpsG0lBg41kclFkw"
			},

			{
				question: "Who is Mysterion?",
				choices: ["Kyle", "Jimmy", "Kenny", "Butters"],
				correctNum: 2,
				answerImage: "https://vignette.wikia.nocookie.net/spsot/images/5/5b/Mysterion_tfbw.png/revision/latest?cb=20171020201046"
			},

			{
				question: "Who was \"Super Cereal\" about Man-Bear-Pig?",
				choices: ["Al Gore", "Ted Nugent", "Michael Jackson", "Officer Barbrady"],
				correctNum: 0,
				answerImage: "http://4.images.southparkstudios.com/blogs/southparkstudios.com/files/2014/07/1006-half-bear.jpg?quality=0.8"
			},


			{
				question: "In season 8 which celebrity tried to buy Butters?",
				choices: ["Lindsey Lohan", "Brittany Spears", "Paris Hilton", "Angelina Jolie"],
				correctNum: 2,
				answerImage: "https://vignette.wikia.nocookie.net/villains/images/9/96/Chi-parishilton-southpark.jpg/revision/latest?cb=20141230200947"
			},

			{
				question: "What was the name of the organization Chef left South Park to join?",
				choices: ["Antifa", "The Super Adventure Club", "The Marines", "The Peace Corp"],
				correctNum: 1,
				answerImage: "https://vignette.wikia.nocookie.net/villains/images/4/40/The_Super_Adventure_Club.jpg/revision/latest?cb=20131009164645"
			},

			{
				question: "Who Replaced Principal Victoria in season 19?",
				choices: ["Principal Belding", "Principal Gambi", "PC Principal", "Principal Russel"],
				correctNum: 2,
				answerImage: "https://vignette.wikia.nocookie.net/southpark/images/3/3e/Pc-principal.png/revision/latest?cb=20171221010050"
			},

			{
				question: "In season 3 which band guest starred for the Halloween special?",
				choices: ["Primus", "Korn", "Limp Bizkit", "Nickelback"],
				correctNum: 1,
				answerImage: "https://vignette.wikia.nocookie.net/southpark/images/7/78/Korn.png/revision/latest?cb=20161209151611"
			},


		];


		// variables
		var questionIndex = 0;
		var intervalId;
		var correct = 0;
		var wrong = 0;
		var clockRunning = false;
		var buttonPressed;

		// countDown
		var countDown = {
			time: 10, // start at 10
			reset: function() { // always reset to 10
				countDown.time = 10;
				// set display to 10
				$("#clock").text("10");
			},

			start: function() {
				if (!clockRunning) { // set to decrement to 1 second
					intervalId = setInterval(countDown.count, 1000);
					clockRunning = true; // clock is now running
				}
			},
			stop: function() {
				clearInterval(intervalId); // clear current
				clockRunning = false; // clock is not running
			},

			count: function() {
				// subtract 1 from current count
				countDown.time--;
				// get the newCount
				var newCount = countDown.time;
				// update the display and if we are out of time call finishQuestion
				$("#clock").text(newCount);
				if (countDown.time <= 0) {
					countDown.stop();
					finishQuestion();
				}
			},

		};


		// functon to reset the game
		function resetGame() {
			questionIndex = 0;
			correct = 0;
			wrong = 0;
			clockRunning = false;
			$("#start").show();
			$(".buttonAnswers").hide();
			$("#clock").show();
		}


		// when you click on the button to start the game
		$("#start").on("click", function(event) {
			resetGame(); // call reset function which initializes the game
			$("#start").hide(); // hide start button
			questionIndex = 0; // start at first question
			askNextQuestion(); // call function to start asking questions

		});

		// ask next question will see if there are more questions 
		function askNextQuestion() {
			// ask next question will then call askQuestion
			if (questionIndex < questions.length) {
				askQuestion(questions[questionIndex].question,
					questions[questionIndex].choices,
					questions[questionIndex].correctNum);
			}
		}

		// askQuestion function asks question and resets timer
		function askQuestion(question, choices, correctNum) {
			$("#clock").show();

			// set buttons id to something not defined
			var buttonPressed = -1;
			// set buttons to the answer choices
			$("#0").text(choices[0]);
			$("#1").text(choices[1]);
			$("#2").text(choices[2]);
			$("#3").text(choices[3]);
			// show me the question
			$("#currentQuestion").text(question);
			$("#currentQuestion").show();
			$(".buttonAnswers").show();
			// start timer
			countDown.reset();
			countDown.start();
		}


		// when you click on an answer
		$(".buttonAnswers").on("click", function(event) {
			buttonPressed = this.id; // which button was pressed
			countDown.stop(); // stop the clock
			finishQuestion(); // call finishQuestion function

		});
		
		
		// function to show the correct answer
		function wasCorrect() {
				$(".buttonAnswers").hide();
				$("#clock").hide();
				$("#currentQuestion").html("<h3> Correct!</h3>" + "<br>" +
					"<img src=" + questions[questionIndex].answerImage + " class='answer'>");
		}
		
		function wasWrong(){
				$(".buttonAnswers").hide();
				$("#clock").hide();
				$("#currentQuestion").html("<h3>Wrong!</h3>" + "<h5>The correct answer is " + "<br>" +
				questions[questionIndex].choices[questions[questionIndex].correctNum] + "</h5>" +
					"<img src=" + questions[questionIndex].answerImage + " class='answer'>"
				
				);
		}
		
			function outOfTime(){
				$("#clock").hide();
				$(".buttonAnswers").hide();
				$("#currentQuestion").html("<h3>You Are Out Of Time!</h3>" + "<h5>The correct answer is " + "<br>" +
				questions[questionIndex].choices[questions[questionIndex].correctNum] + "</h5>" +
						"<img src=" + questions[questionIndex].answerImage + " class='answer'>"
				);
		}


		// function to finish the current question
		function finishQuestion() { 
			// if the user got it right...
			if (buttonPressed == questions[questionIndex].correctNum) {
				correct++;
				// tell them they got it right
				wasCorrect();
			}
			else if (countDown.time > 0) {// if they got it wrong
				wrong++; 
				wasWrong();
			
				} 
				else { // if they were out of time
					wrong++
					outOfTime();
					
				}
			
			// add 1 to the index
			questionIndex++; // if we aren't out of questions yet
			if (questionIndex < questions.length) {
					setTimeout(function(){
						askNextQuestion();
						buttonPressed = -1;
					}, 2000);
			}
			else {
				setTimeout(function() {
						// hide timer
				$("#clock").hide();
				// hide answers
				$(".buttonAnswers").hide();
				// display results
				$("#currentQuestion").html("<h3>Total Correct: " + correct + "</h3>" +
					"<h3>Total Missed: " + wrong + "</h3>");
				$("#start").show();


				}, 2000);
			
			}

		}

		//start the game
		resetGame();

	});
	