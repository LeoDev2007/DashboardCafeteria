import { Outlet } from "react-router";
import Header from "./Components/Menus/Header"; 
import GlobalModal from "./Components/GlobalModal";
import ProfileMenu from "./Components/ProfileMenu";

const RootLayout = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      
      <header style={{display: "flex", justifyContent: "flex-end", padding: "1rem"}}>
        <ProfileMenu />
      </header>
    
      <main style={{ flex: 1, paddingBottom: "60px" }}> 
        <Outlet />
      </main>

      
      <footer style={{ position: "fixed", bottom: 0, left: 0, width: "100%", zIndex: 10 }}>
        <Header />
      </footer>

      <GlobalModal />
    </div>
  );
};

export default RootLayout;
