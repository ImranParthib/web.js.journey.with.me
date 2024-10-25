import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Project from "./components/Project";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "about", element: <About /> },
      { path: "education", element: <Education /> },
      { path: "experience", element: <Experience /> },
      { path: "project", element: <Project /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
