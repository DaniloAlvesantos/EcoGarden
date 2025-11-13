import { useEffect, useState } from "react";

import { handleLogin } from "../../utils/auth";
import { LoginForm, type LoginFormData } from "../../components/forms/login";
import { mascots } from "../../constants/login";
import Gnome from "../../assets/mascots/gnome-plate.png";

import "./login.scss";
import { useAuthStore } from "../../stores/auth";
import Cookies from "universal-cookie";
import { redirect } from "react-router-dom";

export function LoginView() {
  const cookies = new Cookies();
  const [passwordVisible, setPasswordVisible] = useState(false);
  // Avoid unnecessary re-renders
  const [chosenMascot] = useState(
    mascots[Math.floor(Math.random() * mascots.length)]
  );

  const { user, setUser } = useAuthStore();

  useEffect(() => {
    if (user && user.email) {
      redirect("/");
    }
  }, [user]);

  const handlePasswordVisible = () => {
    setPasswordVisible((prev) => !prev);
  };

  const handleForm = async (data: LoginFormData) => {
    const hasEmptyValue = Object.entries(data).some(([, value]) => !value);
    if (hasEmptyValue) {
      alert("Formulário possui valor vazio!");
      return;
    }

    const loginData = await handleLogin(data);

    if (loginData.error) {
      alert(loginData.error.message);
      return;
    }

    const { token, currentUser, expires } = loginData;
    console.log(expires);

    cookies.set("ecogarden-token", token, {
      expires,
    });

    setUser(currentUser);
  };

  return (
    <section id="login">
      <div id="form-field">
        <div
          id="logo"
          className="d-flex mx-auto align-items-center font-primary fw-bold"
        >
          <img src={Gnome} alt="Gnome with plate" />
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
        <img src={chosenMascot.path} alt={chosenMascot.name} />
      </div>
    </section>
  );
}
