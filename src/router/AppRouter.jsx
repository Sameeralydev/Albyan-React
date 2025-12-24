import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import About from "../components/about/About";
import Services from "../components/services/Services";
import Contact from "../components/contact/Contact";
import Blog from "../components/blog/Blog";
import Montessori from "../components/curriculum/Montessori";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/services", element: <Services /> },
      { path: "/contact", element: <Contact /> },
      { path: "/blog", element: <Blog /> },
      { path: "/montessori-wing", element: <Montessori /> },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
