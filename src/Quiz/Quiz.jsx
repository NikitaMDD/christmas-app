import React, { useState } from "react";
import { quizQuestions } from "./quizQuestions";
import "../Start/StartWindow.scss";

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const handleAnswerChange = (event) => {
    setSelectedAnswer(event.target.value);
  };

  const handleSubmitAnswer = (answer) => {
    if (selectedAnswer) {
      setUserAnswers([
        ...userAnswers,
        { question: quizQuestions[currentQuestionIndex].question, answer },
      ]);

      if (currentQuestionIndex < quizQuestions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer("");
      } else {
        // Отправка данных на бэкенд
        console.log("Ответы пользователя:", [
          ...userAnswers,
          { question: quizQuestions[currentQuestionIndex].question, answer },
        ]);
        sendResultsToBackend([
          ...userAnswers,
          { question: quizQuestions[currentQuestionIndex].question, answer },
        ]);
      }
    }
  };

  const currentQuestion = quizQuestions[currentQuestionIndex];

  const sendResultsToBackend = async (results) => {
    try {
      const response = await fetch("https://backend-api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ answers: results }),
      });
      const data = await response.json();
      console.log("Результаты успешно отправлены:", data);
    } catch (error) {
      console.error("Ошибка при отправке результатов:", error);
    }
  };

  return (
    <>
      <div className="container">
        <div className="enter">
          <div className="enter__img enter__img-reg">
            <img src="img/logo.png" alt="logo-img" />
          </div>
          <div className="enter__text-info enter__text-info_choos">
            {currentQuestion.question}
          </div>
          <div className="enter__text-info">
            <form>
              {Object.entries(currentQuestion.answers).map(([key, value]) => (
                <div key={key}>
                  <input
                    type="radio"
                    id={key}
                    name="answer"
                    value={value}
                    checked={selectedAnswer === value}
                    onChange={handleAnswerChange}
                  />
                  <label htmlFor={key}>{value}</label>
                </div>
              ))}
            </form>
          </div>
          <div className="enter__button">
            <button onClick={handleSubmitAnswer} disabled={!selectedAnswer}>
              Далее
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quiz;
