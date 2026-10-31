import { Outlet } from "react-router";
import Header from "./Components/Menus/Header";
import GlobalModal from "./Components/GlobalModal";
import styles from "./RootLayout.module.css";

const RootLayout = () => {
  return (
    <div className={styles.layout}>
      <Header />

      <main className={styles.main}>
        <Outlet />
      </main>

      <GlobalModal />
    </div>
  );
};

export default RootLayout;