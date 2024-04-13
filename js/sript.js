//Массив с опросами, вариантами ответов и правильными ответами
let questions = [
    {
        question: "какой язык программирования вы изучаете",
        options: ["JavaScript", "python", "c#", "PHP"],
        correctAnswer: "JavaScript"

    },
    {
        question: "что такое Html",
        options: ["язык программирования", "база данных", "таблица стилей", "язык разметки"],
        correctAnswer: "язык разметки"

    },
    {
        question: "что такое css",
        options: ["язык программирования", "каскадная таблица стилей", "база данных", "язык разметки"],
        correctAnswer: "каскадная таблица стилей"

    }
]
let currentQuestion = 0 // текущий вопрос
let correctAnswers = 0 // колво правильных ответов


// функция для отображения текущего вопроса и вариантов ответа
function displayQuestion() {
    let questionElement = document.getElementById("question");
    questionElement.textContent = `Вопрос ${currentQuestion + 1}:${questions[currentQuestion].question} `;
    let optionsElement = document.getElementById("options");
    optionsElement.innerHTML = "";

    let optionsArray = questions[currentQuestion].options;
    optionsArray.forEach((option) => {
        let button = document.createElement("button")
        optionsElement.append(button);
        button.textContent = option;
        button.classList.add('button');
    })
}

displayQuestion();