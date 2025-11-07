import "./style.scss";
import logo from "../../assets/mascots/gnome-2.png"; 

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer container-fluid py-4">
      <div className="row align-items-center">
        <div className="col-md-6 mb-3 mb-md-0">
          <h6 className="text-light fw-bold mb-3">Navegação</h6>
          <ul className="list-unstyled footer-links">
            <li><a href="#">Mapa</a></li>
            <li><a href="#">Login</a></li>
            <li><a href="#">Cadastrar</a></li>
            <li><a href="#">Políticas</a></li>
            <li><a href="#">Suporte</a></li>
          </ul>
        </div>

        <div className="col-md-6 text-md-end text-center">
          <img src={logo} alt="EcoGarden" className="footer-logo mb-2" />
          <p className="text-light small mb-0">Cultive mais 🌱</p>
        </div>
      </div>

      <hr className="footer-divider" />
      <p className="text-center text-light small mb-0">
        &copy; EcoGarden {year}
      </p>
    </footer>
  );
};
