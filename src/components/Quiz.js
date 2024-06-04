import React, { useState, useEffect } from 'react';
import { fetchQuestions, submitQuiz } from '../utils/apiService';

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const user = JSON.parse(localStorage.getItem('logeduser'));
  const userId = user._id;
  const token = localStorage.getItem('auth');

  useEffect(() => {
    const getQuestions = async () => {
      try {
        const fetchedQuestions = await fetchQuestions();
        setQuestions(fetchedQuestions);
      } catch (error) {
        console.error(error);
      }
    };
    

    getQuestions();
  }, []);

  const handleAnswerChange = (questionId, optionIndex) => {
    setAnswers({
     ...answers,
      [questionId]: optionIndex,
    });
  };

  const handleSubmitQuiz = async () => {
    try {
      const response = await submitQuiz(userId, answers, token);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6">Quiz</h2>
        User id {user._id}
        {questions.map((question, index) => (
          <div key={question._id} className="mb-4">
            <p className="mb-2">Q{index + 1}) {question.text}</p>
            {question.options.map((option, index) => (
              <label key={index} className="block">
                <input
                  type="radio"
                  name={`question-${question._id}`}
                  value={index}
                  checked={answers[question._id] === index}
                  onChange={() => handleAnswerChange(question._id, index)}
                />
                {option.text}
              </label>
            ))}
          </div>
        ))}
        <button
          onClick={handleSubmitQuiz}
          className="bg-blue-500 text-white px-4 py-2 rounded w-full"
        >
          Submit Quiz
        </button>
      </div>
    </div>
  );
};

export default Quiz;