// Quiz questions array
const quizQuestions = [
    { question: "What is the capital of France?", answer: "paris" },
    { question: "Which planet is known as the Red Planet?", answer: "mars" },
    { question: "What is 5 + 7?", answer: "12" },
    { question: "Who is President of Russia?", answer: "putin" },
    { question: "Which language is used for web development?", answer: "javascript" }
];

// Function to run the quiz
function runQuiz() {
    let score = 0; // Initialize score

    for (let i = 0; i < quizQuestions.length; i++) {

        // Take user input
        const userAnswer = prompt(quizQuestions[i].question);

        // If user clicks cancel
        if (userAnswer === null) {
            alert("Quiz cancelled.");
            return;
        }

        // Check answer (case-insensitive and trimmed)
        if (userAnswer && userAnswer.toLowerCase().trim() === quizQuestions[i].answer.toLowerCase().trim()) {
            alert("Correct!");
            score++;
        } else {
            alert(`Wrong! The correct answer is: ${quizQuestions[i].answer}`);
        }
    }

    // Show final score
    alert(`Quiz Over! Your final score is ${score} out of ${quizQuestions.length}`);
}

runQuiz();
