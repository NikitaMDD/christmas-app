import '../Start/StartWindow.scss';

function StartWindow({startReg}) {
  return (
    <>
      <div className="container">
        <div className="enter">
          <div className="enter__img">
            <img src="/img/logo.png" alt="logo-img" />
          </div>
          <div className="enter__text-name rochester-regular">
            Christmas plan
          </div>
          <div className="enter__text-info">
            Сделайте свой праздник незабываемым!
          </div>
          <div className="enter__button">
            <button onClick={startReg}>Войти</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default StartWindow;
