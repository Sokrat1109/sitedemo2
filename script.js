const quizData = [ // массив с вопросами



    {
        question: "Как ты обычно реагируешь, если кто-то нарушает твои границы?",
        answers :[
            { text: "Спокойно указываю, что это неприемлемо", result: 0},
            { text: "Просто ухожу, избегая общения", result: 1},
            { text: "Нападаю первым, чтобы поставить на место", result: 2},
            { text: "Манипулирую, чтобы человек сам понял, что неправ", result: 3}
        ]
    },
    {
        question: "Кто-то критикует тебя на людях. Твоя реакция?",
        answers :[
            { text: "Держу себя в руках и отвечаю строго", result: 0},
            { text: "Стараюсь уйти от темы", result: 1},
            { text: "Мгновенно начинаю защищаться или нападаю в ответ", result: 2},
            { text: "Саркастически обесцениваю его слова", result: 3}
        ]
    },
    {
        question: "В компании людей тебе что-то не нравится, что ты делаешь?",
        answers :[
            { text: "Предлагаю другое решение", result: 0},
            { text: "Молчу, жду, когда все закончится", result: 1},
            { text: "Говорю в лоб, что это бред", result: 2},
            { text: "Пытаюсь убедить всех, не раскрывая свои мотивы", result: 3}
        ]
    },
    {
        question: "Человек тебя обманывает. Что ты делаешь?",
        answers :[
            { text: "Спокойно ставлю его перед фактом", result: 0},
            { text: "Прекращаю контакт, не объясняя", result: 1},
            { text: "Конфликтую напрямую", result: 2},
            { text: "Отвечаю тем же, но позже", result: 3}
        ]
    },
    {
        question: "В конфликте ты чаще :",
        answers :[
            { text: "Сохраняешь контроль и логичность", result: 0},
            { text: "Уходишь в тень", result: 1},
            { text: "Кричишь, чтобы доминировать", result: 2},
            { text: "Давишь через чувство вины", result: 3}
        ]
    },
    {
        question: "Кто-то требует от тебя объяснений :",
        answers :[
            { text: "Отвечаю четко, без эмоций", result: 0},
            { text: "Ссылаюсь на занятость и ухожу", result: 1},
            { text: "Возмущаюсь, что это не его дело", result: 2},
            { text: "Заставляю его сомневаться, что он вообще прав", result: 3}
        ]
    },
    {
        question: "Тебя игнорируют. Что ты чувствуешь?",
        answers :[
            { text: "Неуютно, но анализирую причину", result: 0},
            { text: "Все равно, ухожу в себя", result: 1},
            { text: "Взрываюсь от злости", result: 2},
            { text: "Заставляю человека пожалеть", result: 3}
        ]
    },
    {
        question: "Когда спор становится острым, ты :",
        answers :[
            { text: "Берешь паузу и возвращаешься с решением", result: 0},
            { text: "Отступаешь, чтобы не усугублять", result: 1},
            { text: "Давишь, пока не добьешься своего", result: 2},
            { text: "Ведешь оппонента к нужному решению через намеки", result: 3}
        ]
    },
    {
        question: "Твоя тактика в напряженной ситуации :",
        answers :[
            { text: "Стратегия и контроль", result: 0},
            { text: "Никакой - просто пережить", result: 1},
            { text: "Атака и прессинг", result: 2},
            { text: "Интрига и управление эмоциями", result: 3}
        ]
    },
    {
        question: "Что для тебя важно в конфликте?",
        answers :[
            { text: "Справедливость и четкие границы", result: 0},
            { text: "Уйти без потерь", result: 1},
            { text: "Победа любой ценой", result: 2},
            { text: "Выгода и контроль над мнением", result: 3}
        ]
    },
    {
        question: "Когда чувствуешь угрозу, ты :",
        answers :[
            { text: "Удерживаешь хладнокровие", result: 0},
            { text: "Прячешься - физически или эмоционально", result: 1},
            { text: "Нападаешь первым", result: 2},
            { text: "Переигрываешь все психологически", result: 3}
        ]
    },
    {
        question: "Люди говорят, что ты :",
        answers :[
            { text: "Холодный, но справедливый", result: 0},
            { text: "Закрытый и трудночитаемый", result: 1},
            { text: "Взрывной и резкий", result: 2},
            { text: "Хитрый и непредсказуемый", result: 3}
        ]
    },
    {
        question: "При эмоциональной нагрузке :",
        answers :[
            { text: "Сохраняешь самообладание", result: 0},
            { text: "Уходишь в изоляцию", result: 1},
            { text: "Кричишь и проявляешь агрессию", result: 2},
            { text: "Используешь эмоции других против них", result: 3}
        ]
    },
    {
        question: "Если нужно стоять на своем :",
        answers :[
            { text: "Объясняешь позицию и аргументируешь", result: 0},
            { text: "Просто уступаешь", result: 1},
            { text: "Давишь и провоцируешь", result: 2},
            { text: "Заставляешь других принять твою точку грения мягко", result: 3}
        ]
    },
    {
        question: "В ситуации давления :",
        answers :[
            { text: "Сохраняешь порядок и контроль", result: 0},
            { text: "Скрываешься из поля зрения", result: 1},
            { text: "Идешь на лобовой", result: 2},
            { text: "Переводишь все на другого человека", result: 3}
        ]
    },
];

//начальные условия. индекс текущего вопроса 0 - значит вопрос первый
let currentQuestionIndex = 0;

let resultCounts = [0, 0, 0, 0];

// получаем их хтмл элемент с вопросом
const questionElement = document.getElementById("question");
// получаем все кнопки с вариантами ответов
const answerButtons = document.querySelectorAll(".answer-btn");



function showIntro() {
    const container = document.getElementById("quiz-container");

    container.classList.add("intro-mode");
    container.innerHTML = `
        <div class="intro-style">
            <h2>Привет.<br>Это психологический тест о твоих стратегиях поведения<br>в напряжённых ситуациях и конфликтах.<br>Он поможет тебе узнать себя чуть лучше, чтобы проанализировать свое поведение и мотивацию.</h2>
            <div class="answer">
                <button class="answer-btn" id="start-btn">Начать тест</button>
            </div>
        </div>
    `;

    document.getElementById("start-btn").addEventListener("click", () => {
        currentQuestionIndex = 0;
        showQuizUI();
        loadQuestion();
    });
}

// Восстановить структуру теста с вопросом и кнопками
function showQuizUI() {
    const container = document.getElementById("quiz-container");
    container.innerHTML = `
        <h2 id="question"></h2>
        <div class="answers">
            <button class="answer-btn"></button>
            <button class="answer-btn"></button>
            <button class="answer-btn"></button>
            <button class="answer-btn"></button>
        </div>
    `;

  // Навешиваем обработчики заново на кнопки
    const buttons = container.querySelectorAll(".answer-btn");

    buttons.forEach((button, index) => {
        button.addEventListener("click", () => {
            const answer = quizData[currentQuestionIndex].answers[index];
            resultCounts[answer.result]++;

            currentQuestionIndex++;
            if (currentQuestionIndex < quizData.length) {
                loadQuestion();
            } else {
                finishQuiz();
            }
        });
    });
    container.classList.remove("intro-mode");
}

function loadQuestion() {
    const current = quizData[currentQuestionIndex];
    const questionElement = document.getElementById("question");
    const answerButtons = document.querySelectorAll(".answer-btn");

    questionElement.textContent = current.question;

    answerButtons.forEach((btn, index) => {
        if (current.answers[index]) {
            btn.style.display = "block";
            btn.textContent = current.answers[index].text;
        } else {
            btn.style.display = "none";
        }
    });
}

function finishQuiz() {
    const container = document.getElementById("quiz-container");

    const maxIndex = resultCounts.indexOf(Math.max(...resultCounts));
    let resultTitle = "";
    let resultDescription = "";

    switch (maxIndex) {
        case 0:
            resultTitle = "Контролирующий"
            resultDescription = "Ты человек, который старается держать всё под контролем — себя, ситуацию, эмоции. В конфликтах ты не теряешь голову, предпочитаешь действовать логично и взвешенно. Тебе важно, чтобы были чёткие границы, справедливость и порядок. Ты не любишь хаос и резкие всплески — предпочитаешь стратегию и расчёт. Часто производишь впечатление холодного, но надёжного человека. Другие могут считать тебя строгим, но именно ты умеешь сдерживать разрушение там, где другие теряются. Главная сила — самообладание.";
            break;
        case 1:
            resultText = "Избегающий";
            resultDescription = "Ты не любишь конфликты и напряжение. Когда ситуация накаляется, тебе проще отойти, замолчать или исчезнуть, чем вступать в прямое противостояние. Ты умеешь скрываться — эмоционально или физически — и часто предпочитаешь тишину любой борьбе. Люди могут видеть в тебе закрытого, трудночитаемого человека. Ты не ищешь власти или доминирования, тебе важно сохранить внутренний покой. Иногда это помогает тебе оставаться невредимым, но порой приводит к тому, что твои желания и границы остаются неуслышанными. Главная сила — выживание через уход.";
            break;
        case 2:
            resultText = "Агрессивный";
            resultDescription = "Ты действуешь резко, напористо и без церемоний. Если кто-то нарушает твои границы — ты не будешь долго терпеть. В конфликтах предпочитаешь прямую конфронтацию, не боишься давления и даже сам можешь его использовать, чтобы навязать свою волю. Ты склонен к вспышкам, можешь казаться другим слишком резким или даже агрессивным. Но в этом есть сила — ты умеешь защищать себя и не терпишь несправедливости. Твоя позиция: если не я, то меня. Главная сила — мощный напор и стремление к победе.";
            break;
        case 3:
            resultText = "Манипулятивный";
            resultDescription = "Ты не действуешь в лоб. Твоя сила — в психологической игре, намёках, управлении эмоциями. Ты умеешь влиять на других, не поднимая голос. Там, где другие ссорятся или убегают, ты незаметно перенаправляешь ситуацию в свою пользу. Люди могут считать тебя непредсказуемым или даже хитрым — ты не всегда говоришь то, что думаешь, и не всегда показываешь настоящие чувства. Но именно это позволяет тебе добиваться своего в самых сложных обстоятельствах. Главная сила — влияние из тени.";
            break;
    }

    container.innerHTML = `
        <h2>Результат: <span style="font-size: 1em;">${resultTitle}</span></h2>
        <p>${resultDescription}</p>
        <div class="answer">
            <button class="answer-btn" id="restartBtn">Пройти тест заново</button>
        </div>
    `;

    document.getElementById("restartBtn").addEventListener("click", () => {
        currentQuestionIndex = 0;
        resultCounts = [0, 0, 0, 0]; // сбрасываем счётчики
        showIntro();
    });

}

showIntro();
