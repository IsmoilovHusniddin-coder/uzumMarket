import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HeaderTop from "./header-top";
import HeaderCenter from "./header-center";
import HeaderBottom from "./header-bottom";
// import { MainCards } from "./maincards";
import ProductCard from "./productcard";
// import { Shop } from "./shop";

function App() {
  return (
    <>
      <HeaderTop />,
      <HeaderCenter />
      <HeaderBottom />
      <ProductCard />
      {/* <Shop /> */}
    </>
  );
}

export default App;
