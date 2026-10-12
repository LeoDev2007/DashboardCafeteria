import styles from './Menu.module.css'
import { NavLink } from 'react-router'
import {ROUTES} from '../../routes/routes'
const Header = () => {
  return (
    <div className={styles.menuContainer}>
      <NavLink to={ROUTES.DASHBOARD} className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ""}`}>Dashboard</NavLink>
      <NavLink to={ROUTES.WINDOW} className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ""}`}>Vitrine</NavLink>
      <NavLink to={ROUTES.ORDERS} className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ""}`}>Pedidos</NavLink>
      <NavLink to={ROUTES.STOCK} className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ""}`}>Estoque</NavLink>
    </div>
  )
}

export default Header