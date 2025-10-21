// ================== Questions & Weights ==================
const questions = [
    // ========== Core Values & Beliefs ==========
    {id:1, category:"Core Values & Beliefs", text:"How do you approach major life decisions?", options:["A. I make careful plans and follow them strictly","B. I prefer flexibility and adapt as things happen","C. I rely on intuition or feelings in the moment","D. Not Sure","E. Other"], correctAnswer:"B", userAnswer:null},
    {id:2, category:"Core Values & Beliefs", text:"How important is it that a potential partner approaches major life decisions in the same way as you?", options:["A. Must align closely","B. Somewhat important","C. Not important","D. Not Sure","E. Other"], correctAnswer:"B", userAnswer:null},
    {id:3, category:"Core Values & Beliefs", text:"How do you prioritize family and relationships in life?", options:["A. Family and relationships are my top priority","B. I balance family/relationships with personal goals","C. Personal goals take precedence over family/relationships","D. Not Sure","E. Other"], correctAnswer:"B", userAnswer:null},
    {id:4, category:"Core Values & Beliefs", text:"How important is it that a potential partner has the same priority for family and relationships?", options:["A. Must align closely","B. Somewhat important","C. Not important","D. Not Sure","E. Other"], correctAnswer:"C", userAnswer:null},
    {id:5, category:"Core Values & Beliefs", text:"How do you make ethical or moral choices?", options:["A. I follow strict personal principles","B. I consider context and adapt accordingly","C. I rely on intuition or gut feeling","D. Not Sure","E. Other"], correctAnswer:"E", userAnswer:null},
    {id:6, category:"Core Values & Beliefs", text:"How important is it that a potential partner makes similar ethical or moral choices?", options:["A. Must align closely","B. Somewhat important","C. Not important","D. Not Sure","E. Other"], correctAnswer:"B", userAnswer:null},
    {id:7, category:"Core Values & Beliefs", text:"How do you view religion or spirituality in life?", options:["A. Very important and central to my life","B. Moderately important / somewhat influential","C. Not important / not a factor","D. Not Sure","E. Other"], correctAnswer:"A", userAnswer:null},
    {id:8, category:"Core Values & Beliefs", text:"How important is it that a potential partner shares or respects your view on religion or spirituality?", options:["A. Must align closely","B. Somewhat important","C. Not important","D. Not Sure","E. Other"], correctAnswer:"A", userAnswer:null},
    {id:9, category:"Core Values & Beliefs", text:"How do you approach personal growth and self-improvement?", options:["A. I actively pursue growth and set goals regularly","B. I focus on growth occasionally, as needed","C. I rarely focus on personal growth","D. Not Sure","E. Other"], correctAnswer:"A", userAnswer:null},
    {id:10, category:"Core Values & Beliefs", text:"How important is it that a potential partner values personal growth similarly?", options:["A. Must align closely","B. Somewhat important","C. Not important","D. Not Sure","E. Other"], correctAnswer:"A", userAnswer:null},

    // ========== Emotional Preferences & Expression ==========
    {id:11, category:"Emotional Compatibility", text:"How do you typically express your emotions?", options:["A. I openly share my feelings with others","B. I share selectively, only with close people","C. I tend to keep my emotions to myself","D. Not Sure","E. Other"], correctAnswer:"B", userAnswer:null},
    {id:12, category:"Emotional Compatibility", text:"How important is it that a potential partner expresses emotions in a similar way?", options:["A. Must align closely","B. Somewhat important","C. Not important","D. Not Sure","E. Other"], correctAnswer:"B", userAnswer:null},
    {id:13, category:"Emotional Compatibility", text:"How do you handle stress or disappointment?", options:["A. I discuss it openly and seek support","B. I process it internally and may talk later","C. I avoid discussing it with others","D. Not Sure","E. Other"], correctAnswer:"E", userAnswer:null},
    {id:14, category:"Emotional Compatibility", text:"How important is it that a potential partner handles stress in a compatible way?", options:["A. Must align closely","B. Somewhat important","C. Not important","D. Not Sure","E. Other"], correctAnswer:"C", userAnswer:null},
    {id:15, category:"Emotional Compatibility", text:"How do you prefer to receive support when upset?", options:["A. Direct advice or solutions","B. Emotional listening and empathy","C. Space to process alone","D. Not Sure","E. Other"], correctAnswer:"B", userAnswer:null},
    {id:16, category:"Emotional Compatibility", text:"How important is it that a potential partner provides support in a way that suits you?", options:["A. Must align closely","B. Somewhat important","C. Not important","D. Not Sure","E. Other"], correctAnswer:"A", userAnswer:null},
    {id:17, category:"Emotional Compatibility", text:"How do you communicate about difficult topics?", options:["A. I prefer to address them directly and openly","B. I approach them cautiously and slowly","C. I tend to avoid difficult topics","D. Not Sure","E. Other"], correctAnswer:"A", userAnswer:null},
    {id:18, category:"Emotional Compatibility", text:"How important is it that a potential partner communicates similarly about difficult topics?", options:["A. Must align closely","B. Somewhat important","C. Not important","D. Not Sure","E. Other"], correctAnswer:"A", userAnswer:null},
    {id:19, category:"Emotional Compatibility", text:"How do you approach conflict resolution?", options:["A. I address issues calmly and seek compromise","B. I avoid confrontation or conflict when possible","C. I tend to be assertive or confrontational","D. Not Sure","E. Other"], correctAnswer:"A", userAnswer:null},
    {id:20, category:"Emotional Compatibility", text:"How important is it that a potential partner resolves conflict in a compatible manner?", options:["A. Must align closely","B. Somewhat important","C. Not important","D. Not Sure","E. Other"], correctAnswer:"A", userAnswer:null},

    // ========== Future Vision Alignment ==========
    {id:21, category:"Future Vision Alignment", text:"How do you view long-term career goals and ambition?", options:["A. Very ambitious; I set high long-term goals","B. Moderately ambitious; I have goals but remain flexible","C. Low ambition; I prefer a relaxed approach","D. Not Sure","E. Other"], correctAnswer:"B", userAnswer:null},
    {id:22, category:"Future Vision Alignment", text:"How important is it that a potential partner shares similar career goals or ambition?", options:["A. Must align closely","B. Somewhat important","C. Not important","D. Not Sure","E. Other"], correctAnswer:"C", userAnswer:null},
    {id:23, category:"Future Vision Alignment", text:"How do you feel about marriage or long-term commitment?", options:["A. Very important; I want long-term commitment","B. Somewhat important; I’m open but flexible","C. Not important; not a priority","D. Not Sure","E. Other"], correctAnswer:"A", userAnswer:null},
    {id:24, category:"Future Vision Alignment", text:"How important is it that a potential partner shares your view on long-term commitment?", options:["A. Must align closely","B. Somewhat important","C. Not important","D. Not Sure","E. Other"], correctAnswer:"A", userAnswer:null},
    {id:25, category:"Future Vision Alignment", text:"How do you feel about having children or family planning?", options:["A. I want children and plan for it","B. I’m open / undecided","C. I do not want children","D. Not Sure","E. Other"], correctAnswer:"A", userAnswer:null},
    {id:26, category:"Future Vision Alignment", text:"How important is it that a potential partner shares your view on children or family planning?", options:["A. Must align closely","B. Somewhat important","C. Not important","D. Not Sure","E. Other"], correctAnswer:"A", userAnswer:null},
    {id:27, category:"Future Vision Alignment", text:"How do you approach finances and money management?", options:["A. I budget and plan carefully","B. I budget occasionally but remain flexible","C. I rarely plan and spend freely","D. Not Sure","E. Other"], correctAnswer:"A", userAnswer:null},
    {id:28, category:"Future Vision Alignment", text:"How important is it that a potential partner has a compatible financial approach?", options:["A. Must align closely","B. Somewhat important","C. Not important","D. Not Sure","E. Other"], correctAnswer:"A", userAnswer:null},
    {id:29, category:"Future Vision Alignment", text:"How do you plan for lifestyle and living arrangements?", options:["A. I prefer structured plans and organization","B. I’m flexible and adapt as needed","C. I make little or no plans","D. Not Sure","E. Other"], correctAnswer:"B", userAnswer:null},
    {id:30, category:"Future Vision Alignment", text:"How important is it that a potential partner has a compatible lifestyle vision?", options:["A. Must align closely","B. Somewhat important","C. Not important","D. Not Sure","E. Other"], correctAnswer:"B", userAnswer:null},

    // ========== Love Language & Expression ==========
    {id:31, category:"Love Language & Expression", text:"How do you express appreciation and affection?", options:["A. Through words and verbal affirmations","B. Through actions and thoughtful gestures","C. Through physical closeness or touch","D. Not Sure","E. Other"], correctAnswer:"B", userAnswer:null},
    {id:32, category:"Love Language & Expression", text:"How important is it that a potential partner expresses affection in a compatible way?", options:["A. Must align closely","B. Somewhat important","C. Not important","D. Not Sure","E. Other"], correctAnswer:"C", userAnswer:null},
    {id:33, category:"Love Language & Expression", text:"How do you prefer to receive love or care?", options:["A. Through verbal affirmations","B. Through actions or helpful gestures","C. Through physical closeness or touch","D. Not Sure","E. Other"], correctAnswer:"E", userAnswer:null},
    {id:34, category:"Love Language & Expression", text:"How important is it that a potential partner understands your preferred love language?", options:["A. Must align closely","B. Somewhat important","C. Not important","D. Not Sure","E. Other"], correctAnswer:"A", userAnswer:null},
    {id:35, category:"Love Language & Expression", text:"How do you show physical closeness or intimacy?", options:["A. Through touch, hugs, or holding hands","B. Through quality time spent together","C. Through verbal expressions of care","D. Not Sure","E. Other"], correctAnswer:"A", userAnswer:null},
    {id:36, category:"Love Language & Expression", text:"How important is it that a potential partner is compatible with your way of showing physical closeness or intimacy?", options:["A. Must align closely","B. Somewhat important","C. Not important","D. Not Sure","E. Other"], correctAnswer:"B", userAnswer:null},
    {id:37, category:"Love Language & Expression", text:"How do you express gratitude in a relationship context?", options:["A. Verbally saying “thank you” or compliments","B. Doing thoughtful actions or favors","C. Showing affection or small gestures physically","D. Not Sure","E. Other"], correctAnswer:"E", userAnswer:null},
    {id:38, category:"Love Language & Expression", text:"How important is it that a potential partner reciprocates in a compatible way?", options:["A. Must align closely","B. Somewhat important","C. Not important","D. Not Sure","E. Other"], correctAnswer:"B", userAnswer:null},
    {id:39, category:"Love Language & Expression", text:"How do you prefer to spend quality time with someone?", options:["A. Talking and sharing thoughts/feelings","B. Doing activities or hobbies together","C. Being physically close but relaxed","D. Not Sure","E. Other"], correctAnswer:"E", userAnswer:null},
    {id:40, category:"Love Language & Expression", text:"How important is it that a potential partner values time together similarly?", options:["A. Must align closely","B. Somewhat important","C. Not important","D. Not Sure","E. Other"], correctAnswer:"A", userAnswer:null},

    // ========== Lifestyle & Daily Living ==========
    {id:41, category:"Lifestyle Compatibility", text:"How do you structure your daily routines and habits?", options:["A. Very structured and planned","B. Moderately structured, some flexibility","C. Flexible and spontaneous","D. Not Sure","E. Other"], correctAnswer:"B", userAnswer:null},
    {id:42, category:"Lifestyle Compatibility", text:"How important is it that a potential partner has compatible daily routines?", options:["A. Must align closely","B. Somewhat important","C. Not important","D. Not Sure","E. Other"], correctAnswer:"C", userAnswer:null},
    {id:43, category:"Lifestyle Compatibility", text:"How do you approach cleanliness and household organization?", options:["A. Very organized and tidy","B. Moderately organized, some flexibility","C. Casual, not very concerned","D. Not Sure","E. Other"], correctAnswer:"B", userAnswer:null},
    {id:44, category:"Lifestyle Compatibility", text:"How important is it that a potential partner aligns with your habits for cleanliness and organization?", options:["A. Must align closely","B. Somewhat important","C. Not important","D. Not Sure","E. Other"], correctAnswer:"A", userAnswer:null},
    {id:45, category:"Lifestyle Compatibility", text:"How do you spend leisure and social time?", options:["A. Prefer planned social activities with friends/family","B. Mix of planned and spontaneous activities","C. Prefer mostly solo or unplanned leisure time","D. Not Sure","E. Other"], correctAnswer:"B", userAnswer:null},
    {id:46, category:"Lifestyle Compatibility", text:"How important is it that a potential partner has similar social preferences?", options:["A. Must align closely","B. Somewhat important","C. Not important","D. Not Sure","E. Other"], correctAnswer:"B", userAnswer:null},
    {id:47, category:"Lifestyle Compatibility", text:"How do you balance personal space and togetherness?", options:["A. Prefer a structured balance of alone and together time","B. Flexible balance depending on circumstances","C. Prefer mostly independence or mostly togetherness","D. Not Sure","E. Other"], correctAnswer:"B", userAnswer:null},
    {id:48, category:"Lifestyle Compatibility", text:"How important is it that a potential partner has a compatible balance of personal space and togetherness?", options:["A. Must align closely","B. Somewhat important","C. Not important","D. Not Sure","E. Other"], correctAnswer:"A", userAnswer:null},
    {id:49, category:"Lifestyle Compatibility", text:"How do you approach work-life balance?", options:["A. I keep work and personal life clearly separated","B. I balance work and personal life flexibly","C. Work or personal life dominates, depending on situation","D. Not Sure","E. Other"], correctAnswer:"A", userAnswer:null},
    {id:50, category:"Lifestyle Compatibility", text:"How important is it that a potential partner approaches work-life balance similarly?", options:["A. Must align closely","B. Somewhat important","C. Not important","D. Not Sure","E. Other"], correctAnswer:"A", userAnswer:null},

    // ========== Intellectual & Personal Growth Alignment ==========
    {id:51, category:"Intellectual Compatibility", text:"How important is learning and personal development to you?", options:["A. Very important; I actively pursue growth","B. Moderately important; I grow when opportunities arise","C. Not very important; I focus elsewhere","D. Not Sure","E. Other"], correctAnswer:"A", userAnswer:null},
    {id:52, category:"Intellectual Compatibility", text:"How important is it that a potential partner values learning and growth similarly?", options:["A. Must align closely","B. Somewhat important","C. Not important","D. Not Sure","E. Other"], correctAnswer:"A", userAnswer:null},
    {id:53, category:"Intellectual Compatibility", text:"How do you engage in intellectual discussions?", options:["A. I enjoy deep, stimulating conversations regularly","B. I participate occasionally in thoughtful discussions","C. I rarely engage in intellectual discussions","D. Not Sure","E. Other"], correctAnswer:"B", userAnswer:null},
    {id:54, category:"Intellectual Compatibility", text:"How important is it that a potential partner enjoys similar conversations?", options:["A. Must align closely","B. Somewhat important","C. Not important","D. Not Sure","E. Other"], correctAnswer:"B", userAnswer:null},
    {id:55, category:"Intellectual Compatibility", text:"How do you approach problem-solving or decision-making?", options:["A. Analytical and structured","B. Flexible and adaptive","C. Intuitive or spontaneous","D. Not Sure","E. Other"], correctAnswer:"E", userAnswer:null},
    {id:56, category:"Intellectual Compatibility", text:"How important is it that a potential partner approaches problems in a compatible way?", options:["A. Must align closely","B. Somewhat important","C. Not important","D. Not Sure","E. Other"], correctAnswer:"A", userAnswer:null},
    {id:57, category:"Intellectual Compatibility", text:"How do you express curiosity about the world?", options:["A. I actively explore new ideas, places, or experiences","B. I explore occasionally when it interests me","C. I rarely seek out new ideas or experiences","D. Not Sure","E. Other"], correctAnswer:"A", userAnswer:null},
    {id:58, category:"Intellectual Compatibility", text:"How important is it that a potential partner shares your curiosity about the world?", options:["A. Must align closely","B. Somewhat important","C. Not important","D. Not Sure","E. Other"], correctAnswer:"B", userAnswer:null},
    {id:59, category:"Intellectual Compatibility", text:"How do you enjoy exploring new ideas or hobbies?", options:["A. I actively seek new hobbies and ideas regularly","B. I explore occasionally when I feel like it","C. I rarely try new things","D. Not Sure","E. Other"], correctAnswer:"A", userAnswer:null},
    {id:60, category:"Intellectual Compatibility", text:"How important is it that a potential partner is open to exploring new ideas or hobbies?", options:["A. Must align closely","B. Somewhat important","C. Not important","D. Not Sure","E. Other"], correctAnswer:"C", userAnswer:null}
];


const categoryWeights = {
    "Core Values & Beliefs": 0.3,
    "Emotional Compatibility": 0.3,
    "Future Vision Alignment": 0.1,
    "Love Language & Expression": 0.1,
    "Lifestyle Compatibility": 0.1,
    "Intellectual Compatibility": 0.1
};

// ================== DOM Elements ==================
const startPage = document.getElementById('Start_Page');
const testPage = document.getElementById('Test_Page1');
const resultPage = document.getElementById('results_page');
const questionsContainer = document.getElementById('questions_container');
const nextButton = document.getElementById('next_button');
const progress = document.getElementById('progress');

let currentQuestionIndex = 0;

// ================== Functions ==================
function showQuestion(index) {
    const q = questions[index];
    questionsContainer.innerHTML = "";

    const container = document.createElement('div');
    container.classList.add('question_container', 'active');

    const questionText = document.createElement('p');
    questionText.textContent = q.text;
    container.appendChild(questionText);

    q.options.forEach(option => {
        const btn = document.createElement('button');
        btn.textContent = option;
        btn.id = `q${q.id}_${option.charAt(0)}`;
        btn.onclick = () => selectAnswer(q.id, option.charAt(0));
        if(q.userAnswer === option.charAt(0)) btn.classList.add('selected');
        container.appendChild(btn);
    });

    questionsContainer.appendChild(container);

    // Disable Next button if not answered
    nextButton.disabled = !q.userAnswer;

    updateProgress();
}

function selectAnswer(questionId, answer) {
    const q = questions.find(q => q.id === questionId);
    q.userAnswer = answer;

    document.querySelectorAll(`#questions_container button`).forEach(btn => {
        if(btn.id.startsWith(`q${questionId}_`)) btn.classList.remove('selected');
    });
    document.getElementById(`q${questionId}_${answer}`).classList.add('selected');

    // Enable Next button when answered
    nextButton.disabled = false;

    updateProgress();
}

function updateProgress() {
    const answered = questions.filter(q => q.userAnswer).length;
    const percent = (answered / questions.length) * 100;
    progress.style.width = percent + "%";
}

function calculateScore() {
    let totalScore = 0;
    const categoryScoresObj = {};

    for(const category in categoryWeights){
        const questionsInCategory = questions.filter(q => q.category === category);
        let categoryScore = 0;
        questionsInCategory.forEach(q => {
            if(q.userAnswer === q.correctAnswer) categoryScore += 1;
            else if(q.userAnswer === "E") categoryScore += 0.5; // Partial points for 'Other'
        });
        categoryScore = (categoryScore / questionsInCategory.length) * categoryWeights[category] * 100;
        categoryScoresObj[category] = Math.round(categoryScore);
        totalScore += categoryScore;
    }

    return { total: Math.round(totalScore), categoryScoresObj };
}

function showResult() {
    testPage.style.display = 'none';
    resultPage.style.display = 'block';

    const { total, categoryScoresObj } = calculateScore();
    document.getElementById('overall_score').textContent = `Overall Compatibility: ${total}%`;

    const categoryDiv = document.getElementById('category_scores');
    categoryDiv.innerHTML = "";
    for(const cat in categoryScoresObj){
        const p = document.createElement('p');
        p.textContent = `${cat}: ${categoryScoresObj[cat]}%`;
        categoryDiv.appendChild(p);
    }

    let verdict = "";
    if(total >= 80) verdict = "Highly Compatible";
    else if(total >= 50) verdict = "Moderately Compatible";
    else verdict = "Needs Attention";

    document.getElementById('verdict').textContent = `Verdict: ${verdict}`;
}

// ================== Event Listeners ==================
document.getElementById('start').onclick = () => {
    startPage.style.display = 'none';
    testPage.style.display = 'block';
    showQuestion(currentQuestionIndex);
};

nextButton.onclick = () => {
    if(currentQuestionIndex < questions.length - 1){
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
    } else {
        showResult();
    }
};
