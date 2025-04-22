import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router";
import App from "./App";
import Rootlayout from "./components/Rootlayout";
import { ThemeProvider } from "@/components/theme-provider";

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path="/" element={<Rootlayout />}>
    <Route index element={<App />}></Route>
    <Route path="/shop" element={<h1>Shop</h1>}></Route>
  </Route>)
);

createRoot(document.getElementById("root")).render(

  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <RouterProvider router={router} />
</ThemeProvider>

);
