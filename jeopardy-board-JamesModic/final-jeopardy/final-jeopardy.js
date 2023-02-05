// This line of code below is storing the array/object of place holder questions from the file placeholder questions in the variable placeholderQuestions
import placeholderQuestions from "../scripts/placeholder-questions.js";

console.log({ placeholderQuestions });

// Below I am declaring my variables which allow my js file to call on my HTML elements variables connect us to the html through the Id on the html and functions manipulate the html through the variables

let activePlayer = document.getElementById("active-player");
let p1score = document.getElementById("p1score");
let p2score = document.getElementById("p2score");
let guessButton = document.getElementById("guess-button");
let passButton = document.getElementById("button-pass");
let grid = document.getElementById("grid");
let qBox = document.getElementById("questionBox");

// Game starts out with buttons disabled
// activePlayer.textContent = "Player 1";
// guessButton.disabled = true;
// passButton.disabled = true;

// filter to select specific categories out of the placeholder questions array so that my function can call on a specific index of the array
let final = placeholderQuestions.filter(
	(question) => question.category == "Final"
);

let questionGrid1 = document.getElementById("01");
questionGrid1.addEventListener("click", (event) => {
	qBox.innerText = final[0].question;
	answer = final[0].answer;
	value = final[0].value;
	console.log(answer);
});
