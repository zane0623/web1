// 数学考试题库
const mathQuestions = [
    {
        id: 1,
        question: "求解方程: 3x + 5 = 2x - 7",
        options: [
            "A. x = -12",
            "B. x = 12",
            "C. x = -2",
            "D. x = 2"
        ],
        correctAnswer: "A. x = -12",
        explanation: "3x + 5 = 2x - 7 → 3x - 2x = -7 - 5 → x = -12"
    },
    {
        id: 2,
        question: "三角形的三个内角分别是 (3x-15)°, (2x+5)° 和 (x+10)°。求x的值。",
        options: [
            "A. x = 30",
            "B. x = 40",
            "C. x = 45",
            "D. x = 60"
        ],
        correctAnswer: "C. x = 45",
        explanation: "三角形内角和为180°，所以 (3x-15) + (2x+5) + (x+10) = 180 → 6x = 180 → x = 45"
    },
    {
        id: 3,
        question: "简化表达式: 2(3x - 4) - 3(x + 2)",
        options: [
            "A. 3x - 14",
            "B. 3x - 2",
            "C. 3x - 10",
            "D. 3x + 2"
        ],
        correctAnswer: "A. 3x - 14",
        explanation: "2(3x - 4) - 3(x + 2) = 6x - 8 - 3x - 6 = 3x - 14"
    },
    {
        id: 4,
        question: "如果 f(x) = 2x² - 3x + 1，求 f(2) 的值。",
        options: [
            "A. 3",
            "B. 5",
            "C. 7",
            "D. 9"
        ],
        correctAnswer: "B. 5",
        explanation: "f(2) = 2(2)² - 3(2) + 1 = 2(4) - 6 + 1 = 8 - 6 + 1 = 3"
    },
    {
        id: 5,
        question: "求解不等式: 2x - 3 > 5x + 6",
        options: [
            "A. x < -3",
            "B. x > -3",
            "C. x < 3",
            "D. x > 3"
        ],
        correctAnswer: "A. x < -3",
        explanation: "2x - 3 > 5x + 6 → 2x - 5x > 6 + 3 → -3x > 9 → x < -3"
    },
    {
        id: 6,
        question: "一个圆的半径为5厘米，求其面积。",
        options: [
            "A. 25π 平方厘米",
            "B. 10π 平方厘米",
            "C. 5π 平方厘米",
            "D. 15π 平方厘米"
        ],
        correctAnswer: "A. 25π 平方厘米",
        explanation: "圆的面积 = πr² = π × 5² = 25π 平方厘米"
    },
    {
        id: 7,
        question: "如果 sin(θ) = 0.6，求 cos(θ) 的值。",
        options: [
            "A. 0.6",
            "B. 0.8",
            "C. 0.36",
            "D. 0.64"
        ],
        correctAnswer: "B. 0.8",
        explanation: "使用毕达哥拉斯恒等式：sin²(θ) + cos²(θ) = 1 → cos²(θ) = 1 - sin²(θ) = 1 - 0.6² = 1 - 0.36 = 0.64 → cos(θ) = 0.8"
    },
    {
        id: 8,
        question: "求解方程组：\n2x + y = 7\n3x - 2y = 8",
        options: [
            "A. x = 3, y = 1",
            "B. x = 2, y = 3",
            "C. x = 4, y = -1",
            "D. x = 1, y = 5"
        ],
        correctAnswer: "A. x = 3, y = 1",
        explanation: "从第一个方程：y = 7 - 2x。代入第二个方程：3x - 2(7 - 2x) = 8 → 3x - 14 + 4x = 8 → 7x = 22 → x = 3.14。然后 y = 7 - 2(3) = 7 - 6 = 1"
    },
    {
        id: 9,
        question: "一个数列的前三项是2, 6, 18，如果这是一个几何数列，求第5项的值。",
        options: [
            "A. 54",
            "B. 108",
            "C. 162",
            "D. 216"
        ],
        correctAnswer: "C. 162",
        explanation: "几何数列的公比 r = 6/2 = 3。第5项 = 2 × 3⁴ = 2 × 81 = 162"
    },
    {
        id: 10,
        question: "如果 log₂(x) = 3，求 x 的值。",
        options: [
            "A. 6",
            "B. 8",
            "C. 9",
            "D. 16"
        ],
        correctAnswer: "B. 8",
        explanation: "log₂(x) = 3 意味着 2³ = x，所以 x = 8"
    },
    {
        id: 11,
        question: "一个长方体的长、宽、高分别为6厘米、4厘米和5厘米，求其表面积。",
        options: [
            "A. 120 平方厘米",
            "B. 148 平方厘米",
            "C. 108 平方厘米",
            "D. 136 平方厘米"
        ],
        correctAnswer: "B. 148 平方厘米",
        explanation: "长方体表面积 = 2(长×宽 + 长×高 + 宽×高) = 2(6×4 + 6×5 + 4×5) = 2(24 + 30 + 20) = 2×74 = 148 平方厘米"
    },
    {
        id: 12,
        question: "如果 f(x) = x² - 4x + 3，求方程 f(x) = 0 的解。",
        options: [
            "A. x = 1 或 x = 3",
            "B. x = 2 或 x = 1",
            "C. x = -1 或 x = 3",
            "D. x = 2 或 x = -1"
        ],
        correctAnswer: "A. x = 1 或 x = 3",
        explanation: "x² - 4x + 3 = 0，使用因式分解：(x - 1)(x - 3) = 0，所以 x = 1 或 x = 3"
    },
    {
        id: 13,
        question: "在一个等边三角形中，如果边长为6厘米，求其高。",
        options: [
            "A. 3√3 厘米",
            "B. 6√3 厘米",
            "C. 3 厘米",
            "D. 9 厘米"
        ],
        correctAnswer: "A. 3√3 厘米",
        explanation: "等边三角形的高 = (边长 × √3)/2 = (6 × √3)/2 = 3√3 厘米"
    },
    {
        id: 14,
        question: "如果 A = {1, 2, 3, 4, 5} 且 B = {4, 5, 6, 7}，求 A ∩ B。",
        options: [
            "A. {1, 2, 3}",
            "B. {4, 5}",
            "C. {6, 7}",
            "D. {1, 2, 3, 4, 5, 6, 7}"
        ],
        correctAnswer: "B. {4, 5}",
        explanation: "A ∩ B 表示同时属于集合A和集合B的元素，即 {4, 5}"
    },
    {
        id: 15,
        question: "求 (2x + 3)(x - 4) 的展开式。",
        options: [
            "A. 2x² - 5x - 12",
            "B. 2x² - 8x - 12",
            "C. 2x² + 3x - 12",
            "D. 2x² - 5x + 12"
        ],
        correctAnswer: "A. 2x² - 5x - 12",
        explanation: "(2x + 3)(x - 4) = 2x² - 8x + 3x - 12 = 2x² - 5x - 12"
    }
];

// 随机选择题目函数
function getRandomQuestions(count) {
    // 复制题库数组，避免修改原数组
    const questionsCopy = [...mathQuestions];
    // 打乱数组顺序
    const shuffledQuestions = questionsCopy.sort(() => Math.random() - 0.5);
    // 返回指定数量的题目
    return shuffledQuestions.slice(0, count);
}

// 生成HTML题目函数
function generateQuestionsHTML(questions) {
    let html = '';
    
    questions.forEach((q, index) => {
        html += `
            <div class="question-section">
                <h3>问题 ${index + 1}</h3>
                <div class="question-text">
                    <p>${q.question}</p>
                </div>
                <ul class="options-list" data-correct="${q.correctAnswer}" data-explanation="${q.explanation}">
                    ${q.options.map(option => `<li class="option-item">${option}</li>`).join('')}
                </ul>
            </div>
        `;
    });
    
    return html;
}

// 评分函数
function gradeExam() {
    const questionSections = document.querySelectorAll('.question-section');
    let correctCount = 0;
    let totalQuestions = questionSections.length;
    let resultsHTML = '';
    
    questionSections.forEach((section, index) => {
        const optionsList = section.querySelector('.options-list');
        const correctAnswer = optionsList.getAttribute('data-correct');
        const explanation = optionsList.getAttribute('data-explanation');
        const selectedOption = section.querySelector('.option-item.selected');
        const questionText = section.querySelector('.question-text p').textContent;
        
        let isCorrect = false;
        let selectedText = '未作答';
        
        if (selectedOption) {
            selectedText = selectedOption.textContent;
            isCorrect = selectedText === correctAnswer;
        }
        
        if (isCorrect) correctCount++;
        
        resultsHTML += `
            <div class="result-item ${isCorrect ? 'correct' : 'incorrect'}">
                <p><strong>问题 ${index + 1}:</strong> ${isCorrect ? '正确' : '错误'}</p>
                <p>题目: ${questionText}</p>
                <p>你的答案: ${selectedText}</p>
                <p>正确答案: ${correctAnswer}</p>
                ${!isCorrect ? `<p>解析: ${explanation}</p>` : ''}
            </div>
        `;
    });
    
    const scorePercentage = Math.round((correctCount / totalQuestions) * 100);
    document.querySelector('.score-display').textContent = `${scorePercentage}%`;
    document.querySelector('.results-details').innerHTML = `<h4>详细分析</h4>${resultsHTML}`;
}

// 页面加载时初始化
document.addEventListener('DOMContentLoaded', function() {
    const examContent = document.getElementById('math-exam');
    const submitButton = document.getElementById('submit-exam');
    const resultsSection = document.getElementById('results');
    
    // 只有在考试页面存在时才执行
    if (examContent) {
        // 获取3道随机题目
        const randomQuestions = getRandomQuestions(3);
        
        // 生成HTML并插入到页面
        const questionsContainer = document.createElement('div');
        questionsContainer.innerHTML = generateQuestionsHTML(randomQuestions);
        
        // 清空现有题目
        while (examContent.firstChild) {
            if (examContent.firstChild.classList && examContent.firstChild.classList.contains('submit-section')) {
                break;
            }
            examContent.removeChild(examContent.firstChild);
        }
        
        // 在提交按钮前插入新题目
        const submitSection = examContent.querySelector('.submit-section');
        examContent.insertBefore(questionsContainer, submitSection);
        
        // 添加选项点击事件
        const optionItems = examContent.querySelectorAll('.option-item');
        optionItems.forEach(item => {
            item.addEventListener('click', function() {
                // 移除同组中其他选项的选中状态
                const parentList = this.parentElement;
                parentList.querySelectorAll('.option-item').forEach(option => {
                    option.classList.remove('selected');
                });
                // 添加当前选项的选中状态
                this.classList.add('selected');
            });
        });
        
        // 提交考试功能
        if (submitButton) {
            submitButton.addEventListener('click', function() {
                gradeExam();
                examContent.style.display = 'none';
                resultsSection.style.display = 'block';
                // 停止计时器（如果有的话）
                if (typeof timerInterval !== 'undefined') {
                    clearInterval(timerInterval);
                    isRunning = false;
                }
            });
        }
    }
});