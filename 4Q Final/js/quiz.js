var current = 0;
var score = 0;
var answered = false;

function listquestions() {
    const options = document.getElementById("choices");
    options.innerHTML = '';

    const questions = [
        {
            question: "What does the SDG 12 advocate for?",
            answers: [
                "Responsible consumption",
                "No poverty",
                "Clean Water",
                "Irresponsible Consumption"
            ],
            correct: 0
        },
        {
            question: "What are ways to help support this SDG?",
            answers: [
                "Make sure to educate other kids",
                "Throw your trash wherever you can, do not recycle old materials, and do not clean your area.",
                "Make sure you give out food and water to kids",
                "Throw your trash properly, segregate your waste, and reuse materials."
            ],
            correct: 3
        },
        {
            question: "Why is it important for this SDG to exist?",
            answers: [
                "It is not important for us.",
                "It allows an unclean environment for us.",
                "It allows a safer and cleaner environment for the world.",
                "It allows kids to be educated."
            ],
            correct: 2
        },
        {
            question: "What is the main objective of this website?",
            answers: [
                "Make sure the world stays dirty.",
                "Make sure that the world is well-informed about this topic.",
                "Ensure that there is no animal abuse.",
                "This website does not have an objective."
            ],
            correct: 1
        },
        {
            question: "What should we avoid to observe this SDG?",
            answers: [
                "Reusing materials when producing new items.",
                "Throwing away materials that could still be reused.",
                "Minimizing the use of materials that cannot be recycled like plastics.",
                "By not combining our trash altogether or basically segregating"
            ],
            correct: 1
        }
    ];

    
    if (current < questions.length) {
        document.getElementById("qb").innerText = questions[current].question;
        questions[current].answers.forEach((answer, index) => {
            options.innerHTML += `<button onclick="check(this, ${index})">${answer}</button>`;
        });
    } else {
        results();
    }

   
    document.getElementById("next").disabled = true;
    answered = false;
    resetButtonColors();
}

function check(button, selectedAnswer) {
    const questions = [
        { correct: 0 },
        { correct: 3 },
        { correct: 2 },
        { correct: 1 },
        { correct: 1 }
    ];

   
    const rightAnswer = questions[current].correct;

    
    if (selectedAnswer === rightAnswer) {
        button.style.backgroundColor = 'green'; 
        score++;
    } else {
        button.style.backgroundColor = 'red'; 
        
        const buttons = document.querySelectorAll("#choices button");
        buttons[rightAnswer].style.backgroundColor = 'green';
    }

    answered = true; 
    document.getElementById("next").disabled = false; 
}

function resetButtonColors() {
    const buttons = document.querySelectorAll("#choices button");
    buttons.forEach(button => {
        button.style.backgroundColor = ""; 
    });
}

function previousq() {
    if (current > 0) {
        current--;
        listquestions();
    }
}

function nextq() {
    if (answered) { 
        current++;
        listquestions();
    }
}

function submitq() {
    results(); 
    document.getElementById("submit").disabled = true; 
}

function results() {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = "<h1>Your score: " + score + "</h1>";
}


window.onload = listquestions;