import { useState } from "react";
import { AsideMenu } from "../asides/asideMenu/aside";
import { RiMenu3Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import "./header.scss";

export const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleAside = () => setIsOpen((prev) => !prev);

  return (
    <header className="w-100 px-2 d-flex align-items-center justify-content-between">
      <div className="d-flex align-items-center">
        <img
          className="me-2 img-fluid logo"
          src="/gnome-1.png"
          alt="gnome mascot"
        />
        <span className="font-primary fw-bold">EcoGarden</span>
      </div>

      <NavItems />

      <span
        className="d-md-none p-2 rounded-circle transition-colors"
        style={{ cursor: "pointer" }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.backgroundColor = "rgba(94, 94, 94, 0.1)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.backgroundColor = "transparent")
        }
        onClick={toggleAside}
      >
        <RiMenu3Line size={24} />
      </span>

      <AsideMenu
        isOpen={isOpen}
        navigation={[
          { title: "Sobre", url: "#about" },
          { title: "Recursos", url: "#features" },
          { title: "Login", url: "/login" },
          { title: "Localizar", url: "/map" },
        ]}
        setIsOpen={toggleAside}
      />
    </header>
  );
};

const NavItems = () => {
  return (
    <nav className="d-none d-md-block">
      <ul
        className="d-flex align-items-center list-unstyled mb-0 font-primary fw-medium"
        style={{ fontSize: "0.875rem", gap: "1rem" }}
      >
        <li
          className="hover-eco-green transition-colors"
          style={{ cursor: "pointer" }}
        >
          Sobre
        </li>
        <li
          className="hover-eco-green transition-colors"
          style={{ cursor: "pointer" }}
        >
          Recursos
        </li>
        <li
          className="hover-eco-green transition-colors"
          style={{ cursor: "pointer" }}
        >
          <Link to="/login" className="text-decoration-none text-inherit">
            Login
          </Link>
        </li>
        <li>
          <Link
            to="/map"
            className="btn bg-eco-green-500 text-eco-light rounded-pill px-4 py-2 text-decoration-none hover-eco-bg transition-colors"
          >
            Localizar
          </Link>
        </li>
      </ul>
    </nav>
  );
};
