const questions = [
    {
    
    
            question: "La the&#768se 'The&#769orie mathe&#769matique des mathe&#769maticiens' a e&#769te&#769 publie&#769 par:  ",
         answers: [
           { text: "Max Planck", correct: false},
             { text: "John Von Neumann", correct: false},
             { text: "Erwin Shrodinger", correct: false},
              { text: "Claude Elwood Shannon", correct: true}, 
     ]
        },
    
    
     {
            question: "Quelle est la fonction logique de la porte logique NON ?",
            answers: [
                { text: "Elle inverse l'entre&#769e", correct: true},
                { text: "Elle multiplie l'entre&#769e par -1", correct: false},
                { text: "Elle ajoute 1 a&#768 l'entre&#769e", correct: false},
                { text: "Elle divise l'entre&#769e par 2", correct: false},
            ]
        },
     {
            question: "Quelle est la sortie de la porte logique ET si l'une des deux entre&#769es est a&#768 l'e&#769tat bas (0) ?",
            answers: [
                { text: "0", correct: true},
                { text: "1", correct: false},
                { text: "Erreur", correct: false},
                { text: "De&#769pend de la charge connecte&#769e a&#768 la sortie", correct: false},
            ]
        },
    
    
        {
            question: "Quelle est la fonction de base de la porte logique ET ?",
            answers: [
                { text: "Addition binaire", correct: false},
                { text: "Multiplication binaire", correct: true},
                { text: "Soustraction binaire", correct: false},
                { text: "Division binaire", correct: false},
            ]
        },
        {
            question: "Quelle est la diffe&#769rence entre une porte logique ET et une porte logique OU ?",
            answers: [
                { text: "La porte logique ET renvoie 1 si toutes les entre&#769es sont a&#768 l'e&#769tat haut, tandis que la porte logique OU renvoie 1 si au moins une entre&#769e est a&#768 l'e&#769tat haut", correct: true},
                { text: "La porte logique ET renvoie 1 si l'une des entre&#769es est a&#768 l'e&#769tat haut, tandis que la porte logique OU renvoie 1 si toutes les entre&#769es sont a&#768 l'e&#769tat haut", correct: false},
                { text: "La porte logique ET renvoie 0 si toutes les entre&#769es sont a&#768 l'e&#769tat haut, tandis que la porte logique OU renvoie 0 si toutes les entre&#769es sont a&#768 l'e&#769tat bas", correct: false},
                { text: "La porte logique ET renvoie 0 si l'une des entre&#769es est a&#768 l'e&#769tat bas, tandis que la porte logique OU renvoie 0 si au moins une entre&#769e est a&#768 l'e&#769tat bas", correct: false},
            ]
        },
     
     {
            question: "Quelle est la fonction logique de la porte logique OU exclusif ?",
            answers: [
                { text: "Elle renvoie 1 si les deux entre&#769es sont e&#769gales", correct: false},
                { text: "Elle renvoie 1 si l'une des deux entre&#769es est e&#769gale a&#768 1", correct: true},
                { text: "Elle renvoie 0 si les deux entre&#769es sont e&#769gales", correct: false},
                { text: "Elle renvoie 0 si l'une des deux entre&#769es est e&#769gales a&#768 0", correct: false},
            ]
        },
        {
    
    
            question: "Quelle est la sortie de la porte logique OU exclusif si les entre&#769es sont toutes les deux a&#768 l'e&#769tat haut (1) ?",
            answers: [
                { text: "0", correct: true},
                { text: "1", correct: false},
                { text: "Erreur", correct: false},
                { text: "De&#769pend de la charge connecte&#769e a&#768 la sortie", correct: false},
            ]
        },
     {
            question: "Comment peut-on imple&#769menter une porte logique OU exclusif a&#768 partir d'autres portes logiques ?",
            answers: [
                { text: "En utilisant une porte logique OU, une porte logique ET et une porte logique NON", correct: true},
                { text: "En utilisant une porte logique ET, deux portes logiques OU et une porte logique NON", correct: false},
                { text: " En utilisant une porte logique NON, deux portes logiques ET et une porte logique OU", correct: false},
                { text: "En utilisant une porte logique NOR, deux portes logiques ET et une porte logique NON", correct: false},
            ]
        },
    
    
     {
            question: "Quelle est la fonction de base de la porte logique NAND ?",
            answers: [
                { text: "Addition binaire", correct: false},
                { text: "Multiplication binaire", correct: false},
                { text: "Soustraction binaire", correct: false},
                { text: "Ne&#769gation de la fonction ET", correct: true},
            ]
        },
     {
            question: "Comment peut-on imple&#769menter une porte logique NAND a&#768 partir d'autres portes logiques ?",
            answers: [
                { text: "En utilisant une porte logique NON suivie d'une porte logique ET", correct: false},
                { text: "En utilisant une porte logique OU suivie d'une porte logique NON", correct: true},
                { text: "En utilisant une porte logique ET suivie d'une porte logique NON", correct: false},
                { text: "En utilisant une porte logique OU exclusif suivie d'une porte logique NON", correct: false},
            ]
        },
     {
            question: "Quelle est la sortie de la porte logique NOR si les entre&#769es sont toutes les deux a&#768 l'e&#769tat bas (0) ?",
            answers: [
                { text: "0", correct: false},
                { text: "1", correct: true},
                { text: "Erreur", correct: false},
                { text: "De&#769pend de la charge connecte&#769e a&#768 la sortie", correct: false},
            ]
        },
               {
            question: "Comment peut-on imple&#769menter une porte logique NOR a&#768 partir d'autres portes logiques ?",
            answers: [
                { text: "En utilisant une porte logique NON suivie d'une porte logique OU", correct: true},
                { text: "En utilisant une porte logique OU exclusif suivie d'une porte logique NON", correct: false},
                { text: "En utilisant une porte logique NOR suivie d'une porte logique NON", correct: false},
                { text: "En utilisant une porte logique ET suivie d'une porte logique NON", correct: false},
            ]
        },
        {
            question: "Quelle est la sortie de la porte logique NOR si les deux entre&#769es sont a&#768 l'etat haut (1) ?",
            answers: [
                { text: "0", correct: true},
                { text: "1", correct: false},
                { text: "Erreur", correct: false},
                { text: "De&#769pend de la charge connecte&#769e a&#768 la sortie", correct: false},
            ]
        },
    
    
    
    
        
           {
            question: "Combien de transistors sont ne&#769cessaires pour imple&#769menter une porte logique NOR a&#768 deux entre&#769es ?",
            answers: [
                { text: "1", correct: false},
                { text: "2", correct: false},
                { text: "3", correct: true},
                { text: "4", correct: false},
            ]
        },
    {
      question: " Parmis les affirmations suivantes pre&#769cisez celle qui est correcte:  ",
       answers: [
               { text: "Les portes XOR sont couramment utilise&#769es dans les circuits de de&#769multiplexage ", correct: false},
                { text: "La porte NOR est une porte simple mais elle n'est pas aussi universelle que la porte NAND ", correct: true},
                { text: "La porte NAND ne&#769cessit un nombre e&#769quivalent de portes AND et XOR ", correct: false},
                { text: "En ge&#769ne&#769ral, on e&#769vite d'utiliser les portes XOR pour effectuer les ope&#769rations arithme&#769tiques", correct: false},
            ]
     }
    
    
    
    
 ];
    
    
    
    
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Suivant";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => { 
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
     const selectedBtn = e.target;
     const isCorrect = selectedBtn.dataset.correct === "true";
     if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
     }else{
        selectedBtn.classList.add("incorrect");
     }
     Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
     });
     nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `Votre score est ${score}/${questions.length}`;
    nextButton.innerHTML = "Jouez une autre fois";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}


nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();


