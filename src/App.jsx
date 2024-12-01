import { useEffect, useState } from "react";
import SnowFlake from "./SnowFlake/SnowFlake";
import "./App.scss";
import StartWindow from "./Start/StartWindow";
import RegForm from "./RegForm/RegForm";
import SnowFlakeGen from "./SnowFlake/SnowFlakeGen";
import Choose from "./Choose/Choose";
import Quiz from "./Quiz/Quiz";
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {

  const [isLogged, setIsLogged] = useState(false);
  // const [isAnimating, setIsAnimating] = useState(false);

  const switchWindow = () => {
    // setIsAnimating(true);
    // setTimeout(() => {
      setIsLogged(true);
      // setIsAnimating(false);
    // }, 500);
  }

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isLogged ? <RegForm/> : <StartWindow startReg={switchWindow}/> }/>
        <Route path="choose-event" element={<Choose/>}/>
        <Route path="quiz" element={<Quiz/>}/>
      </Routes>
    </BrowserRouter>
      {/* <div className={`enter ${isAnimating ? (isLogged ? 'enter-exit': 'enter-enter') : ''}`}> */}
        {/* {isLogged ? <RegForm/> : <StartWindow startReg={switchWindow}/> } */}
      {/* </div> */}
      {/* <Choose/> */}
      {/* <Quiz/> */}
      <div className="snowCloud">
        <SnowFlakeGen />
      </div>
    </>
  );
}

export default App;