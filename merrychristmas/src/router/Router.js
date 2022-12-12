import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Edit from "../pages/Edit";
import Detail from "../pages/Detail";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="detail" element={<Detail />} />
        <Route path="edit" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
