import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import About from "./component/About";
import WhatIDo from "./component/WhatIDo";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbar></Navbar>
    <Home></Home>
    <About></About>
    <WhatIDo></WhatIDo>
  </StrictMode>
);
