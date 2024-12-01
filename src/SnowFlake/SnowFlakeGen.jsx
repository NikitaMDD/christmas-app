import React from "react";
import { useState, useEffect } from "react";
import snowflakeImage from '../assets/snow.svg';

function SnowFlakeGen() {

  const [snowflakes, setSnowflakes] = useState([]);

  const createSnowflakes = () => {

    // Дата 

    const date = new Date();
    const day = date.getDay();
    const month = date.getMonth();

    // Количество снежинок

    let snowflakeCount;

    if (month === 11 && day <= 25) {
      snowflakeCount = 500;
    } else if (month === 0 && day <= 7) {
      snowflakeCount = 500;
    } else if (month === 11) {
      snowflakeCount = 200;
    } else {
      snowflakeCount = 100;
    }
  
    const newSnowflakes = Array.from(
      { length: snowflakeCount },
      (_, index) => ({
        id: index,
        left: `calc(${Math.random() * 100}vw - 1.5rem)`, // Учитываем ширину снежинки
        duration: Math.random() * 3 + 2 + "s", // Длительность анимации
        delay: Math.random() * 5 + "s", // Случайная задержка перед началом анимации
        size: Math.random() * 1 + 0.5 + "rem", // Размер снежинки
      })
    );
  
    setSnowflakes(newSnowflakes);
  };

  useEffect(() => {
    createSnowflakes();
  }, []);

  return (
    <>
      {/* Генерация снежинок */}

      {snowflakes.map(({ id, left, duration, size, delay }) => (
        <div
          key={id}
          className="snowflake"
          style={{
            left,
            animationDuration: duration,
            animationDelay: delay, // Примените задержку
            fontSize: size,
          }}
        >
          <img src={snowflakeImage} alt="Snowflake" />
        </div>
      ))}
    </>
  );
}

export default SnowFlakeGen;
