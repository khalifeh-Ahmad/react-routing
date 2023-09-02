import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Rooot from "./routes/Rooot";
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import Faq from "./routes/Faq";
import ErrorPage from "./routes/ErrorPage";
import UserLayout from "./routes/UserLayout";
import UserInfo from "./routes/UserInfo";
import UserEdit from "./routes/UserEdit";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Rooot />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "faq",
        element: <Faq />,
      },
    ],
  },
  {
    path: "/user",
    element: <UserLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <h1>Welcome</h1> },
      {
        path: ":userId/edit",
        element: <UserEdit />,
      },
      {
        path: "info",
        element: <UserInfo />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routes} />);

reportWebVitals();
