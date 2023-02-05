// Do not change the import statement

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
activePlayer.textContent = "Player 1";
guessButton.disabled = true;
passButton.disabled = true;

// filter to select specific categories out of the placeholder questions array so that my function can call on a specific index of the array
let nature = placeholderQuestions.filter(
	(question) => question.category == "Nature"
);
let animals = placeholderQuestions.filter(
	(question) => question.category == "Animals"
);
let computers = placeholderQuestions.filter(
	(question) => question.category == "Computers"
);
let mythology = placeholderQuestions.filter(
	(question) => question.category == "Mythology"
);
let history = placeholderQuestions.filter(
	(question) => question.category == "History"
);
let general = placeholderQuestions.filter(
	(question) => question.category == "General"
);

// Function to display one of the javascript questions on my page
// TODO: Need to rewrite this 30 times, one for each question square

let questionGrid1 = document.getElementById("01");
questionGrid1.addEventListener("click", (event) => {
	qBox.innerText = nature[0].question;
	answer = nature[0].answer;
	value = nature[0].value;
	passButton.disabled = false;
	guessButton.disabled = false;
});

let questionGrid2 = document.getElementById("07");
questionGrid2.addEventListener("click", (event) => {
	qBox.innerText = nature[1].question;
	answer = nature[1].answer;
	value = nature[1].value;
	passButton.disabled = false;
	guessButton.disabled = false;
});

let questionGrid3 = document.getElementById("13");
questionGrid3.addEventListener("click", (event) => {
	qBox.innerText = nature[2].question;
	answer = nature[2].answer;
	value = nature[2].value;
	passButton.disabled = false;
	guessButton.disabled = false;
});

let questionGrid4 = document.getElementById("19");
questionGrid4.addEventListener("click", (event) => {
	qBox.innerText = nature[3].question;
	answer = nature[3].answer;
	value = nature[3].value;
	passButton.disabled = false;
	guessButton.disabled = false;
});

let questionGrid5 = document.getElementById("25");
questionGrid5.addEventListener("click", (event) => {
	qBox.innerText = nature[4].question;
	answer = nature[4].answer;
	value = nature[4].value;
	passButton.disabled = false;
	guessButton.disabled = false;
});

let questionGrid6 = document.getElementById("02");
questionGrid6.addEventListener("click", (event) => {
	qBox.innerText = animals[0].question;
	answer = animals[0].answer;
	value = animals[0].value;
	passButton.disabled = false;
	guessButton.disabled = false;
});

let questionGrid7 = document.getElementById("08");
questionGrid7.addEventListener("click", (event) => {
	qBox.innerText = animals[1].question;
	answer = animals[1].answer;
	value = animals[1].value;
	passButton.disabled = false;
	guessButton.disabled = false;
});

let questionGrid8 = document.getElementById("14");
questionGrid8.addEventListener("click", (event) => {
	qBox.innerText = animals[2].question;
	answer = animals[2].answer;
	value = animals[2].value;
	passButton.disabled = false;
	guessButton.disabled = false;
});

let questionGrid9 = document.getElementById("20");
questionGrid9.addEventListener("click", (event) => {
	qBox.innerText = animals[3].question;
	answer = animals[3].answer;
	value = animals[3].value;
	passButton.disabled = false;
	guessButton.disabled = false;
});

let questionGrid10 = document.getElementById("26");
questionGrid10.addEventListener("click", (event) => {
	qBox.innerText = animals[4].question;
	answer = animals[4].answer;
	value = animals[4].value;
	passButton.disabled = false;
	guessButton.disabled = false;
});

let questionGrid11 = document.getElementById("03");
questionGrid11.addEventListener("click", (event) => {
	qBox.innerText = computers[0].question;
	answer = computers[0].answer;
	value = computers[0].value;
	passButton.disabled = false;
	guessButton.disabled = false;
});

let questionGrid12 = document.getElementById("09");
questionGrid12.addEventListener("click", (event) => {
	qBox.innerText = computers[1].question;
	answer = computers[1].answer;
	value = computers[1].value;
	passButton.disabled = false;
	guessButton.disabled = false;
});

let questionGrid13 = document.getElementById("15");
questionGrid13.addEventListener("click", (event) => {
	qBox.innerText = computers[2].question;
	answer = computers[2].answer;
	value = computers[2].value;
	passButton.disabled = false;
	guessButton.disabled = false;
});

let questionGrid14 = document.getElementById("21");
questionGrid14.addEventListener("click", (event) => {
	qBox.innerText = computers[3].question;
	answer = computers[3].answer;
	value = computers[3].value;
	passButton.disabled = false;
	guessButton.disabled = false;
});

let questionGrid15 = document.getElementById("27");
questionGrid15.addEventListener("click", (event) => {
	qBox.innerText = computers[4].question;
	answer = computers[4].answer;
	value = computers[4].value;
	passButton.disabled = false;
	guessButton.disabled = false;
});

let questionGrid16 = document.getElementById("04");
questionGrid16.addEventListener("click", (event) => {
	qBox.innerText = mythology[0].question;
	answer = mythology[0].answer;
	value = mythology[0].value;
	passButton.disabled = false;
	guessButton.disabled = false;
});

let questionGrid17 = document.getElementById("10");
questionGrid17.addEventListener("click", (event) => {
	qBox.innerText = mythology[1].question;
	answer = mythology[1].answer;
	value = mythology[1].value;
	passButton.disabled = false;
	guessButton.disabled = false;
});

let questionGrid18 = document.getElementById("16");
questionGrid18.addEventListener("click", (event) => {
	qBox.innerText = mythology[2].question;
	answer = mythology[2].answer;
	value = mythology[2].value;
	passButton.disabled = false;
	guessButton.disabled = false;
});

let questionGrid19 = document.getElementById("22");
questionGrid19.addEventListener("click", (event) => {
	qBox.innerText = mythology[3].question;
	answer = mythology[3].answer;
	value = mythology[3].value;
	passButton.disabled = false;
	guessButton.disabled = false;
});

let questionGrid20 = document.getElementById("28");
questionGrid20.addEventListener("click", (event) => {
	qBox.innerText = mythology[4].question;
	answer = mythology[4].answer;
	value = mythology[4].value;
	passButton.disabled = false;
	guessButton.disabled = false;
});

let questionGrid21 = document.getElementById("05");
questionGrid21.addEventListener("click", (event) => {
	qBox.innerText = history[0].question;
	answer = history[0].answer;
	value = history[0].value;
	passButton.disabled = false;
	guessButton.disabled = false;
});

let questionGrid22 = document.getElementById("11");
questionGrid22.addEventListener("click", (event) => {
	qBox.innerText = history[1].question;
	answer = history[1].answer;
	value = history[1].value;
	passButton.disabled = false;
	guessButton.disabled = false;
});

let questionGrid23 = document.getElementById("17");
questionGrid23.addEventListener("click", (event) => {
	qBox.innerText = history[2].question;
	answer = history[2].answer;
	value = history[2].value;
	passButton.disabled = false;
	guessButton.disabled = false;
});

let questionGrid24 = document.getElementById("23");
questionGrid24.addEventListener("click", (event) => {
	qBox.innerText = history[3].question;
	answer = history[3].answer;
	value = history[3].value;
	passButton.disabled = false;
	guessButton.disabled = false;
});

let questionGrid25 = document.getElementById("29");
questionGrid25.addEventListener("click", (event) => {
	qBox.innerText = history[4].question;
	answer = history[4].answer;
	value = history[4].value;
	passButton.disabled = false;
	guessButton.disabled = false;
});

let questionGrid26 = document.getElementById("06");
questionGrid26.addEventListener("click", (event) => {
	qBox.innerText = general[0].question;
	answer = general[0].answer;
	value = general[0].value;
	passButton.disabled = false;
	guessButton.disabled = false;
});

let questionGrid27 = document.getElementById("12");
questionGrid27.addEventListener("click", (event) => {
	qBox.innerText = general[1].question;
	answer = general[1].answer;
	value = general[1].value;
	passButton.disabled = false;
	guessButton.disabled = false;
});

let questionGrid28 = document.getElementById("18");
questionGrid28.addEventListener("click", (event) => {
	qBox.innerText = general[2].question;
	answer = general[2].answer;
	value = general[2].value;
	passButton.disabled = false;
	guessButton.disabled = false;
});

let questionGrid29 = document.getElementById("24");
questionGrid29.addEventListener("click", (event) => {
	qBox.innerText = general[3].question;
	answer = general[3].answer;
	value = general[3].value;
	passButton.disabled = false;
	guessButton.disabled = false;
});

let questionGrid30 = document.getElementById("30");
questionGrid30.addEventListener("click", (event) => {
	qBox.innerText = general[3].question;
	answer = general[3].answer;
	value = general[3].value;
	passButton.disabled = false;
	guessButton.disabled = false;
});
