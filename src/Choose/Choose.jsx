import "../Start/StartWindow.scss";
import "../RegForm/RegForm.scss";
import "../Choose/Choose.scss";
import { replace, useLocation, useNavigate } from "react-router-dom";

function Choose() {

  // const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <div className="container container-reg">
        <div className="enter enter__choose">
          <div className="enter__img enter__img-reg">
            <img src="/img/logo.png" alt="logo-img" />
          </div>
          <div className="enter__text-info enter__text-info_choose enter__text-info_smaller">
            Christmas plan поможет Вам спланировать и провести незабываемое
            Рождество или Новый год.
          </div>
          <div className="enter__text-info enter__text-info_grey">
            К какому празднику Вы готовитесь:
          </div>
          <div className="enter__text-info enter__text-info_mobile">
            Я готовлюсь к…
          </div>
          <form action="" method="POST">
            <div className="enter__btns-choose">
              <button className="btns christmas" onClick={() => navigate('/quiz', {replace: false})}>
                <img className="star" src="/img/star.png" alt="christmas-img" />
                Рождество
              </button>
              <button className="btns new-year" onClick={() => navigate('/quiz', {replace: false})}>
                <img className="tree" src="/img/tree.svg" alt="new-year-img" />
                Новый год
              </button>
            </div>
          </form>
          {/* <div className="enter__decoration">
            // Столб для кнопки
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Choose;
