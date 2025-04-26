import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import App from "./App";
import Rootlayout from "./components/Rootlayout";
import { ThemeProvider } from "@/components/theme-provider";
import Shop from "./Pages/Shop";
import SingleProduct from "./Pages/SingleProduct";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Rootlayout />}>
        <Route index element={<App />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/singleproduct/:id" element={<SingleProduct />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
      </Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={< Signup />}></Route>

    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <RouterProvider router={router} />
  </ThemeProvider>
);
