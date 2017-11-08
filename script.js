	// wait for document to load
	$(document).ready(function() {




var intervalId;
var correct = 0;
var wrong = 0;
var clockRunning = false;
// timer
var timer = {

  time: 10,
  
  reset: function() {

    timer.time = 0;
    

    // DONE: Change the "display" div to "00:00."
    $("#display").text("10");

  },

  start: function() {

    // DONE: Use setInterval to start the count here and set the clock to running.
    if (!clockRunning) {
        intervalId = setInterval(timer.count, 1000);
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
    timer.time--;

    // DONE: Get the current time, pass that into the timer.timeConverter function,
    //       and save the result in a variable.
    var converted = timer.timeConverter(timer.time);
    console.log(converted);

    // DONE: Use the variable we just created to show the converted time in the "display" div.
    $("#clock").text(converted);
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

$("#start").show();
$("#currentQuestion").hide();
$(".buttonAnswers").hide();

$(".buttonAnswers").on("click", function(event){
console.log(event.currentTarget.id);
});





		function askQuestion(question, choices, correctNum) {
			// start the timer for this question

			// set buttons to the answer choices
			$("#0").text(choices[0]);
			$("#1").text(choices[1]);
			$("#2").text(choices[2]);
			$("#3").text(choices[3]);
		
				// Hide all guess class items
				$(".guess").hide(); 
				//this gets you one of the questions
				$("#currentQuestion").text(question);
				for(var i = 0; i < choices.length+1; i++) {
			//Go thru and show the buttons that we need for this question
			var buttonID = "#button" + i;
			$(buttonID).show();
			// tag the radio buttons 1 for true, 0 for false;
			// if you click on the correct number assign that answer a value of 1
			console.log(i, correctNum);
			if (i == correctNum) {
				$("#buttonID").text("1");
			}
			 // otherwise assign it a value of 0
			 else {
			 $("#buttonID").text("0");
			 }
		// this shows the answer choices that goes with the radio buttons
		var itemID = "#choiceP" + i;
		$(itemID).text(choices[i]);
		$(itemID).show();

	}
}



// if you picked the correct answer or not
$(".subAnswer").on("click", function() {
			// value of the answer you pick
			var pick = this.value;
			// 1 means its the correct answer change correct++
			if (pick == 1) {
				correct++;
				alert("submit you got it right");
			}
			 // change wrong++
			 else {
			 	wrong++;
			 	alert("you got it wrong");
			 }
			});


// call questions using the function we created
askQuestion("What is Stans dads name?", ["Gerald","Randy","Jimbo", "Philip"], 1);
// askQuestion("In which season did Jennifer Anniston make a guest appearance?", ["Season 8","-Season 4", "Season 12", "Season 3"], 3);
// askQuestion("In season 12 what were the Peruvian flute bands protecting the world ", ["Satan", "Giant Guinea Pigs", "ISIS", "The Gulgamacks"], 1)
// askQuestion("Who is Mysterion?", ["Kyle", "Jimmy", "Kenny", "Butters"], 2);
// askQuestion("Who was \"Super Cereal\" about Man-Bear-Pig?", ["Al Gore", "Ted Nugent", "Michael Jackson", "Officer Barbrady"], 0);
// askQuestion("In season 8 which celebrity tried to buy Butters?", ["Lindsey Lohan", "Brittany Spears", "Paris Hilton", "Angelina Jolie"], 2);
// askQuestion("What was the name of the organization Chef left South Park to join?", ["Antifa", "The Super Adventure Club", "The Marines", "The Peace Corp"], 1);
// askQuestion("Who Replaced Principal Victoria?", ["Principal Belding", "Principal Gambi", "PC Principal", "Principal Russel"], 2);
// askQuestion("In season 3 which band guest starred for the Halloween special?", ["Primus", "Korn", "Limp Bizkit", "Nickelback"], 1);
// askQuestion("In season 5 who did the Armed Forces in Afganistan mistake a goat for?", ["Stevie Nicks", "Sara Jessica Parker", "Madonna", "Mike krzyzewski"], 1);




});




