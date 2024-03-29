// array object with questions, options and answers
let quizData = [
    {
      question: "What is the largest planet in our solar system?",
      options: ["Mercury", "Venus", "Jupiter", "Saturn"],
      correctAnswer: "Jupiter"
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Mars", "Earth", "Neptune", "Uranus"],
      correctAnswer: "Mars"
    },
    {
        question: "Which planet is farthest from the Sun?",
        options: ["Mars", "Earth", "Neptune", "Uranus"],
        correctAnswer: "Neptune"
    },
    {
        question: "Which planet is habitable except the Earth?",
        options: ["Mars", "Earth", "Neptune", "None"],
        correctAnswer: "None"
    },
    {
        question: "When Pluto was discovered?",
        options: ["1999", "1929", "1930", "1888"],
        correctAnswer: "1930"
    },
  

];
  
//dynamically generates questions
    //clears the previous content
  function generateQuiz() {
    let quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = ''; 
    
    //creates div for each question and retrieves data from questionData object
    quizData.forEach((questionData, index) => {
      let questionDiv = document.createElement('div');
      questionDiv.classList.add('question');
      questionDiv.innerHTML = `<p>${index + 1}. ${questionData.question}</p>`;
        
      //creates options. 
      questionData.options.forEach(option => {
        let optionDiv = document.createElement('div');
        optionDiv.classList.add('option');
        optionDiv.innerHTML = `<label><input type="radio" name="question${index}" value="${option}">${option}</label>`;
        questionDiv.appendChild(optionDiv);
      });
  
      quizContainer.appendChild(questionDiv);
    });
  }
  

    //shows final results 
    function showResult() {
    let resultDiv = document.getElementById('result');
    let answerInputs = document.querySelectorAll('input[type="radio"]:checked');
    let score = 0;
  
    answerInputs.forEach(input => {
      let questionIndex = parseInt(input.name.replace('question', ''));
      let selectedAnswer = input.value;
      let correctAnswer = quizData[questionIndex].correctAnswer;
  
      //checks if answer is right. If yes, increments score and higlight with green
      let parentDiv = input.closest('.question');
      if (selectedAnswer === correctAnswer) {
        parentDiv.style.backgroundColor = 'rgba(0, 255, 0, 0.2)'; // green color for correct answer
        score++;
      } else {
        parentDiv.style.backgroundColor = 'rgba(255, 0, 0, 0.2)'; // red color for incorrect answer
      }
    });
  
    resultDiv.textContent = `Your score: ${score} out of ${quizData.length}`;
  }
  

  generateQuiz();
  

  document.getElementById('submit-btn').addEventListener('click', showResult);
  