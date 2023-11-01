import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import CheckOut from "../pages/CheckOut/CheckOut";
import Bookings from "../pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <SignUp></SignUp>,
      },
      {
        path: "/checkOut/:id",
        element: (
          <PrivateRoute>
            {" "}
            <CheckOut></CheckOut>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            ` https://car-doctor-server-3961cyx67-biplobs-projects-623841b5.vercel.app/services/${params.id}`
          ),
      },
      {
        path: "/bookings",
        element: (
          <PrivateRoute>
            {" "}
            <Bookings></Bookings>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
export default router;
