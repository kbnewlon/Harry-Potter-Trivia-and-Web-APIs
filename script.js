

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const quizQuestions = [];


//build quiz is a function that will compile the list of questions together to work in this application 
function buildQuiz(){}

function showResults(){}

// display quiz right away
buildQuiz();

// when the user clicks submit the submits the quiz the results will show
submitButton.addEventListener('click', showResults);

function buildQuiz(){
    // variable to store the HTML output
    const output = [];
  
    // for each question we want to run this
    quizQuestions.forEach(
      (currentQuestion, questionNumber) => {
  
        // variable to store the list of possible answers
        const answers = [];
  
        // and for each available answer...
        for(letter in currentQuestion.answers){
  
          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }
  
        // add this question and its answers to the output
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );
  
    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');


    function showResults(){

        // gather answer containers from our quiz
        const answerContainers = quizContainer.querySelectorAll('.answers');
      
        // this variable will keep track of user's answers
        let numCorrect = 0;
      
        // for each question...
        myQuestions.forEach( (currentQuestion, questionNumber) => {
      
          // find selected answer
          const answerContainer = answerContainers[questionNumber];
          const selector = `input[name=question${questionNumber}]:checked`;
          const userAnswer = (answerContainer.querySelector(selector) || {}).value;
      
          // if answer is correct
          if(userAnswer === currentQuestion.correctAnswer){
            // add to the number of correct answers
            numCorrect++;
      
            // color the answers blue
            answerContainers[questionNumber].style.color = 'lightblue';
          }
          // if answer is wrong or blank
          else{
            // color the answers red
            answerContainers[questionNumber].style.color = 'red';
          }
        });
      
        // show number of correct answers out of total
        resultsContainer.innerHTML = `${numCorrect} out of ${quizQuestions.length}`;