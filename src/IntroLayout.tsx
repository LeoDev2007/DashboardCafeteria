
import { Outlet } from "react-router";

const IntroLayout = () => {
  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "100vw", minHeight: "100vh"}}>
      <Outlet />
    </div>
  );
};

export default IntroLayout;
