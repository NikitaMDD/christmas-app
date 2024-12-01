import "../Start/StartWindow.scss";
import "../RegForm/RegForm.scss";
import { useRef } from "react";
import { useNavigate, Outlet } from "react-router-dom";

function RegForm() {

  const navigate = useNavigate();

  const mailInput = useRef(null);
  const passwordInput = useRef(null);

  const sendRequest = () => {
    fetch("test.php", {
      method: "POST",
      body: {
        mail: mailInput.current.value,
        password: passwordInput.current.value,
      },
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Проблема с ответом от сети " + response.status);
        }

        return response.json();
      })
      .then((data) => {
        console.log(data)
        // navigate('choose-event', { replace: false });
      })
      .catch((error) => console.error("Проблема с фетч оператором" + error));

    // console.log(mailInput.current.value);
    // console.log(passwordInput.current.value);
  };

  return (
    <>
      <div className="container container-reg">
        <div className="enter">
          <div className="enter__img enter__img-reg">
            <img src="img/logo.png" alt="logo-img" />
          </div>
          <div className="enter__text-info enter__text-info_smaller">
            Чтобы Ваш план был индивидуальным, пожалуйста, введите свой email и
            пароль.
          </div>
          <div className="enter__text-info enter__text-info_grey">
            Если ранее Вы уже вводили такую комбинацию, то Вы осуществите вход.
          </div>
          <div className="enter__form">
            <form action="" method="POST">
              <div>
                <input
                  type="mail"
                  id="mail"
                  ref={mailInput}
                  placeholder="Введите email"
                />
              </div>
              <div>
                <input
                  type="password"
                  id="password"
                  ref={passwordInput}
                  placeholder="Введите пароль не менее чем из 6-ти символов"
                />
              </div>
            </form>
          </div>
          <div className="enter__button">
            <button onClick={() => navigate('/christmas-app/choose-event', {replace: false})}>Войти</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegForm;
