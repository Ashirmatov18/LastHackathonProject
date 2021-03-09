import React, { useState } from 'react';
import QuestionListEng from './QuestionListEng';
import { v4 as uuidv4 } from 'uuid';
import classes from './Test.css'

const EnglishMainTest = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0)
    const [clicked, setClicked] = useState(false)
    const [showScore, setShowScore] = useState(false)

    const handleCorrect = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1)
        }
        setClicked(true)
    }

    const handleNextQuestion = () => {
        setClicked(false);
        if (currentQuestion < QuestionListEng.length - 1) {
            setCurrentQuestion(currentQuestion + 1)
        } else {
            setShowScore(true)
        }
    }

    return (
        <div className ='main'>
        <div className='app-wrapper'>
            {showScore ?
                (
                    <div>
                        <div className='completed'>Completed </div>
                        <div className='score-section'>
                            Your Score : {score}/{QuestionListEng.length}
                        </div>
                    </div>
                ) : (
                    <div>
                        <div className='question-section-wrapper'>
                            <div className='question-count'>
                                Question {currentQuestion + 1} of {QuestionListEng.length}
                            </div>
                            <div className='question'>
                                {QuestionListEng[currentQuestion].question}
                            </div>
                        </div>
                        <div className='answer-section-wrapper'>
                            {QuestionListEng[currentQuestion].answerList.map((item) => (
                                <li className='answer-list' key={uuidv4()}>
                                    <button className='answer-button' onClick={()=>handleCorrect(item.isCorrect)}>{item.answer}</button>
                                </li>
                            ))}
                        </div>

                        <div>
                            <button className='next-button' onClick={handleNextQuestion}>Next</button>
                        </div>
                    </div>
                )}
        </div>
        </div>
    );
};

export default EnglishMainTest;