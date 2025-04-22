import React from "react";
import { Button } from "@/components/ui/button";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import Banner from "./components/Banner";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Featuresproduct from "./components/Featuresproduct";

const App = () => {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {/* <Navbar /> */}
      <Banner/>
      <Categories/>
      <Featuresproduct/>
      {/* <Footer/> */}
    </ThemeProvider>
  );
};

export default App;
