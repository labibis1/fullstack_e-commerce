import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router";
import App from "./App";
import Rootlayout from "./components/Rootlayout";
import { ThemeProvider } from "@/components/theme-provider";
import Shop from "./Pages/Shop";

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path="/" element={<Rootlayout />}>

    <Route index element={<App />}></Route>
    <Route path="/shop" element={<Shop />}></Route>

  </Route>)
);

createRoot(document.getElementById("root")).render(

  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <RouterProvider router={router} />
</ThemeProvider>

);
