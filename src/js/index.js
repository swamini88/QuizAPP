let score = 0;
let attempted = 0;
let timer = document.getElementById("timer");
let time = 0;
let correctq = 0;
let wrong = 0;
let enterBtn = document.getElementById("enter123");
let question = document.getElementById("question");
let option1 = document.getElementById("option1");
let option2 = document.getElementById("option2");
let option3 = document.getElementById("option3");
let option4 = document.getElementById("option4");
let nextBtn = document.getElementById("nxtQuestionBtn");
let options = document.getElementsByClassName("option");
let scoreValue = document.getElementById("score");

document.getElementById("goToHome").addEventListener('click', function () {
    window.location.assign("index.html");
});
document.getElementById("startAgain").addEventListener('click', function () {
    time = 0;
    score = 0;

    document.getElementById("questionArea").style.display = "block";
    document.getElementById("resultArea").style.display = "none";
    next(questions, 0);
});

let questionSet = [
    {
        category: 'pipeCistern',
        question: 'A tank can be filled by pipe A in 2 hours and pipe B in 6 hours. At 10 A.M. pipe A was opened. At what time will the tank be filled if pipe B is opened at 11 A.M.?', answers: [
            { text: '12 P.M.', correct: '' },
            { text: '12.45 A.M.', correct: '' },
            { text: ' 5 P.M', correct: '' },
            { text: '11.45 A.M.', correct: 'TRUE' }
        ]
    },
    {
        category: 'pipeCistern',
        question: 'A tap can empty a tank in one hour. A second tap can empty it in 30 minutes. If both the taps operate simultaneously, how much time is needed to empty the tank?', answers: [
            { text: '45 minutes', correct: '' },
            { text: '20 minutes', correct: 'TRUE' },
            { text: '30 minutes', correct: '' },
            { text: '40 minutes', correct: '' }
        ]
    },
    {
        category: 'pipeCistern',
        question: 'A water tank can be filled by a tap in 30 minutes and another tap can fill it in 60 minutes. If both the taps are kept open for 5 minutes and then the first tap is closed, how long will it take for the tank to be full ?', answers: [
            { text: '46 minutes', correct: 'TRUE' },
            { text: '21 minutes', correct: '' },
            { text: '25 minutes', correct: '' },
            { text: '30 minutes', correct: '' }
        ]
    },
    {
        category: 'pipeCistern',
        question: 'Three taps A, B, C can fill an overhead tank in 4, 6 and 12 hours respectively. How long would the three taps take to fill the tank if all of them are opened together ?', answers: [
            { text: 'a) 5 hrs.', correct: '' },
            { text: 'b) 2 hrs.', correct: 'TRUE' },
            { text: 'c) 4 hrs.', correct: '' },
            { text: 'd) 3 hrs.', correct: '' }
        ]
    },
    {
        category: 'pipeCistern',
        question: 'Two pipes A and B can separately fill a tank in 2 hours and 3 hours respectively. If both the pipes are opened simultaneously in the empty tank, then the tank will be filled in', answers: [
            { text: 'a) 1 hour 20 minutes', correct: '' },
            { text: 'b) 1 hour 12 minutes', correct: 'TRUE' },
            { text: 'c) 2 hours 30 minutes', correct: '' },
            { text: 'd) 1 hour 15 minutes', correct: '' }
        ]
    },
    {
        category: 'pipeCistern',
        question: 'Two pipes A and B can fill a tank in 20 minutes and 30 minutes respectively. If both pipes are opened together, the time taken to fill the tank is :', answers: [
            { text: 'a) 15 minutes', correct: '' },
            { text: 'b) 50 minutes', correct: '' },
            { text: 'c) 12 minutes', correct: 'TRUE' },
            { text: 'd) 25 minutes', correct: '' }
        ]
    },
    {
        category: 'pipeCistern',
        question: 'One tap can fill a water tank in 40 minutes and another tap can make the filled tank empty in 60 minutes. If both the taps are open, in how many hours will the empty tank be filled ?', answers: [
            { text: 'a) 3.5 hours', correct: '' },
            { text: 'b) 2 hours', correct: 'TRUE' },
            { text: 'c) 2.5 hours', correct: '' },
            { text: 'd) 3 hours', correct: '' }
        ]
    },
    {
        category: 'pipeCistern',
        question: 'A tap can fill a cistern in 8 hours and another tap can empty it in 16 hours. If both the taps are open, the time (in hours) taken to fill the tank will be :', answers: [
            { text: 'a) 24', correct: '' },
            { text: 'b) 8', correct: '' },
            { text: 'c) 10', correct: '' },
            { text: 'd) 16', correct: 'TRUE' }
        ]
    },
    {
        category: 'pipeCistern',
        question: 'Two pipes A and B can fill a tank in 36 minutes and 45 minutes respectively. Another pipe C can empty the tank in 30 minutes. First A and B are opened. After 7 minutes, C is also opened. The tank is filled up in', answers: [
            { text: 'a) 45 minutes', correct: '' },
            { text: 'b) 39 minutes', correct: '' },
            { text: 'c) 46 minutes', correct: 'TRUE' },
            { text: 'd) 40 minutes', correct: '' }
        ]
    },
    {
        category: 'pipeCistern',
        question: 'Two pipes X and Y can fill a cistern in 24 minutes and 32 minutes respectively. If both the pipes are opened together, then after how much time (in minutes) should Y be closed so that the tank is full in 18 minutes ?', answers: [
            { text: 'a) 5', correct: '' },
            { text: 'b) 10', correct: '' },
            { text: 'c) 8', correct: 'TRUE' },
            { text: 'd) 6', correct: '' }
        ]
    },
    {
        category: 'probability',
        question: ' What is the probability of an impossible event?', answers: [
            { text: 'a) 1', correct: '' },
            { text: 'b) 0', correct: 'TRUE' },
            { text: 'c) Insufficient data', correct: '' },
            { text: 'd) Not defined', correct: '' }
        ]
    },
    {
        category: 'probability',
        question: ' Company A produces 10% defective products, Company B produces 20% defective products and C produces 5% defective products. If choosing a company is an equally likely event, then find the probability that the product chosen is defective.', answers: [
            { text: 'a) 0.11', correct: '' },
            { text: 'b) 0.21', correct: '' },
            { text: 'c) 0.22', correct: '' },
            { text: 'd) 0.12', correct: 'TRUE' }
        ]
    },
    {
        category: 'probability',
        question: ' The probability that at least one of the events Q and R occur is 0.6. If Q and R have probability of occurring together as 0.2, then P(Q) + P(R) is?', answers: [
            { text: 'a) 1.2', correct: 'TRUE' },
            { text: 'b) 0.8', correct: '' },
            { text: 'c) 0.4', correct: '' },
            { text: 'd) Indeterminate', correct: '' }
        ]
    },
    {
        category: 'probability',
        question: ' Let there be two newly launched phones A and B. The probability that phone A has good battery life is 0.7 and the probability that phone B has a good battery life is 0.8. Then find the probability that a phone has good battery life.', answers: [
            { text: 'a) 0.45', correct: '' },
            { text: 'b) 0.85', correct: '' },
            { text: 'c) 0.75', correct: 'TRUE' },
            { text: 'd) 0.65', correct: '' }
        ]
    },
    {
        category: 'probability',
        question: ' In a discrete probability distribution, the sum of all probabilities is always?', answers: [
            { text: 'a) 1', correct: 'TRUE' },
            { text: 'b) 0', correct: '' },
            { text: 'c) Undefined', correct: '' },
            { text: 'd) Infinite', correct: '' }
        ]
    },
    {
        category: 'probability',
        question: ' If the probability of hitting the target is 0.3, find mean and variance.', answers: [
            { text: 'a) 0.3, 0.16', correct: '' },
            { text: 'b) 0.3, 0.21', correct: 'TRUE' },
            { text: 'c) 0.6, 0.16', correct: '' },
            { text: 'd) 0.6, 0.24', correct: '' }
        ]
    },
    {
        category: 'probability',
        question: ' What is the probability of a sure event?', answers: [
            { text: 'a) 1', correct: 'TRUE' },
            { text: 'b) 0', correct: '' },
            { text: 'c) 1/4', correct: '' },
            { text: 'd) 1/2', correct: '' }
        ]
    },
    {
        category: 'probability',
        question: ' If P(C) = 5/13, P(D) = 7/13 and P(C∩D) = 3/13, evaluate P(C|D).', answers: [
            { text: 'a) 2/7', correct: '' },
            { text: 'b) 3/5', correct: '' },
            { text: 'c) 3/7', correct: 'TRUE' },
            { text: 'd) 1/7', correct: '' }
        ]
    },
    {
        category: 'probability',
        question: ' The annual salaries of workers in a manufacturing factory are normally distributed with a mean of Rs. 48,000 and a standard deviation of Rs. 1500. Find the probability of workers who earn between Rs. 35,000 and Rs. 52,000.', answers: [
            { text: 'a) 20%', correct: '' },
            { text: 'b) 42.1%', correct: 'TRUE' },
            { text: 'c) 64%', correct: '' },
            { text: 'd) 76.2%', correct: '' }
        ]
    },
    {
        category: 'probability',
        question: '21. How many outcomes are possible when drawing a card from deck of cards?', answers: [
            { text: 'a) 1', correct: '' },
            { text: 'b) 13', correct: '' },
            { text: 'c) 52', correct: 'TRUE' },
            { text: 'd) 26', correct: '' }
        ]
    },
    {
        category: 'ageProblem',
        question: '. The probability that person A completes all the tasks assigned is 50% and that of person B is 20%. Find the probability that all the tasks are completed.', answers: [
            { text: 'a) 0.35', correct: 'TRUE' },
            { text: 'b) 0.45', correct: '' },
            { text: 'c) 0.15', correct: '' },
            { text: 'd) 0.25', correct: '' }
        ]
    },
    {
        category: 'ageProblem',
        question: 'The average age of five officers in a department is 32 years. If the age of their supervisor is added the average increases by 1. What is the supervisors age?',
        answers: [
            { text: 'A - 32 years', correct: '' },
            { text: 'B - 48 years', correct: '' },
            { text: 'C - 38 years', correct: 'TRUE' },
            { text: 'D - 42 years', correct: '' }
        ]
    },
    {
        category: 'ageProblem',
        question: 'The resent ages of A, B and C are in the ratio of 8:14:22 respectively. The resent ages of B, C and D are in the ratio of 21:33:44 respectively. Which of the following represents the ratio of the present ages of A, B, C and D respectively.', answers: [
            { text: 'A - 12:21:33:44', correct: 'TRUE' },
            { text: 'B - 12:22:31:44', correct: '' },
            { text: 'C - 12:21:36:44', correct: '' },
            { text: 'D - Cannot be determined', correct: '' }
        ]
    },
    {
        category: 'ageProblem',
        question: 'Six years back Seema was half of that of Rupa in age. Four years hence the respective ratio of their ages would be 3:5. How old is Rupa at present?', answers: [
            { text: 'A - 32 years', correct: '' },
            { text: 'B - 16 years', correct: '' },
            { text: 'C - 40 years', correct: '' },
            { text: 'D - None of these', correct: 'TRUE' }
        ]
    },
    {
        category: 'ageProblem',
        question: 'If 3:4 is the present age ratio of anil and varun but 5 year later , the ratio of their age change and become 4:5 . Find out the present age of varun ?', answers: [
            { text: 'A - 15 years', correct: '' },
            { text: 'B - 18 years', correct: '' },
            { text: 'C - 20 years', correct: 'TRUE' },
            { text: 'D - 24 years', correct: '' }
        ]
    },
    {
        category: 'ageProblem',
        question: 'If 3:11 is the ratio of ram and his mother but 24 year is the age difference between ram and his mother . What should be the age ratio of ram and his mother after 3 years ?', answers: [
            { text: 'A - 1:3', correct: 'TRUE' },
            { text: 'B - 2:3', correct: '' },
            { text: 'C - 3:5', correct: '' },
            { text: 'D - 5:6', correct: '' }
        ]
    },
    {
        category: 'ageProblem',
        question: ' What should be the present age of two person if 5:7 is the present age ratio of two person and 3:5 was the age ratio before the period of 16 year?', answers: [
            { text: 'A - 30, 44 year', correct: '' },
            { text: 'B - 35, 52 years', correct: '' },
            { text: 'C - 40, 56 years', correct: 'TRUE' },
            { text: 'D - 45, 60 years', correct: '' }
        ]
    },
    {
        category: 'ageProblem',
        question: 'The product of Ram age 5 year ago with his age 7 years later is 28 . What should be the present age of mr. Ram ?', answers: [
            { text: 'A - 4 years', correct: '' },
            { text: 'B - 6 years', correct: '' },
            { text: 'C - 7 years', correct: 'TRUE' },
            { text: 'D - 8 years', correct: '' }
        ]
    },
    {
        category: 'ageProblem',
        question: 'A mother was 4 times older in the comparison of her daughter before the period of 10 year. The mother age would be double in the comparison of her daughter after 10 year. What should be the present age of the daughter ?', answers: [
            { text: 'A - 5 years', correct: '' },
            { text: 'B - 10 years', correct: '' },
            { text: 'C - 20 years', correct: 'TRUE' },
            { text: 'D - 30 years', correct: '' }
        ]
    },
    {
        category: 'ageProblem',
        question: 'The sum of the ages of five girl born at the interval of 3 years each is 50 years. Find out the youngest girl age?', answers: [
            { text: 'A - 4 years', correct: 'TRUE' },
            { text: 'B - 8 years', correct: '' },
            { text: 'C - 10 years', correct: '' },
            { text: 'D - None of these', correct: '' }
        ]
    },
    {
        category: 'profitLoss',
        question: 'Ajit age after 15 years will be 5 times his age 5 years back . what is the present age of ajit ?', answers: [
            { text: 'A - 5 years', correct: '' },
            { text: 'B - 10 years', correct: 'TRUE' },
            { text: 'C - 15 years', correct: '' },
            { text: 'D - 50 years', correct: '' }
        ]
    },
    {
        category: 'profitLoss',
        question: ' A radio is sold for Rs. 990 at a benefit of 10%. What might have been the increase or misfortune percent, had it been sold for Rs. 890?', answers: [
            { text: 'A - 5%', correct: '' },
            { text: 'B - 10%', correct: '' },
            { text: 'C - 10/9%', correct: 'TRUE' },
            { text: 'D - 2%', correct: '' }
        ]
    },
    {
        category: 'profitLoss',
        question: 'By offering 100 penciled, a businessperson picks up the offering cost of 20 Pencils. His addition percent is:', answers: [
            { text: 'A - 25%', correct: 'TRUE' },
            { text: 'B - 20%', correct: '' },
            { text: 'C - 15%', correct: '' },
            { text: 'D - 12%', correct: '' }
        ]
    },
    {
        category: 'profitLoss',
        question: ' A man offers an article at 12.5% misfortune. Had he sold it for Rs. 103.60 more, he could have picked up 6%. What is the C.P of the articles?', answers: [
            { text: 'A - 278.60', correct: '' },
            { text: 'B - 350', correct: '' },
            { text: 'C - 432', correct: '' },
            { text: 'D - 560', correct: 'TRUE' }
        ]
    },
    {
        category: 'profitLoss',
        question: ' if the wage of A is 10% more than that of B and the wage of B is 20 % not as much as that of C, than the pay of A,B, C are in the proportion.', answers: [
            { text: 'A - 11:10:8', correct: '' },
            { text: 'B - 22:20:25', correct: 'TRUE' },
            { text: 'C - 10:9:7', correct: '' },
            { text: 'D - 22:18:25', correct: '' }
        ]
    },
    {
        category: 'profitLoss',
        question: ' A shopkeeper mixes 52 kg of rice at Rs. 40 per kg with 60 kg of rice of other variety at Rs. 72 per kg and sells the mixture at Rs. 60 per kg. His profit percent is:', answers: [
            { text: 'A - 4.5%', correct: '' },
            { text: 'B - 4.7%', correct: 'TRUE' },
            { text: 'C - 4.9%', correct: '' },
            { text: 'D - 5.1%', correct: '' }
        ]
    },
    {
        category: 'profitLoss',
        question: 'One-fourth of a consignment was sold at a profit of 6% and the remainder at a loss of 1%. If the total profit was Rs.600, the value of the consignment (in rupees) was:', answers: [
            { text: 'A - 55000', correct: '' },
            { text: 'B - 60000', correct: '' },
            { text: 'C - 70000', correct: '' },
            { text: 'D - 80000', correct: 'TRUE' }
        ]
    },
    {
        category: 'profitLoss',
        question: ' A deceptive businessperson professes to offer his merchandise at expense cost be that as it may, utilizes  weights and increases 100/9%. For a weight of 1kg he Employments.', answers: [
            { text: 'A - a weight of 875 gm', correct: '' },
            { text: 'B - a weight of 900 gm', correct: 'TRUE' },
            { text: 'C - a weight of 950 gm', correct: '' },
            { text: 'D - none of these', correct: '' }
        ]
    },
    {
        category: 'profitLoss',
        question: ' A retailer cases to offer his articles at a rebate of 10%, however marks his articles by expanding the expense of each by 20%. His addition Percent is:', answers: [
            { text: 'A - 6%', correct: '' },
            { text: 'B - 8%', correct: 'TRUE' },
            { text: 'C - 10%', correct: '' },
            { text: 'D - 12%', correct: '' }
        ]
    },
    {
        category: 'profitLoss',
        question: ' A man sold two steel seats for Rs. 500 each. On one, he increases 20% also, on the other, he loses 12%. The amount of does he pick up or misfortune in the entire exchange?', answers: [
            { text: 'A - 1.5% pick up', correct: '' },
            { text: 'B - 2% pick up', correct: '' },
            { text: 'C - 1.5% lose', correct: 'TRUE' },
            { text: 'D - 2% misfortune', correct: '' }
        ]
    },
    {
        category: '',
        question: ' An article is recorded at Rs.900 and two progressive rebates of 8% furthermore, 8% are given on it. What amount would the merchant addition or misfortune, if he gives a solitary rebate of 16%, rather than two markdowns?', answers: [
            { text: 'A - Gain rs. 4.76', correct: '' },
            { text: 'B - misfortune rs.5.76', correct: 'TRUE' },
            { text: 'C - pick up Rs. 5.76', correct: '' },
            { text: 'D - misfortune, rs 4.76', correct: '' }
        ]
    }
];

let uname = document.getElementById("uname");
enterBtn.addEventListener('click', changeUsername);
function changeUsername() {
    document.getElementById('user_name').innerText = uname.value;
}

let catArea = document.getElementsByClassName('catName');
for (let i = 0; i < catArea.length; i++) {
    const element = catArea[i];
    element.addEventListener('click', getQuestions => {
        if (uname.value !== "") {
            // startQuiz1(element.id);
            questions = [];
            for (let j = 0; j < questionSet.length; j++) {
                if (questionSet[j].category === element.id) {
                    questions.push(questionSet[j]);
                }
            }
            // alert(questions.length);
            startQuiz(questions, element);
        } else {
            alert("please Enter Your Name Before Selecting Category");
        }
    })

}


// start Quiz
function startQuiz(questions, element) {
    document.getElementById("loginPage").style.display = "none";
    document.getElementById("questionArea").style.display = "block";
    document.getElementById("cat_name").innerText = element.innerText;
    next(questions, 0);
    setInterval(() => {
        timer.innerText = time;
        time++;
    }, 1000);
}
// Next Question
function next(questions, index) {
    if (index > 1) {
        nextBtn.value = "End Test";
    }
    if (index > 9) {
        endTest();
    }
    question.innerText = questions[index].question;
    option1.innerText = questions[index].answers[0].text;
    option2.innerText = questions[index].answers[1].text;
    option3.innerText = questions[index].answers[2].text;
    option4.innerText = questions[index].answers[3].text;
    document.getElementById("qnum").innerHTML = index + 1;
    resetOptions();
}

// adding function for clicking next button
nextBtn.addEventListener('click', nextQuestion => {
    index = parseInt(document.getElementById("qnum").innerHTML);
    next(questions, index);
});

// options  
for (let i = 0; i < options.length; i++) {
    const element = options[i];
    element.addEventListener('click', checkResult => {
        // alert(element.innerText);
        index = parseInt(document.getElementById("qnum").innerHTML) - 1;
        // alert(element.innerText);
        attempted = attempted + 1;
        let result = checkAnswer(questions[index], i);
        if (result === "TRUE") {
            // element.classList.add("correct");
            correct(element);
        } else {
            // element.classList.add("incorrect");
            incorrect(element);
        }
        disableOptions();
    })
}

function checkAnswer(question, index) {
    // if()
    return question.answers[index].correct;
}

function disableOptions() {
    for (const element of options) {
        element.disabled = "true";
        element.style.cursor = "no-drop";
    }
}
function resetOptions() {
    for (const element of options) {
        if (element.classList.contains("correct"))
            element.classList.remove("correct");
        if (element.classList.contains("incorrect"))
            element.classList.remove("incorrect");
        element.disabled = "";
        element.style.cursor = "pointer";
        // alert(element.innerHTML);
    }
}
function correct(element) {
    element.classList.add("correct");
    score = parseInt(scoreValue.innerText) + 1;
    scoreValue.innerText = score;
    correctq = correctq + 1;
    // nextBtn.click();
}
function incorrect(element) {
    element.classList.add("incorrect");
    score = parseInt(scoreValue.innerText);
    scoreValue.innerText = score;
    wrong = wrong + 1;
    // nextBtn.click(); 
}
function endTest() {
    // alert(Array(correctq, wrong, time));
    document.getElementById("questionArea").style.display = "none";
    document.getElementById("resultArea").style.display = "block";
    document.getElementById("total_time_taken").innerText = time;
    document.getElementById("attempted").innerText = attempted;
    document.getElementById("correct").innerText = correctq;
    document.getElementById("wrong").innerText = wrong;
    document.getElementById("percentage").innerText = (correctq / 10) * 100;
    document.getElementById("user_result").innerText = uname.value;

}
