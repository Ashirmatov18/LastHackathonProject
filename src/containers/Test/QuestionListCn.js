import React from 'react';

const QuestionListCn = [
    {
        question: 'Zhè ______ yīfu duōshǎo qián? 这 _______衣服多少钱?',
        answerList: [
            { answer: 'ge / 个', isCorrect : false},
            { answer: 'jiàn / 件', isCorrect : true},
            { answer: 'tiáo /条', isCorrect : false},
            { answer: 'běn / 本', isCorrect : false}
        ],
    },
    {
        question: 'liǎng tiān_______, wǒ mǎi le yì tiáo qúnzi. 两天 _______，我买了一条裙子',
        answerList: [
            { answer: 'qián / 前', isCorrect : true},
            { answer: 'hòu / 后', isCorrect : false},
            { answer: 'shang / 上', isCorrect : false},
            { answer: 'xià / 下', isCorrect : false}
        ],
    },
    {
        question: 'Sān nián qián, wǒ qù_______Zhōngguó. 三年前，我去 _______中国',
        answerList: [
            { answer: 'zài / 在', isCorrect : false},
            { answer: 'le / 了', isCorrect : false},
            { answer: 'guo / 过', isCorrect : true},
            { answer: 'lái / 来', isCorrect : false}
        ],
    },
    {
        question: 'Wǒde jiā_______gōngyuán . 我的家 _______公园',
        answerList: [
            { answer: 'Kàojìn / 靠近', isCorrect : true},
            { answer: 'pángbian / 旁边', isCorrect : false},
            { answer: 'fùjìn / 附近', isCorrect : false},
            { answer: 'jìn / 近', isCorrect : false}
        ],
    },
    {
        question: 'Xià ge xīngqī_______kǎoshì____ .下个星期 _______ 考试 ____',
        answerList: [
            { answer: 'jiù yào, le / 就要，了', isCorrect : true},
            { answer: 'huì, le / 会，了', isCorrect : false},
            { answer: 'zài, le / 在，了', isCorrect : false},
            { answer: 'kuài yào, le / 快要，了', isCorrect : false}
        ],
    },
]
export default QuestionListCn;