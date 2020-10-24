const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const msg = document.getElementById('msg');
const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonElement = document.getElementById('answer-buttons');
const finishBtn = document.getElementById('finish-btn')
const pointDisplay = document.querySelector('.pointCicle'); 
let shuffleQ, currentQ, answerRead;  

startBtn.addEventListener('click', startGame);
finishBtn.addEventListener('click', analyze)
nextBtn.addEventListener('click', () =>{
	currentQ++ 
	nextQuestion()
})

function startGame() {
  g = 0; 
  p.innerText = "point:";  
  pointDisplay.classList.add('hide');
  startBtn.classList.add('hide'); 
  msg.classList.add('hide'); 
  questionContainer.classList.remove('hide'); 
  shuffleQ =  questions.sort(() => Math.random() - .5);
  currentQ = 0; 
  nextQuestion(); 
}

function nextQuestion() {
	reset();
	showQ(shuffleQ[currentQ]);
}


function showQ(question) {
	questionElement.innerText = question.question;
	//answerRead = question.question.text; 
	     
	question.answers.forEach(answer => {
		const button = document.createElement('button');
		button.innerText = answer.text; 
		button.classList.add('btn');
		if (answer.correct) {
			button.dataset.correct = answer.correct;
		    pointsEarned.innerText =  (g / shuffleQ.length) *100+"%"; 
		    
		} else{
			
		}
		button.addEventListener('click', selectAnswer)
		answerButtonElement.appendChild(button);

	})

}

function reset(){
	clearStatus(document.body) 
	nextBtn.classList.add('hide')
	while(answerButtonElement.firstChild){
		answerButtonElement.removeChild
		(answerButtonElement.firstChild)
	}
}

//this arrays are going to be important when I will be 
var quiz = [];
var correctans = [];
var answer = [];

function selectAnswer(e) { 
const selectBtn = e.target;
const correct = selectBtn.dataset.correct;
   setStatus(document.body, correct)
   Array.from(answerButtonElement.children).forEach(button => {
   	setStatus(button, button.dataset.correct);
   })
     var corectanswer = document.querySelector('button[data-correct]')
   quiz.push(question.outerText)
    correctans.push(corectanswer.innerText);

   if (shuffleQ.length > currentQ + 1){   
   	nextBtn.classList.remove('hide')
   }else{
   	startBtn.innerText = "restart"; 
   	finishBtn.classList.remove('hide');  
   } 
   stopBtn();  
}

function analyze(){
	reset(); 
	questionContainer.classList.add('hide') 
   	finishBtn.classList.add('hide'); 
   	startBtn.classList.remove('hide');   
     pointDisplay.classList.remove('hide');
}

 function stopBtn() { 
 	var btn = document.querySelectorAll('.btn-grid > .btn')    
 	  for (var i = 0; i < btn.length; i++) { 
	   	btn[i].setAttribute('disabled',"")  
	   }    
 }

// function continueBtn() { 
// 	var btn = document.querySelectorAll('.btn-grid > .btn')    
// 	  for (var i = 0; i < btn.length; i++) { 
// 	   	btn[i].addEventListener('click', selectAnswer) 
// 	   }    
// }


function setStatus(element, correct){ 
	clearStatus(element);  
	if (correct) { 
		element.classList.add('correct')
	} else {
		element.classList.add('wrong') 
	} 
}

function clearStatus(element){
		element.classList.remove('correct')
		element.classList.remove('wrong')
}


//this is where you can add more questions
//use the examples below to make your own question
const questions = [
    {
    	question: 'who is the founder of microsoft',
    	answers:[ 
    	    {text:"steve jobs" correct: false},
    	    {text: "bill gates", correct: true},
    	     {text: "elon musk", correct: false} ,
    	     {text: "alphabet", correct: false} 
    	]
    },
    {
    	question: 'where is the usa located',
    	answers:[
    	    {text: 'india', correct: false},
    	    {text: "africa", correct: false},
    	     {text: "america", correct: true} ,
    	     {text: "????", correct: false}
    	]
    }, 
    {
    	question: 'what is the square of the square of 625',
    	answers:[
    	    {text: '455', correct: false}, 
    	    {text: "25", correct: false},
    	     {text: "5", correct: true} ,
    	     {text: "???", correct: false}
    	]
    },
    { 
    	question: 'what is 23 * 10',
    	answers:[
    	    {text: '230', correct: true},
    	    {text: "220", correct: false},
    	     {text: "33", correct: false} ,
    	     {text: "23", correct: false} 
    	]
    }, 
    {
    	question: 'what is the meaning of the acronym DNA',
    	answers:[
    	    {text: 'dont know answer', correct: false},
     	    {text: "deoxy Riboneuclei acid", correct: true},
    	     {text: "dangerous rainbow ahead", correct: false} ,
    	     {text: "????", correct: false}
    	]
    }
]
