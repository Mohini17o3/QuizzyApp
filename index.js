function displayQuestion(question) {
    var questionElement = document.getElementById("question");
    questionElement.textContent = question.question;

    var optionsElement = document.getElementById("options");
    optionsElement.innerHTML = ""; // Clear previous options

    var correctAnswer = question.answer;
    question.options.forEach(element => {
        var optionItem = document.createElement("li");
        optionItem.textContent = element;
        optionItem.classList.add("optionItem"); // Add class for styling and click event
        optionsElement.appendChild(optionItem);
        optionItem.addEventListener("click", function() {
            clearTimeout(timer); // Stop the timer when an option is clicked
            var selectedAnswer = element;
            var feedbackElement = document.createElement("p");
            if (selectedAnswer === correctAnswer) {
                optionItem.classList.add("correctAnswer");
                feedbackElement.textContent = "🥳 Correct answer: " + correctAnswer;
                score++;
            } else {
                optionItem.classList.add("wrongAnswer");
                feedbackElement.textContent = "😓 Wrong answer! Correct answer: " + correctAnswer;
            }
            optionsElement.appendChild(feedbackElement);
            document.getElementById("nextButton").style.display = "block"; // Show Next button
        });
    });

    // Start the timer
    var countdownElement = document.getElementById("countdown");
    var remainingTime = 20; // Initial time in seconds
    countdownElement.textContent = remainingTime;
    var timer = setInterval(function() {
        remainingTime--;
        countdownElement.textContent = remainingTime;
        if (remainingTime <= 0) {
            clearInterval(timer);
            var feedbackElement = document.createElement("p");
            feedbackElement.textContent = "Time's up! Correct answer: " + correctAnswer;
            optionsElement.appendChild(feedbackElement);
            document.getElementById("nextButton").style.display = "block"; // Show Next button
        }
    }, 1000); // Update timer every second
}

const questions = [
    {   id : 1,
        question : "What is the name of the annual fest of MAIT ? " ,
        options  : ["TnM" , "Moksha" , "Engifest" , "Oasis"] , 
        answer  : "TnM" 
    } ,
    {  
        id: 2,
        question :"Which of these is a cultural society",
        options : ["AEROSTARS" , "Keyara" , "IOSD" , "TECHTRONIX"],
        answer : "Keyara"
    } ,
    {
        id: 3,
        question : "How many departments are there in our college ? ",
        options : ["7" , "8 " , "9" , "10"] ,
        answer : "10",
    } , 

    {
        id: 4,
        question : "How many campus libraries does our college MAIT have?" ,
        options : ["2" , "1" , "0" , "3"] ,
        answer : "1",
    } , 
    {
        id: 5 , 
        question : "Which club is responsible for the management of green activities in the campus ?",
        options : ["National Service Scheme (NSS)" , "MAIT ECO CLUB" , " Student Awareness Programme" , "Literary Umbrella"] ,
        answer : "MAIT ECO CLUB",
    },
    {
        id: 6 , 
        question : "What is the name of our college's Alumini Meet ?",
        options : ["SMRITI" , "Techsurge" , "Mridang" , "MEET"] ,
        answer : "SMRITI",
    },
    {
        id: 7 , 
        question : "Which university is MAIT affiliated with?",
        options : ["Delhi University" , "Jawaharlal Nehru University (JNU) " , "Guru Gobind Singh Indraprastha University (GGSIPU)" , "Jamia Millia Islamia University"] ,
        answer : "Guru Gobind Singh Indraprastha University (GGSIPU)",
    },
    {
        id: 8,
        question: "In which area of Delhi is MAIT located?",
        options: ["Dwarka", "Rohini", "Saket", "Noida"],
        answer: "Rohini",
    },
    {
        id: 9,
        question: "Which of the following departments is NOT offered by MAIT?",
        options: ["Computer Science and Engineering", "Electronics and Communication Engineering", "Mechanical Engineering", "Civil Engineering"],
        answer: "Civil Engineering",
    },
    
     
  
]
var modal = document.getElementById("modal");
var rulesBtn = document.getElementById("rulesBtn");
var closeButton = document.querySelector(".close");

rulesBtn.addEventListener("click", function(event) {
    event.preventDefault(); 
    modal.style.display = "block";
});

closeButton.addEventListener("click", function() {
    modal.style.display = "none";
});

window.addEventListener("click", function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});

// Shuffle questions array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffleArray(questions); 

var currentQuestionIndex = 0;
var score = 0; 

document.getElementById("nextButton").addEventListener("click", function() {
    var optionsElement = document.getElementById("options");
     // Clear previous options
    optionsElement.innerHTML = "";

    //hiding the next button
    document.getElementById("nextButton").style.display = "none"; 
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion(questions[currentQuestionIndex]);
    } else {
        // Quiz ends, feedback shown 
        var questionPanel = document.getElementById("questionPanel");
        questionPanel.innerHTML = "Quiz is over! You scored " + score + " out of " + questions.length + ".";
    }

    var replayButton = document.createElement("button");
    replayButton.textContent = "Replay Quiz";
    replayButton.addEventListener("click", function() {
        // Reload the page to replay the quiz
        location.reload();
    });
    questionPanel.appendChild(replayButton);
    replayButton.classList.add("replayButton");
});

displayQuestion(questions[currentQuestionIndex]);