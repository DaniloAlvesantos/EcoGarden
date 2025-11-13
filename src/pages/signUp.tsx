import { useState } from "react";
import { SignUpForm, type SignUpFormData } from "../components/forms/signup";
import { mascots } from "../constants/login";
import Gnome from "../assets/mascots/gnome-plate.png";
import "../views/login/login.scss";

export function SignUpPage() {
  const [chosenMascot] = useState(
    mascots[Math.floor(Math.random() * mascots.length)]
  );

  const handleForm = async (data: SignUpFormData) => {
    const hasEmptyValue = Object.entries(data).some(([, value]) => !value);
    if (!hasEmptyValue) {
      alert("Formulário possui valor vazio!");
      return;
    }
  };

  return (
    <section id="login">
      <div id="form-field">
        <div
          id="logo"
          className="d-flex mx-auto align-items-center font-primary fw-bold"
        >
          <img
            src={Gnome}
            alt="Gnome with plate"
          />
          <p>Eco Garden</p>
        </div>
        <SignUpForm handleForm={handleForm} />
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
