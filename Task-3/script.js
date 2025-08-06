document.addEventListener("DOMContentLoaded", () => {
  // ✅ Quiz Section Logic
  const quizData = [
    {
      question: "What does HTML stand for?",
      options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
      correct: 0
    },
    {
      question: "Which language is used for styling web pages?",
      options: ["HTML", "JQuery", "CSS"],
      correct: 2
    },
    {
      question: "Which is not a JavaScript Framework?",
      options: ["Python Script", "JQuery", "NodeJS"],
      correct: 0
    },
    {
      question: "What does CSS stand for?",
      options: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style System"],
      correct: 1
    },
    {
      question: "Which tag is used for JavaScript in HTML?",
      options: ["<javascript>", "<js>", "<script>"],
      correct: 2
    },
    {
      question: "Which company developed JavaScript?",
      options: ["Mozilla", "Netscape", "Google"],
      correct: 1
    }
  ];

  let currentQuiz = 0;
  const questionEl = document.getElementById("question");
  const optionsEl = document.getElementById("options");
  const feedbackEl = document.getElementById("feedback");
  const quizNextBtn = document.getElementById("quiz-next");

  function loadQuiz() {
    const q = quizData[currentQuiz];
    questionEl.textContent = q.question;
    optionsEl.innerHTML = "";
    feedbackEl.textContent = "";

    q.options.forEach((option, index) => {
      const btn = document.createElement("button");
      btn.className = "btn btn-outline-primary m-1";
      btn.textContent = option;
      btn.onclick = () => {
        feedbackEl.textContent = index === q.correct ? "✅ Correct!" : "❌ Wrong!";
        feedbackEl.style.color = index === q.correct ? "green" : "red";
      };
      optionsEl.appendChild(btn);
    });
  }

  if (quizNextBtn) {
    quizNextBtn.addEventListener("click", () => {
      currentQuiz = (currentQuiz + 1) % quizData.length;
      loadQuiz();
    });
  }

  loadQuiz();
});
