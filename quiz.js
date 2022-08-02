const quizDB = [

    {
        question: "Q1: What is a correct syntax to output 'Hello World' in Python? ",
        a : "p('Hello World')",
        b : "pr('Hello World)",
        c : "print('Hello World')",
        d : "p('Hello World')",
        ans: "ans3"
    },
    {
        question : "Q2:  For tuples and list which is correct?",
        a : "List and tuples both are mutable.",
        b : "List is mutable whereas tuples are immutable.",
        c : "List and tuples both are immutable.",
        d : "List is immutable whereas tuples are mutable.",
        ans :  "ans2"

    },
    {
        question : "Q3: Suppose we have two sets A & B, then A<B is:",
        a : "True if len(A) is less than len(B).",
        b : "True if the elements in A when compared are less than the elements in B.",
        c : "True if A is a proper superset of B.",
        d : "True if A is a proper subset of B.",
        ans : "ans4"
    },
    {
        question : "Q4: How to create a frame in Python?",
        a : "Frame = Frame()",
        b : "Frame = new.window()",
        c : "Frame = frame.new()",
        d : "Frame = window.new()",
        ans : "ans1"
    },
    {
        question : "Q5: What is the output of the following code : print 9//2 ",
        a : "4.5",
        b : "4",
        c : "4.0",
        d : "Error",
        ans : "ans2"
    }
]


const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');
let questionCount = 0;
let score = 0;
const loadQuestion = () => {
    const questionList = quizDB[questionCount];
    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}

loadQuestion();

const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }

    });
    return answer;
};

const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}

submit.addEventListener('click',() => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer === quizDB[questionCount].ans){
        score++;
    };
    questionCount ++;

    deselectAll();
    if(questionCount < quizDB.length){
        loadQuestion();
    }else{
        showScore.innerHTML = `
        <h3> You scored ${score}/${quizDB.length} </h3>
        <button class="btn" onclick="location.reload()"> Play Again</button>
        `;
        showScore.classList.remove('scoreArea');

    }
});

