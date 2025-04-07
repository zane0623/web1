// 语言配置
const translations = {
    'zh': {
        'title': 'IGCSE 学习资源',
        'nav_home': '首页',
        'nav_subjects': '课程',
        'nav_resources': '资源',
        'nav_about': '关于',
        'hero_title': '欢迎来到 IGCSE 学习平台',
        'hero_desc': '这里提供全面的 IGCSE 课程资源和学习支持，帮助你实现学术目标。',
        'core_courses': '核心课程',
        'online_tutoring': '在线辅导',
        'mock_exams': '模拟考试',
        'core_courses_desc': '提供数学、科学、英语、历史等核心课程的详细学习资料和练习题。',
        'online_tutoring_desc': '经验丰富的教师提供一对一在线辅导，帮助你掌握难点。',
        'mock_exams_desc': '定期更新的模拟试题和详细解析，助你备战考试。',
        'mathematics': '数学 (Mathematics)',
        'science': '科学 (Science)',
        'english': '英语 (English)',
        'history': '历史 (History)',
        'view_details': '查看详情',
        'copyright': '© 2025 IGCSE学习资源. 保留所有权利。',
        'wechat': '微信',
        'qq': 'QQ',
        'weibo': '微博',
        'exam_center': '模拟考试中心',
        'exam_desc': '通过模拟考试检验你的学习成果，提前适应IGCSE考试环境',
        'math_exam': '数学模拟考试',
        'english_exam': '英语模拟考试',
        'science_exam': '科学模拟考试',
        'duration': '时长',
        'question_count': '题目数量',
        'difficulty': '难度',
        'content_coverage': '覆盖内容',
        'start_exam': '开始考试',
        'exam_timer': '考试计时器',
        'timer_instruction': '请在开始考试前设置计时器',
        'start': '开始',
        'pause': '暂停',
        'reset': '重置',
        'submit_answer': '提交答案',
        'exam_results': '考试结果',
        'congratulations': '恭喜你完成了模拟考试！',
        'detailed_analysis': '详细分析',
        'correct': '正确',
        'incorrect': '错误',
        'your_answer': '你的答案',
        'correct_answer': '正确答案',
        'explanation': '解析',
        'return_to_exams': '返回考试列表'
    },
    'en': {
        'title': 'IGCSE Learning Resources',
        'nav_home': 'Home',
        'nav_subjects': 'Subjects',
        'nav_resources': 'Resources',
        'nav_about': 'About',
        'hero_title': 'Welcome to IGCSE Learning Platform',
        'hero_desc': 'We provide comprehensive IGCSE course resources and learning support to help you achieve your academic goals.',
        'core_courses': 'Core Courses',
        'online_tutoring': 'Online Tutoring',
        'mock_exams': 'Mock Exams',
        'core_courses_desc': 'Detailed learning materials and exercises for core subjects including Mathematics, Science, English, and History.',
        'online_tutoring_desc': 'One-on-one online tutoring from experienced teachers to help you master difficult concepts.',
        'mock_exams_desc': 'Regularly updated mock exam questions and detailed solutions to help you prepare for exams.',
        'mathematics': 'Mathematics',
        'science': 'Science',
        'english': 'English',
        'history': 'History',
        'view_details': 'View Details',
        'copyright': '© 2025 IGCSE Learning Resources. All rights reserved.',
        'wechat': 'WeChat',
        'qq': 'QQ',
        'weibo': 'Weibo'
    }
};

// 当前语言
let currentLang = localStorage.getItem('language') || 'zh';

// 切换语言函数
function switchLanguage(lang) {
    if (lang === currentLang) return;
    currentLang = lang;
    localStorage.setItem('language', lang);
    updateContent();
}

// 更新页面内容
function updateContent() {
    document.documentElement.lang = currentLang;
    
    // 更新标题和导航
    document.querySelector('.header h1').textContent = translations[currentLang].title;
    document.querySelector('title').textContent = translations[currentLang].title;
    
    // 更新导航链接
    const navLinks = document.querySelectorAll('.nav a');
    navLinks[0].textContent = translations[currentLang].nav_home;
    navLinks[1].textContent = translations[currentLang].nav_subjects;
    navLinks[2].textContent = translations[currentLang].nav_resources;
    navLinks[3].textContent = translations[currentLang].nav_about;
    
    // 更新英雄区域
    document.querySelector('.hero h2').textContent = translations[currentLang].hero_title;
    document.querySelector('.hero p').textContent = translations[currentLang].hero_desc;
    
    // 更新特性卡片
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards[0].querySelector('h3').textContent = translations[currentLang].core_courses;
    featureCards[0].querySelector('p').textContent = translations[currentLang].core_courses_desc;
    featureCards[1].querySelector('h3').textContent = translations[currentLang].online_tutoring;
    featureCards[1].querySelector('p').textContent = translations[currentLang].online_tutoring_desc;
    featureCards[2].querySelector('h3').textContent = translations[currentLang].mock_exams;
    featureCards[2].querySelector('p').textContent = translations[currentLang].mock_exams_desc;
    
    // 更新课程卡片
    const subjectCards = document.querySelectorAll('.subject-card');
    subjectCards[0].querySelector('h3').textContent = translations[currentLang].mathematics;
    subjectCards[1].querySelector('h3').textContent = translations[currentLang].science;
    subjectCards[2].querySelector('h3').textContent = translations[currentLang].english;
    
    // 更新查看详情按钮
    document.querySelectorAll('.subject-link').forEach(link => {
        link.textContent = translations[currentLang].view_details;
    });
    
    // 更新页脚
    const socialLinks = document.querySelectorAll('.social-links a');
    socialLinks[0].textContent = translations[currentLang].wechat;
    socialLinks[1].textContent = translations[currentLang].qq;
    socialLinks[2].textContent = translations[currentLang].weibo;
    
    document.querySelector('.copyright').textContent = translations[currentLang].copyright;
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    updateContent();
});