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

    },
    {
        question: "что такое js",
        options: ["язык программирования", "фигня какая-то", "не знаю", "язык разметки"],
        correctAnswer: "язык программирования"

    },
    {
        question: "кто изобрёл js",
        options: ["я", "Дима", "мухамед", "Брендан Эйх"],
        correctAnswer: "Брендан Эйх"

    },
    {
        question: "лидер диссиптиконов",
        options: ["ты", "Оптимус прайм", "бамбл би", "Мегатрон"],
        correctAnswer: "Мегатрон"

    },


]
let currentQuestion = 0 // текущий вопрос
let correctAnswers = 0 // колво правильных ответов
let uncorrectAnswers = []

let people = prompt("введите ваше имя")
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
    });
    // добавить обработчик событий на блок с кнопками
    optionsElement.addEventListener('click', (e) => {
        //записать в переменную элемент на который кликнули
        let target = e.target

        nextQuestion(target.textContent);

    }, { once: true });
}

function nextQuestion(answer) {
    if (answer === questions[currentQuestion].correctAnswer) {
        correctAnswers++;
    } else {
        uncorrectAnswers.push(uncorrectAnswers)
    }
    currentQuestion++

    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        displayResult();
    }
}




function displayResult() {
    let prozent = correctAnswers / questions.length * 100
    console.log(prozent)
    let questionElement = document.getElementById('question');
    let optionsElement = document.getElementById("options");
    let resultElement = document.getElementById('result');
    questionElement.style.display = "none";
    optionsElement.style.display = "none";
    resultElement.textContent = `${people} Правильных ответов ${correctAnswers} из ${questions.length} это ${prozent.toFixed(0)} % вы допустили ошибку в ${uncorrectAnswers}`;
}

displayQuestion();