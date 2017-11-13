var questions = [
    {
        type: "choose",
        question: "<h3>Тег для создание абзаца </h3>",
        answers: [
            "div",
            "p",
            "a"
        ],
        correct: [2]
    },
    {
        type: "choose",
        question: "<h3>Свойство css меняющие свет текста</h3>",
        answers: [
            "list-style",
            "background",
            "color"
        ],
        correct: [3]
    },
    {
        type: "choose",
        question: "<h3>Тег создающий заголовок</h3>",
        answers: [
            "h",
            "div",
            "hr"
        ],
        correct: [1]
    },
    {
        type: "choose",
        question: "<h3>Функция в javaScript вызывающая модальное окно</h3>",
        answers: [
            "alert()",
            "modal()",
            "console.log()"
        ],
        correct: [1]
    },
    {
        type: "choose",
        question: "<h3>Свойство css меняющщия шрифт текста </h3>",
        answers: [
            "coloro",
            "text-align:",
            "font"
        ],
        correct: [3]
    }
];

$("document").ready(function(){
    $("#jQuizler").jQuizler(questions);
});

function test(){
    location.reload();
}