const QUESTIONS = [
{
	question: 'How many quarters are in a basketball game?',
	answers: ['1','2','3','4'],
	correctAnswer: 3
},
{
	question: 'What is the name of the governing body in the worlds top basketball league?',
	answers: ['NNL', 'MLB', 'NBA', 'NFL'],
	correctAnswer: 2
},
{
	question: 'In which country is basketball a major sport?',
	answers: ['Canada', 'USA', 'Germany', 'United Kingdom'],
	correctAnswer: 1
},
{
	question: 'What is it called when a player scores a point?',
	answers: ['Goal', 'Touchdown', 'Home Run', 'Basket'],
	correctAnswer: 3
},
{
	question: 'How many points is a shot worth when inside the oppositions semi-circle?',
	answers: ['1', '2', '3', '4'],
	correctAnswer: 1
},
{
	question: 'How many points are awarded for a score from outside the oppositions semi-circle?',
	answers: ['1', '2', '3', '4'],
	correctAnswer: 2
},
{
	question: 'When in possession of the ball, what must a player do?',
	answers: ['Stand still', 'Run with the ball', 'Bounce the ball while running', 'Pass to a player on the other team'],
	correctAnswer: 2
},
{
	question: 'What happens if a player fails to dribble while moving with the ball?',
	answers: ['Possession is given to the opposing team', 'Nothing', 'The player is sent back to his own end', 'The team must give up 2 points'],
	correctAnswer: 0
},
{
	question: 'How is a basketball game started?',
	answers: ['Kick-Off', 'The ball is bounced by the referee in between one player from each team', 'The ball is thrown up in the air by the referee in between one player from each team and they have to try and knock it to their team', 'Coin Flip'],
	correctAnswer: 2
},
{
	question: 'How many substitutions are each team allowed to make?',
	answers: ['Unlimited', '4', '5', '7'],
	correctAnswer: 2
},
{
	question: 'For how long does each team have allowed to stay in possession of the ball before they must shoot?',
	answers: ['12 seconds', '16 seconds', '24 seconds', '28 seconds'],
	correctAnswer: 2
},
{
	question: 'How many players are allowed on the court for each team?',
	answers: ['4', '5', '6', '7'],
	correctAnswer: 1
},
];
/*
const app = {
	page: "start",
	questions: QUESTIONS,
	score: 0,
	currentQuestion: 0
};

$(document).ready(appStart);

function appStart() {

	$('.intro-begin').on('click', beginQuiz);
	$('.questions').on('submit', function(event){
		event.preventDefault();
		let userAnswer = parseInt($("input[name='answer']:checked").val(), 10);
		evalAnswer(userAnswer);
		$(".feedback").show();
		$(".question-submit").hide();
		app.currentQuestion++;
	});
	$('.next-question').on('click', function(){
		if (app.currentQuestion >= app.questions.length){
			//$('.next-question').text("Results");
			resultPage();
			//$('.next-question').on('click', resultPage);
		}
		else {
			let tempQuestion = app.questions[app.currentQuestion];
			updateQuestion(tempQuestion);
			$('.feedback').hide();
			$(".question-submit").show();
		}
	}); 	
}
$('.restart-button').on('click', resetQuiz);

function beginQuiz() {

	$(".quiz").show();
	$('.intro-begin').hide();
	let tempQuestion = app.questions[app.currentQuestion];
	updateQuestion(tempQuestion);
}

function resetQuiz() {
	app.currentQuestion = 0;
	app.score = 0;
	updateQuestion(app.questions[app.currentQuestion]);
	$(".quiz").show();
	$('.intro-begin').hide();
	$('.results').hide();
	
}

function updateQuestion(questionObject) {

	$(".question-text").text(questionObject.question);
	$("label[for='answer-1']").text(questionObject.answers[0]);
	$("label[for='answer-2']").text(questionObject.answers[1]);
	$("label[for='answer-3']").text(questionObject.answers[2]);
	$("label[for='answer-4']").text(questionObject.answers[3]);
	$('input[type="radio"]').prop('checked', false);
	//console.log($('input[type="radio"]')[0].checked);
	$('.progress-tracker').text(`Question ${app.currentQuestion +1} of 12`);
	console.log(app.currentQuestion);
	$('.score-tracker').text(`Current Score: ${app.score} out of 12`);
}

function evalAnswer(userAnswer) {
	let currentQuestion = app.questions[app.currentQuestion];
	if (userAnswer === currentQuestion.correctAnswer) {
		$(".feedback-text").html("You are correct!");
		app.score++;
	}
	else {
		$(".feedback-text").html("Sorry, the correct answer is: " + currentQuestion.answers[currentQuestion.correctAnswer]);
	}
}

/*function resultPage() {
	//$('.score-tracker').text(`Congratulations! You scored ${(app.score)} out of 12!`);
	$('.restart-button').show();
	$('.quiz').hide();
	$('.result-text').text(`Congratulations! You scored ${(app.score)} out of 12!`)
	$('.results').show();
}

function resultPage() {
	//$('.score-tracker').text(`Congratulations! You scored ${(app.score)} out of 12!`);
	$('.restart-button').show();
	$('.quiz').hide();
	if (app.score <= 5){

			$('.result-text').text(`You scored only ${(app.score)} out of 12. Please study harder!`)
	}
	else if (app.score <=10){

			$('.result-text').text(`You scored ${(app.score)} out of 12. Not bad at all!`)
	}
	else {
		$('.result-text').text(`Congratulations! You scored ${(app.score)} out of 12! Great job!`)
	}
	
	$('.results').show();
}
*/
const APP = {
  currentQuestion: 10,
  page: 'start',
  questions: QUESTIONS,
  score: 0
};

const PAGES = {
	start: $("[data-page=start]"),
	question: $("[data-page=question"),
	feedback: $("[data-page=feedback]"),
	results: $("[data-page=results]")
};

function renderApp(pages) {
	Object.keys(pages).forEach(function(page){
		pages[page].hide();
	})

	pages[APP.page].show();


}


function advance() {
  APP.currentQuestion++;
}

function handleStartClick() {
  $('#js-intro-begin').on('click', function (e) {
    $('.quiz').show();
    $('.intro-begin').hide();
    updateQuestion();
  });
}

function handleFormSubmit() {
  $('.questions').on('submit', function(event) {
    event.preventDefault();
    let userAnswer = parseInt($('input[name="answer"]:checked').val(), 10);
    evalAnswer(userAnswer);
    $('.feedback').show();
    $('.question-submit').hide();
  });
}

function handleNextClick() {
  $('.next-question').on('click', function() {
    advance();
    if (APP.currentQuestion === APP.questions.length) {
      renderResult();
    } else {
      
      updateQuestion();
      $('.feedback').hide();
      $('.question-submit').show();
    }
  });
}
function handleRestartClick() {
  $('.restart-button').on('click', function() {
    resetQuiz();
  });
}

function resetQuiz() {
  APP.currentQuestion = 0;
  APP.score = 0;
  updateQuestion();
  $('.quiz').show();
  $('.intro-begin').hide();
  $('.results').hide();
  $('.feedback').hide();
  $('.question-submit').show();

}

function updateQuestion() {
  const questionObject = APP.questions[APP.currentQuestion];
  $('.question-text').text(questionObject.question);
  $('label[for="answer-1"]').text(questionObject.answers[0]);
  $('label[for="answer-2"]').text(questionObject.answers[1]);
  $('label[for="answer-3"]').text(questionObject.answers[2]);
  $('label[for="answer-4"]').text(questionObject.answers[3]);
  $('input[type="radio"]:checked').prop('checked', false);
  $('.progress-tracker').text(`Question ${APP.currentQuestion + 1} of 12`);
  console.log(APP.currentQuestion);
  $('.score-tracker').text(`Current Score: ${APP.score} out of 12`);
}

function evalAnswer(userAnswer) {
  let currentQuestion = APP.questions[APP.currentQuestion];
  if (userAnswer === currentQuestion.correctAnswer) {
    APP.score++;
    $('.feedback-text').html('You are correct!');
  } else {
    $('.feedback-text').html(
      'Sorry, the correct answer is: ' +
        currentQuestion.answers[currentQuestion.correctAnswer]
    );
  }
}

function renderResult() {
  //$('.score-tracker').text(`Congratulations! You scored ${(app.score)} out of 12!`);
  $('.restart-button').show();
  $('.quiz').hide();
  $('.result-text').text(`Congratulations! You scored ${APP.score} out of 12!`);
  $('.results').show();
}

function initApp() {
  handleStartClick();
  handleFormSubmit();
  handleNextClick();
  handleRestartClick();
  renderApp(PAGES);
}

$(initApp);
