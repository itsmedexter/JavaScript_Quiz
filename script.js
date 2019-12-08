/* copied javascript
no jquery


var startButton = document.getElementById("start-btn");
var questionContainerElement = document.getElementById("question-container");
var quesionElement = document.getElementById("question");
var answerButtonsElement = document.getElementById("answer-buttons");

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener('click', startGame);

function startGame() {
    console.log("Started");
    startButton.classList.add("hide");
    questionContainerElement.classList.remove("hide")
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove("hide");
    setNextQuestion()
}



function setNextQuestion() {
resetState()
 showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question){
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        var button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
    });
}

function resetState() {
    clearStatusClass(document.body);
    nextButton.classList.add("hide");
    while (answerButtonsElement.firstChild){
    answerButtonsElement.removeChild;(answerButtonsElement.firstChild);
    }
}

function selectAnswer() {
    var selectedButton = e.target;
    var correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1){
        nextButton.classList.remove("hide");
    } else {
        startButton.innerText = "Restart";
        startButton.classList.remove("hide");
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add("correct");
    }
    else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element) {
    element.classList.remove("correct");
    element.classList.remove("wrong");
}

var questions = [
    {
      question: "Commonly used data types DO NOT include:",
      answers: [{text: "strings", correct: false},
                {text: "booleans", correct: false},
                {text: "alerts", correct: true},
                {text: "numbers", correct: false}],
      answers: "alerts"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answers: "parentheses"
    }
];








/*
















var windowTimeout = setTimeout(function() {
    document.textContent(<h1>Coding Quiz Challenge</h1><br>
    <p>text goes here</p>);
   }, 1000);

   //  Start on click.
   $("#start").on("click", function() {
     //  Set the button alert's timeout to run three seconds after the function's called.
     delayButtonAlert = setTimeout(function() {
       alert("Alert #2: Called 3 seconds after the start button is clicked.");
     }, 3000);
   });

     //  Clear the timeout, and stop the window alert.
     clearTimeout(windowTimeout);
   });











var playButton = document.querySelector("#play");
var secondsDisplay = document.querySelector("#seconds");


function startTimer() {
    setTime();
  
    interval = setInterval(function() {
      secondsElapsed++;
      renderTime();
    }, 1000);
  }

  function getFormattedSeconds() {
    var secondsLeft = (totalSeconds - secondsElapsed) % 60;
  
    var formattedSeconds;
  
    if (secondsLeft < 10) {
      formattedSeconds = "0" + secondsLeft;
    } else {
      formattedSeconds = secondsLeft;
    }
  
    return formattedSeconds;
  }





  playButton.addEventListener("click", startTimer);








//  Set our number counter to 100.
    var number = 100;

    //  Variable that will hold our interval ID when we execute
    //  the "run" function
    var intervalId;

    //  When the stop button gets clicked, run the stop function.
    $("#stop").on("click", stop);

    //  When the resume button gets clicked, execute the run function.
    $("#resume").on("click", run);

    //  The run function sets an interval
    //  that runs the decrement function once a second.
    //  *****BUG FIX******** 
    //  Clearing the intervalId prior to setting our new intervalId will not allow multiple instances.
    function run() {
      clearInterval(intervalId);
      intervalId = setInterval(decrement, 1000);
    }

    //  The decrement function.
    function decrement() {

      //  Decrease number by one.
      number--;

      //  Show the number in the #show-number tag.
      $("#show-number").html("<h2>" + number + "</h2>");


      //  Once number hits zero...
      if (number === 0) {

        //  ...run the stop function.
        stop();

        //  Alert the user that time is up.
        alert("Time Up!");
      }
    }

    //  The stop function
    function stop() {

      //  Clears our intervalId
      //  We just pass the name of the interval
      //  to the clearInterval function.
      clearInterval(intervalId);
    }

    //  Execute the run function.
    run();
*/