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
  qBox.innerText = nature[5].question;
  answer = nature[5].answer;
  value = nature[5].value;
  passButton.disabled = false;
  guessButton.disabled = false;
});

let questionGrid2 = document.getElementById("07");
questionGrid2.addEventListener("click", (event) => {
  qBox.innerText = nature[6].question;
  answer = nature[6].answer;
  value = nature[6].value;
  passButton.disabled = false;
  guessButton.disabled = false;
});

let questionGrid3 = document.getElementById("13");
questionGrid3.addEventListener("click", (event) => {
  qBox.innerText = nature[7].question;
  answer = nature[7].answer;
  value = nature[7].value;
  passButton.disabled = false;
  guessButton.disabled = false;
});

let questionGrid4 = document.getElementById("19");
questionGrid4.addEventListener("click", (event) => {
  qBox.innerText = nature[8].question;
  answer = nature[8].answer;
  value = nature[8].value;
  passButton.disabled = false;
  guessButton.disabled = false;
});

let questionGrid5 = document.getElementById("25");
questionGrid5.addEventListener("click", (event) => {
  qBox.innerText = nature[9].question;
  answer = nature[9].answer;
  value = nature[9].value;
  passButton.disabled = false;
  guessButton.disabled = false;
});

let questionGrid6 = document.getElementById("02");
questionGrid6.addEventListener("click", (event) => {
  qBox.innerText = animals[5].question;
  answer = animals[5].answer;
  value = animals[5].value;
  passButton.disabled = false;
  guessButton.disabled = false;
});

let questionGrid7 = document.getElementById("08");
questionGrid7.addEventListener("click", (event) => {
  qBox.innerText = animals[6].question;
  answer = animals[6].answer;
  value = animals[6].value;
  passButton.disabled = false;
  guessButton.disabled = false;
});

let questionGrid8 = document.getElementById("14");
questionGrid8.addEventListener("click", (event) => {
  qBox.innerText = animals[7].question;
  answer = animals[7].answer;
  value = animals[7].value;
  passButton.disabled = false;
  guessButton.disabled = false;
});

let questionGrid9 = document.getElementById("20");
questionGrid9.addEventListener("click", (event) => {
  qBox.innerText = animals[8].question;
  answer = animals[8].answer;
  value = animals[8].value;
  passButton.disabled = false;
  guessButton.disabled = false;
});

let questionGrid10 = document.getElementById("26");
questionGrid10.addEventListener("click", (event) => {
  qBox.innerText = animals[9].question;
  answer = animals[9].answer;
  value = animals[9].value;
  passButton.disabled = false;
  guessButton.disabled = false;
});

let questionGrid11 = document.getElementById("03");
questionGrid11.addEventListener("click", (event) => {
  qBox.innerText = computers[5].question;
  answer = computers[5].answer;
  value = computers[5].value;
  passButton.disabled = false;
  guessButton.disabled = false;
});

let questionGrid12 = document.getElementById("09");
questionGrid12.addEventListener("click", (event) => {
  qBox.innerText = computers[6].question;
  answer = computers[6].answer;
  value = computers[6].value;
  passButton.disabled = false;
  guessButton.disabled = false;
});

let questionGrid13 = document.getElementById("15");
questionGrid13.addEventListener("click", (event) => {
  qBox.innerText = computers[7].question;
  answer = computers[7].answer;
  value = computers[7].value;
  passButton.disabled = false;
  guessButton.disabled = false;
});

let questionGrid14 = document.getElementById("21");
questionGrid14.addEventListener("click", (event) => {
  qBox.innerText = computers[8].question;
  answer = computers[8].answer;
  value = computers[8].value;
  passButton.disabled = false;
  guessButton.disabled = false;
});

let questionGrid15 = document.getElementById("27");
questionGrid15.addEventListener("click", (event) => {
  qBox.innerText = computers[9].question;
  answer = computers[9].answer;
  value = computers[9].value;
  passButton.disabled = false;
  guessButton.disabled = false;
});

let questionGrid16 = document.getElementById("04");
questionGrid16.addEventListener("click", (event) => {
  qBox.innerText = mythology[5].question;
  answer = mythology[5].answer;
  value = mythology[5].value;
  passButton.disabled = false;
  guessButton.disabled = false;
});

let questionGrid17 = document.getElementById("10");
questionGrid17.addEventListener("click", (event) => {
  qBox.innerText = mythology[6].question;
  answer = mythology[6].answer;
  value = mythology[6].value;
  passButton.disabled = false;
  guessButton.disabled = false;
});

let questionGrid18 = document.getElementById("16");
questionGrid18.addEventListener("click", (event) => {
  qBox.innerText = mythology[7].question;
  answer = mythology[7].answer;
  value = mythology[7].value;
  passButton.disabled = false;
  guessButton.disabled = false;
});

let questionGrid19 = document.getElementById("22");
questionGrid19.addEventListener("click", (event) => {
  qBox.innerText = mythology[8].question;
  answer = mythology[8].answer;
  value = mythology[8].value;
  passButton.disabled = false;
  guessButton.disabled = false;
});

let questionGrid20 = document.getElementById("28");
questionGrid20.addEventListener("click", (event) => {
  qBox.innerText = mythology[9].question;
  answer = mythology[9].answer;
  value = mythology[9].value;
  passButton.disabled = false;
  guessButton.disabled = false;
});

let questionGrid21 = document.getElementById("05");
questionGrid21.addEventListener("click", (event) => {
  qBox.innerText = history[5].question;
  answer = history[5].answer;
  value = history[5].value;
  passButton.disabled = false;
  guessButton.disabled = false;
});

let questionGrid22 = document.getElementById("11");
questionGrid22.addEventListener("click", (event) => {
  qBox.innerText = history[6].question;
  answer = history[6].answer;
  value = history[6].value;
  passButton.disabled = false;
  guessButton.disabled = false;
});

let questionGrid23 = document.getElementById("17");
questionGrid23.addEventListener("click", (event) => {
  qBox.innerText = history[7].question;
  answer = history[7].answer;
  value = history[7].value;
  passButton.disabled = false;
  guessButton.disabled = false;
});

let questionGrid24 = document.getElementById("23");
questionGrid24.addEventListener("click", (event) => {
  qBox.innerText = history[8].question;
  answer = history[8].answer;
  value = history[8].value;
  passButton.disabled = false;
  guessButton.disabled = false;
});

let questionGrid25 = document.getElementById("29");
questionGrid25.addEventListener("click", (event) => {
  qBox.innerText = history[9].question;
  answer = history[9].answer;
  value = history[9].value;
  passButton.disabled = false;
  guessButton.disabled = false;
});

let questionGrid26 = document.getElementById("06");
questionGrid26.addEventListener("click", (event) => {
  qBox.innerText = general[5].question;
  answer = general[5].answer;
  value = general[5].value;
  passButton.disabled = false;
  guessButton.disabled = false;
});

let questionGrid27 = document.getElementById("12");
questionGrid27.addEventListener("click", (event) => {
  qBox.innerText = general[6].question;
  answer = general[6].answer;
  value = general[6].value;
  passButton.disabled = false;
  guessButton.disabled = false;
});

let questionGrid28 = document.getElementById("18");
questionGrid28.addEventListener("click", (event) => {
  qBox.innerText = general[7].question;
  answer = general[7].answer;
  value = general[7].value;
  passButton.disabled = false;
  guessButton.disabled = false;
});

let questionGrid29 = document.getElementById("24");
questionGrid29.addEventListener("click", (event) => {
  qBox.innerText = general[8].question;
  answer = general[8].answer;
  value = general[8].value;
  passButton.disabled = false;
  guessButton.disabled = false;
});

let questionGrid30 = document.getElementById("30");
questionGrid30.addEventListener("click", (event) => {
  qBox.innerText = general[9].question;
  answer = general[9].answer;
  value = general[9].value;
  passButton.disabled = false;
  guessButton.disabled = false;
});
