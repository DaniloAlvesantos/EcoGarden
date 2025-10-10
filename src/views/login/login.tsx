import { useState } from "react";
import "./login.scss";
import { mascots } from "../../constants/login";
import { LoginForm, type LoginFormData } from "../../components/forms/login";

export function LoginView() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [chosenMascot] = useState(
    mascots[Math.floor(Math.random() * mascots.length)]
  );

  const handlePasswordVisible = () => {
    setPasswordVisible((prev) => !prev);
  };

  const handleForm = (data: LoginFormData) => {
    console.log(data);
  };

  return (
    <section id="login">
      <div id="form-field">
        <div
          id="logo"
          className="d-flex mx-auto align-items-center font-primary fw-bold"
        >
          <img
            src="src/assets/mascots/gnome-plate.png"
            alt="Gnome with plate"
          />
          <p>Eco Garden</p>
        </div>
        <LoginForm
          passwordVisible={passwordVisible}
          handlePasswordVisible={handlePasswordVisible}
          handleForm={handleForm}
        />
      </div>

      <div
        id="mascot"
        style={{
          // @ts-expect-error CSS var
          "--mascot-color": chosenMascot.color,
        }}
      >
        <img
          src={"src/assets/mascots" + chosenMascot.path}
          alt={chosenMascot.name}
        />
      </div>
    </section>
  );
}
