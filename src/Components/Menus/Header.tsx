import { NavLink } from "react-router";
import {
  FiGrid,
  FiShoppingBag,
  FiClipboard,
  FiPackage,
  FiSettings,
  FiLogOut,
} from "react-icons/fi";
import { ROUTES } from "../../routes/routes";
import styles from "./Menu.module.css";

type HeaderProps = {
  onSettings?: () => void;
  onLogout?: () => void;
};

const Header = ({ onSettings, onLogout }: HeaderProps) => {
  return (
    <nav className={styles.menuContainer} aria-label="Menu principal">
      <div className={styles.menuTop}>
        <div className={styles.logo}>
          <span className={styles.logoIcon}>C</span>
          <span className={styles.logoText}>Cafeteria</span>
        </div>

        <div className={styles.menuLinks}>
          <NavLink
            to={ROUTES.DASHBOARD}
            className={({ isActive }) =>
              `${styles.link} ${isActive ? styles.active : ""}`
            }
          >
            <FiGrid />
            <span>Dashboard</span>
          </NavLink>

          <NavLink
            to={ROUTES.WINDOW}
            className={({ isActive }) =>
              `${styles.link} ${isActive ? styles.active : ""}`
            }
          >
            <FiShoppingBag />
            <span>Vitrine</span>
          </NavLink>

          <NavLink
            to={ROUTES.ORDERS}
            className={({ isActive }) =>
              `${styles.link} ${isActive ? styles.active : ""}`
            }
          >
            <FiClipboard />
            <span>Pedidos</span>
          </NavLink>

          <NavLink
            to={ROUTES.STOCK}
            className={({ isActive }) =>
              `${styles.link} ${isActive ? styles.active : ""}`
            }
          >
            <FiPackage />
            <span>Estoque</span>
          </NavLink>
        </div>
      </div>

      <div className={styles.menuBottom}>
        <button
          type="button"
          className={styles.link}
          onClick={onSettings}
        >
          <FiSettings />
          <span>Configurações</span>
        </button>

        <button
          type="button"
          className={`${styles.link} ${styles.logout}`}
          onClick={onLogout}
        >
          <FiLogOut />
          <span>Sair</span>
        </button>
      </div>
    </nav>
  );
};

export default Header;