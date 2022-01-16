import React, {FC} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./containers/Login/Login";
import Converter from "./containers/Converter/Converter";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/converter" element={<Converter />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;