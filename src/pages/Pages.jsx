import Cuisine from "./Cuisine";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import Result from "./Result";

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/cuisine/:type" element={<Cuisine />}></Route>
      <Route path="/search/:input" element={<Result />}></Route>
    </Routes>
  );
}

export default Pages;
