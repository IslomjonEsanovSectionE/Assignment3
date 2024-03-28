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
  

  function generateQuiz() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = ''; 
  
    quizData.forEach((questionData, index) => {
      const questionDiv = document.createElement('div');
      questionDiv.classList.add('question');
      questionDiv.innerHTML = `<p>${index + 1}. ${questionData.question}</p>`;
  
      questionData.options.forEach(option => {
        const optionDiv = document.createElement('div');
        optionDiv.classList.add('option');
        optionDiv.innerHTML = `<label><input type="radio" name="question${index}" value="${option}">${option}</label>`;
        questionDiv.appendChild(optionDiv);
      });
  
      quizContainer.appendChild(questionDiv);
    });
  }
  

  // Function to calculate and display quiz result with highlighting
    function showResult() {
    const resultDiv = document.getElementById('result');
    const answerInputs = document.querySelectorAll('input[type="radio"]:checked');
    let score = 0;
  
    answerInputs.forEach(input => {
      const questionIndex = parseInt(input.name.replace('question', ''));
      const selectedAnswer = input.value;
      const correctAnswer = quizData[questionIndex].correctAnswer;
  
      // Highlight correct and incorrect answers
      const parentDiv = input.closest('.question');
      if (selectedAnswer === correctAnswer) {
        parentDiv.style.backgroundColor = 'rgba(0, 255, 0, 0.2)'; // Greenish color for correct answer
        score++;
      } else {
        parentDiv.style.backgroundColor = 'rgba(255, 0, 0, 0.2)'; // Reddish color for incorrect answer
      }
    });
  
    resultDiv.textContent = `Your score: ${score} out of ${quizData.length}`;
  }
  

  generateQuiz();
  

  document.getElementById('submit-btn').addEventListener('click', showResult);
  