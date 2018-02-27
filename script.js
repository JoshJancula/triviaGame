	// wait for document to load
	$(document).ready(function() {


		// contains the questions of the game
		var questions = [

			{
				question: "In season 5 who did the Armed Forces in Afganistan mistake a goat for?",
				choices: ["Stevie Nicks", "Sara Jessica Parker", "Madonna", "Mike krzyzewski"],
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
			
				{
				question: "What convicted baby killer do the boys accidentally work toward freeing from prison?",
				choices: ["Hat McCullough", "Jeffrey Dahmer", "Luis Garavito", "OJ Simpson"],
				correctNum: 0,
				answerImage: "https://www.google.com/imgres?imgurl=http%3A%2F%2F1.images.southparkstudios.com%2Fimages%2Fshows%2Fsouthpark%2Fvertical_video%2Fimport%2Fseason_06%2Fsp_0609_12_v8.jpg%3Fwidth%3D300%26height%3D169%26crop%3Dtrue%26quality%3D0.8&imgrefurl=http%3A%2F%2Fsouthpark.cc.com%2Fclips%2F153568%2Fhat-mcculloch-is-free&docid=HKoktJN_q0wBLM&tbnid=icdTCEEb6z9x6M%3A&vet=10ahUKEwjypJHy7MbZAhXRpFkKHSGxBSMQMwg5KAQwBA..i&w=300&h=169&bih=694&biw=1129&q=free%20hat%20south%20park&ved=0ahUKEwjypJHy7MbZAhXRpFkKHSGxBSMQMwg5KAQwBA&iact=mrc&uact=8"
			},
				{
				question: "What is Stans dads occupation?",
				choices: ["Chef", "Geologist", "Pharmacist", "Unemployed"],
				correctNum: 1,
				answerImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnj7yCW7tHFb_wWYrM4ieKwqrk4mOaxlpAxt8wjhC2y1eiiSTC"
			},
				{
				question: "In the episode 'Scott Tenorman Must Die', what band does Scott Tenorman like?",
				choices: ["Primus", "Metallica", "RadioHead", "Nirvana"],
				correctNum: 2,
				answerImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsxTxpdEpQSpLzMmxWvyeKj4386qpOuWQiKUVxuFxqoOvvptu8xg"
			},
	{
				question: "In the episode 'Awesom-o', where do Butters and Cartman go?",
				choices: ["Canada", "Los Angeles", "Denver", "Mexico"],
				correctNum: 1,
				answerImage: "https://vignette.wikia.nocookie.net/southpark/images/9/94/A.w.e.s.o.m.-o.png/revision/latest?cb=20110512203057"
			},
				{
				question: "Which of these characters does not regularly wear a hat?",
				choices: ["Craig", "Cartman", "Wendy", "Token"],
				correctNum: 3,
				answerImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX8mz71auKNbQ9XFsvEzEoesmsneCiULP4koXG3PEbKNtZed-rgw"
			},
				{
				question: "What is the name of Kenny's brother?",
				choices: ["Earl", "Kevin", "Steve", "Todd"],
				correctNum: 1,
				answerImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcQXdhdFZ9q1NpZGcpGK5HQPv3cSJaVVGn86yYSwD9QuB0ABLoeg"
			},
		{
				question: "If you like fishsticks, what are you?",
				choices: ["Lame", "A Gay Fish", "A Loser", "Normal"],
				correctNum: 1,
				answerImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw-BYWMeed70RepAc7QZdAf3wYMfZgC1m_yjZkQKqNX6LWoyBJ"
			},

	{
				question: "Who sponsored Cartman's nascar?",
				choices: ["Pepsi", "Nambla", "Vagisil", "KFC"],
				correctNum: 2,
				answerImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8AuGZ-VifkjovDLYcxEAYuTSCwlIEfanupWMASSGjUv2PH9KbrQ"
			},
			
				{
				question: "Who sang at Cartman's AIDS awareness event?",
				choices: ["Elton John", "Lorde", "Mike Tyson", "Jimmy Buffet"],
				correctNum: 3,
				answerImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE2C9RHG9RPSd-saTdzSGiOAAxYlam5OEm9PBswYTqQoSJy_peUg"
			},
					{
				question: "What is Cartman's favorite place in the whole world?",
				choices: ["Casa Bonita", "Home", "Super Fun Time", "Pioneer Village"],
				correctNum: 0,
				answerImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSS-MGf_1HcvAY6v5fgnfYtS46I_h0Mjqqs5y1Imd69N3w1SNYdg"
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



		// shuffle the array
		function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}


		// functon to reset the game
		function resetGame() {
			shuffleArray(questions)
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
			if (questionIndex < 10) {
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
			if (questionIndex < 10) {
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
	