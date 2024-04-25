const questions = [
    {   id : 1,
        question : "What is the name of the annual fest of MAIT ? " ,
        options  : ["TnM " , "Moksha" , "Engifest" , "Oasis"] , 
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
        options : ["2" , "1 " , "0" , "3"] ,
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
        options : ["SMRITI" , "Techsurge" , "Mridang" , ""] ,
        answer : "MAIT ECO CLUB",
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
    event.preventDefault(); // Prevents the default behavior of jumping to the anchor
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