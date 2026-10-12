import { createBrowserRouter } from "react-router";
import IntroLayout from "../IntroLayout";
import { ROUTES } from "./routes";
import Login from "../IntroLayout/Auth/Login";
import Register from "../IntroLayout/Auth/Register";
import GoalDefinition from "../IntroLayout/GoalDefinition/GoalDefinition";
import RootLayout from "@/RootLayout";
import Dashboard from "@/RootLayout/Dashboard/Dashboard";
import Pedidos from "@/RootLayout/Pedidos/Pedidos";
import Estoque from "@/RootLayout/Estoque/Estoque";
import Vitrine from "@/RootLayout/Vitrine/Vitrine";

const router = createBrowserRouter([
  {
    element: <IntroLayout />,
    children: [
      {
        path: ROUTES.REGISTER,
        element: <Register />,
      },
      {
        path: ROUTES.LOGIN,
        element: <Login />,
      },

      {
        path: ROUTES.GOALDEFINITION,
        element: <GoalDefinition />,
      },
    ],
  },
  {
    element: <RootLayout />,
    children: [
      {
        path: ROUTES.DASHBOARD,
        element: <Dashboard />
      },
      {
        path: ROUTES.ORDERS,
        element: <Pedidos />
      },
      {
        path: ROUTES.STOCK,
        element: <Estoque />
      },
      {
        path: ROUTES.WINDOW,
        element: <Vitrine />
      }
    ]
  }
]);

export default router;
