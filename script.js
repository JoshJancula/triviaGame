	// wait for document to load
	$(document).ready(function() {


// contains the questions of the game

var questions = [

{
	question:"In season 5 who did the Armed Forces in Afganistan mistake a goat for?",
	choices: ["Stevie Nicks", "Sara Jessica Parker", "Madonna", "Mike krzyzewski"],
	correctNum: 1
},

{
	question: "What is Stans dads name?",
	choices: ["Gerald","Randy","Jimbo", "Philip"],
	correctNum: 1
},

{
	question: "In which season did Jennifer Anniston make a guest appearance?",
	choices: ["Season 8","-Season 4", "Season 12", "Season 3"],
	correctNum: 3
},

{
	question: "In season 12 what were the Peruvian flute bands protecting the world ",
	choices: ["Satan", "Giant Guinea Pigs", "ISIS", "The Gulgamacks"],
	correctNum: 1
},

{
	question: "Who is Mysterion?",
	choices: ["Kyle", "Jimmy", "Kenny", "Butters"],
	correctNum: 2
},

{
	question: "Who was \"Super Cereal\" about Man-Bear-Pig?",
	choices: ["Al Gore", "Ted Nugent", "Michael Jackson", "Officer Barbrady"],
	correctNum: 0
},


{
	question:"In season 8 which celebrity tried to buy Butters?",
	choices: ["Lindsey Lohan", "Brittany Spears", "Paris Hilton", "Angelina Jolie"],
	correctNum: 2
},

{
	question: "What was the name of the organization Chef left South Park to join?",
	choices: ["Antifa", "The Super Adventure Club", "The Marines", "The Peace Corp"],
	correctNum: 1
},

{
	question:"Who Replaced Principal Victoria?",
	choices: ["Principal Belding", "Principal Gambi", "PC Principal", "Principal Russel"],
	correctNum: 2
},

{
	question: "In season 3 which band guest starred for the Halloween special?",
	choices: ["Primus", "Korn", "Limp Bizkit", "Nickelback"],
	correctNum: 1
},


];




// variables
var questionIndex = 0;
var intervalId;
var correct = 0;
var wrong = 0;
var clockRunning = false;
// countDown

var countDown = {

	time: 10,
	reset: function() {
		countDown.time = 10;

    // reset to 10
    $("#clock").text("00:10");
},

start: function() {
    // DONE: Use setInterval to start the count here and set the clock to running.
    if (!clockRunning) {
    	intervalId = setInterval(countDown.count, 1000);
    	clockRunning = true;
    }
},
stop: function() {

    // DONE: Use clearInterval to stop the count here and set the clock to not be running.
    clearInterval(intervalId);
    clockRunning = false;
},

count: function() {

    // DONE: decrement time by 1, remember we cant use "this" here.
    countDown.time--;

    // DONE: Get the current time, pass that into the countDown.timeConverter function,
    //       and save the result in a variable.
    var converted = countDown.timeConverter(countDown.time);
    console.log(converted);

    // DONE: Use the variable we just created to show the converted time in the "display" div.
    $("#clock").text(converted);
    if (countDown.time <= 0) {
    	countDown.stop();
    	finishQuestion();
    }
},
timeConverter: function(t) {

	var minutes = Math.floor(t / 60);
	var seconds = t - (minutes * 60);

	if (seconds < 10) {
		seconds = "0" + seconds;
	}

	if (minutes === 0) {
		minutes = "00";
	}
	else if (minutes < 10) {
		minutes = "0" + minutes;
	}

	return minutes + ":" + seconds;
}
};

// functon to reset the game
function resetGame() {
questionIndex = 0; 
correct = 0;
wrong = 0;
clockRunning = false;
$("#start").show();
$("#currentQuestion").hide();
$(".buttonAnswers").hide();
$("#clock").show();



}

//start the game
resetGame();

$("#start").on("click", function(event){
	resetGame();
	// call ask next question function
	$("#start").hide();
	questionIndex =0;
	askNextQuestion();

});

// ask next question will see if there are more questions (index<questions.length)
function askNextQuestion() {
	// ask next question will then call askQuestion
	if (questionIndex < questions.length) {
		askQuestion(questions[questionIndex].question,
			questions[questionIndex].choices,
			questions[questionIndex].correctNum);
	}
// display results
}





function askQuestion(question, choices, correctNum) {
			// what button was pressed
			var buttonPressed = -1;
			// show me the question
			// set buttons to the answer choices
			$("#0").text(choices[0]);
			$("#1").text(choices[1]);
			$("#2").text(choices[2]);
			$("#3").text(choices[3]);
			$("#currentQuestion").text(question);

			$("#currentQuestion").show();
			$(".buttonAnswers").show();
			// ask question will load all choices and start timer
			countDown.reset();
			countDown.start();
		}


// when you click on an answer

$(".buttonAnswers").on("click", function(event){
	buttonPressed = this.id;
	countDown.stop();
	finishQuestion();

});

function finishQuestion() {
	if (buttonPressed == questions[questionIndex].correctNum) {
		correct++;
	} 
	else {
		wrong++;
	}
	// add 1 to the index
	questionIndex++;
	if (questionIndex < questions.length) {
		askNextQuestion();
	} else {
		// hide timer
		 $("#clock").hide();
		 // hide answers
		 $(".buttonAnswers").hide();
		// display results
		$("#currentQuestion").html("<h3>Total Correct: " + correct + "</h3>" +
			"<h3>Total Missed: " + wrong + "</h3>");
		$("#start").show();


	}

}

});






